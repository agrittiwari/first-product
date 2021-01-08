{/*Registeing User only to allow setting up Portfolio */}

const express = require('express')
const router = express.Router()


const Register = require('../models/Register')


// @route POST  /myPortfolio/register
//@details  to register a user on app
//access    PUBLIC

router.post('/', (req, res) =>
{
    res.send(req.body)
})


module.exports = router;