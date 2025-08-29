const express = require('express');
const { getUser, authorizeUser } = require('../models/user');
const authorizationRouter = express.Router();


authorizationRouter.post('/authorize', ({ body }, res) => {

    const { username = '', password = '' } = body;

    if (authorizeUser(username, password)) {
        res.json({
            message: 'You have been authorized'
        });
    }else{
        res.status(400).json({
            message: 'User not authorized'
        })
    }

})


module.exports = authorizationRouter