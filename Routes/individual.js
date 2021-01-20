const express = require('express')
const router = express.Router()
const auth = require('auth')

const Individual= require('../models/Individual')
const Register = require('../models/Register')

// @route GET  /me
//@details  get individual portfolio
//access     PRIVATE
router.get('/me', auth, async(req, res) =>
{
    try {
        
        const individualProfile = await Individual.findOne({ register: req.register.id }).populate('register', ['name'])
        
        if (!individualProfile) {
            res.status(400).json({msg:"This individual has no profile"})
        }
        
        res.send('Profile found').json(individualProfile);

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
})

module.exports = router;