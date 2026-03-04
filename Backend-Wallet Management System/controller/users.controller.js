const User = require('../model/users.model');
const mongoose = require('mongoose');


const getUsers = (req,res,next) => {
    User.find()
    .sort({ _id: -1 })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error})
        })
};

const addUser = (req,res,next) => {
    const user = new User({
        date: req.body.date,
        type: req.body.type,
        record: req.body.record,
        paymentMethod: req.body.paymentMethod,
        amount: req.body.amount
    });
    user.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}


const updateUser = (req,res,next) => {
    const {_id,date, type, record, paymentMethod, amount} = req.body;
    
    const objectId = new mongoose.Types.ObjectId(_id);
    
    User.updateOne({_id: objectId}, 
        {$set: {
            
            date: date,
            type: type,
            record: record,
            paymentMethod: paymentMethod,
            amount: amount
        }})
        
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteUser = (req, res, next) => {
    const id = req.body?._id;
    
    if (!id) {
        return res.status(400).json({ error: "Missing _id in request body" });
    }

    // Validate and convert to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const objectId = new mongoose.Types.ObjectId(id);

    User.deleteOne({ _id: objectId })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;