const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Sequence = mongoose.model('samples');


module.exports = app => {
    app.post('/api/sample/save', requireLogin,
        async (req, res) => {
            const {  name,  buffer } = req.body;
            await Sequence.findOneAndUpdate({_user:req.user.id },{parameters},{upsert :true} );
            res.send('task added');
        });

    app.get('/api/samples',requireLogin,
        async (req,res) => {
            const samples = await Sample.find({_user:req.user.id });
            res.send(samples);

        } );

};