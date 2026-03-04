const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    payment: String,
});

const Payment  = mongoose.model('Payment', paymentSchema);

module.exports = Payment;