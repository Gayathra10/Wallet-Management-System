const Record = require('../model/record.model');
const mongoose = require('mongoose');


const getRecords  = (req,res,next) => {
    Record.find()
    .sort({ _id: -1 })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error})
        })
};

const addRecord = (req,res,next) => {
    const record  = new Record ({        
        record: req.body.record
    });
    record.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

const deleteRecord = (req, res, next) => {
    const id = req.body?._id;
    
    if (!id) {
        return res.status(400).json({ error: "Missing _id in request body" });
    }

    // Validate and convert to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const objectId = new mongoose.Types.ObjectId(id);

    Record.deleteOne({ _id: objectId })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

exports.getRecords = getRecords;
exports.addRecord = addRecord;
exports.deleteRecord = deleteRecord;