{/*Profile Updating Private Route */}

const express = require('express')
const { route } = require('./register')
const router = express.Router()

// @route GET  /myPortfolio/profileUpdate
//@details  user can update details form, GET LOGGED IN uSER
//access     PRIVATE
router.get('/', (req, res) => res.send('user can update his profile now'))



// @route POST  /myPortfolio/profileUpdate
//@details  to login user, auth user and get Token
//access     PUBLIC
router.get('/', (req, res) => res.send('to Log in user'))


modulw.exports = router;