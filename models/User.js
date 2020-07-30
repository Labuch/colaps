const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    facebookId: String,
    name: String,
    samples: Array,
    sequences: Array
});

mongoose.model('users', userSchema);