
'use strict';
const { body } = require('express-validator');

exports.invocationValidator = [
    body('invocation')
        .exists().withMessage('invocation is required')
        .isObject().withMessage('invocation must be an object'),
    body('invocation.inviteeId').exists()
        .withMessage('inviteeId is required'),
    body('invocation.name').exists()
        .withMessage('name a required'),
    body('invocation.number_of_person').exists()
        .withMessage('Number of person a required'),
    body('invocation.status').exists()
        .withMessage('Status a required')
        .isNumeric()
        .withMessage('Status must be select') 
]; 