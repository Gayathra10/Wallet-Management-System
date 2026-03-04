const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    record: String,
});

const Record  = mongoose.model('Record', recordSchema);

module.exports = Record;