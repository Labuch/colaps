const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SequenceSchema = new Schema({

    parameters: Object,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('sequences', SequenceSchema);