const { check, validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(404).json({
            status: false,
            message: errors.array()[0].msg
        })
    }
    next()
}

//?  validation for field not empty, valid email and min password 
exports.registerValidation = [
    check('username', 'Username require to fill').notEmpty(),
    check('email', 'Email require to fill').notEmpty().matches(/.+\@.+\..+/).withMessage('Please use valid email'),
    check('password', 'Password require to fill').notEmpty().isLength({ min: 6 }).withMessage('Password too short')
]

exports.loginValidation = [
    check('username', 'Username or Email is require').notEmpty(),
]