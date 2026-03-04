const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    date: String,
    type: String,
    record: String,
    paymentMethod: String,
    amount: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;