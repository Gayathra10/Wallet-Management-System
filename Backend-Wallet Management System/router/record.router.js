const express = require('express');
const router = express.Router();
const controller = require('../controller/record.controller');

router.get('/records', controller.getRecords);
router.post('/createrecord', controller.addRecord);
router.post('/deleterecord', controller.deleteRecord);

module.exports = router;