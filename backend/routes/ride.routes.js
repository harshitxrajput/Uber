const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

router.post('/create',
    body('userId').isString().isLength({ min: 24, max: 24 }).withMessage('Ivalid user Id'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    
)

module.exports = router;