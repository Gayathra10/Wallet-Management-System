const express = require('express');
const router = express.Router();
const controller = require('../controller/payment.controller');

router.get('/payment', controller.getPayments);
router.post('/createpayment', controller.addPayment);
router.post('/deletepayment', controller.deletePayment);

module.exports = router;