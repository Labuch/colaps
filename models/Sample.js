const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({

    name: String,
    buffer: String,
    _user: {type: Schema.Types.ObjectId, ref:'User'}
});

mongoose.model('samples', SampleSchema);