const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Sequence = mongoose.model('sequences');


module.exports = app => {
    app.post('/api/sequence/save', requireLogin,
        async (req, res) => {
            const { parameters } = req.body;
            await Sequence.findOneAndUpdate({_user:req.user.id },{parameters},{upsert :true} );
            res.send('task added');
        });

    app.get('/api/sequence',requireLogin,
        async (req,res) => {
            const sequences = await Sequence.find({_user:req.user.id });
            res.send(sequences);

        } );

};
