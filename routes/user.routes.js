const express = require('express');
const userRouter = express.Router();


userRouter.get('/authorize', (req, res) => {
    res.send('You are already authorized');
})

userRouter.post('/authorize', (req, res) => {
    res.send('You have been authorized');
})




module.exports = userRouter