const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({

    name: String,
    buffer: ArrayBuffer,
    _owner_id: []
});

mongoose.model('samples', SampleSchema);