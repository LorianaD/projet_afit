const { body } = require('express-validator');

exports.registerRules = [
    body('email').isEmail().withMessage('email pas correct'),
    body('password').isLength({min:8}).withMessage('minimum 8 caractéres')
];

exports.loginRules = [
    body('email').isEmail(),
    body('password').notEmpty()
]