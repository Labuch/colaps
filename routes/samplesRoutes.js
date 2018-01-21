const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Sample = mongoose.model('samples');
const multer = require('multer');
let upload  = multer({ storage: multer.memoryStorage()});


module.exports = app => {
    app.post('/api/sample/save',upload.array('somefile'),
        async (req, res) => {

            var sample = new Sample({
                name: req.body.name ,
                buffer: req.body.buffer,
                _user:req.user.id
            });
           if (req.body.name && req.body.buffer ){
               await sample.save();
               res.send("added");
           }
           else
           {
               res.send("choose a name and a file");
           }

        }
    );

    app.get('/api/samples',requireLogin,
        async (req,res) => {
            const samples = await Sample.find({_user: { $in : [ "5a59f81d914458139023b1b0" , req.user.id ] }});

            res.send(samples);

        }
    );

    app.delete('/api/sample/delete',requireLogin,
        async (req,res) => {
            const sample = await Sample.deleteOne({_user: req.user.id, _id: req.query.sampleId } )
            res.send(sample);
        }
    );
};