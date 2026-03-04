const Payment = require('../model/payment.model');
const mongoose = require('mongoose');


const getPayments  = (req,res,next) => {
    Payment.find()
    .sort({ _id: -1 })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error})
        })
};

const addPayment = (req,res,next) => {
    const payment  = new Payment ({        
        payment: req.body.payment
    });
    payment.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deletePayment = (req, res, next) => {
    const id = req.body?._id;
    
    if (!id) {
        return res.status(400).json({ error: "Missing _id in request body" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const objectId = new mongoose.Types.ObjectId(id);

    Payment.deleteOne({ _id: objectId })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getPayments = getPayments;
exports.addPayment = addPayment;
exports.deletePayment = deletePayment;