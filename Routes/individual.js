const express = require('express')
const router = express.Router()
const auth = require('.././middleware/auth')
const { check, validationResult } = require('express-validator')
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

// @route POST  /
//@details  Create or Update individualProfile through form
//access     PRIVATE


router.post('/', [
    check('status', 'Please update your status').not().isEmpty(),
    check('skills', 'Please update your skills').not().isEmpty()
],  async(req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()})
        }

        const {
            location,
            status,
            skills,
            bio,
        } = req.body

        //building basic profile Object

        const individualProfileFields = {};

        individualProfileFields.register = req.register.id;

        if (location) individualProfileFields.location = location;
        if (status) individualProfileFields.status = status;
        if (bio) individualProfileFields.bio = bio;
        if (skills) {
            individualProfileFields.skills = skills.split(',').map(skill => skill.trim()) ;
        }
        



})


module.exports = router;