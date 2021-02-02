const express = require('express')
const router = express.Router()
const auth = require('.././middleware/auth')
const { check, validationResult } = require('express-validator')
const Individual = require('../models/Individual')
const normalize =require('normalize-url')
const Register = require('../models/Register')

// @route GET  /me
//@details  get individual portfolio
//access     PRIVATE
router.get('/me', auth, async(req, res) =>
{
    try {
        
        const individualProfile = await Individual.findOne({ register: req.register.id }).populate('register', ['name', 'userPortfolio'])
        
        if (!individualProfile) {
            res.status(400).json({msg:"This individual has no profile"})
        }
        
        res.json(individualProfile);

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Server Error'})
    }
})

// @route POST  /
//@details  Create or Update individualProfile through form
//access     PRIVATE


router.post('/', auth, 
check('userPortfolio', 'your unique portfolio address requires a followUpname use @ and _ instead, if intended').notEmpty(),

    check('status', 'Please update your status').not().isEmpty(),
    check('skills', 'Please update your skills').not().isEmpty()
, async (req, res) =>
{
        
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({error: errors.array()})
        }

    const {
          userPortfolio,
            location,
            status,
            skills,
            bio,
            hashnodeUsername,
            mediumUsername,
            devtoUsername,
            twitter,
            instagram,
            githubUsername,
            workEmail,
            
        } = req.body

        //building basic profile Object

        const individualProfileFields = {
            register : req.register.id,
            status,
          
            location,
            bio,
            skills : Array.isArray(skills) ? skills : skills.split('.').map((skill) => ' ' + skill.trim())
        };
        
        
        console.log(individualProfileFields.skills)

        
        
    // Build blogs object and add to profileFields
        
        const blogFields = { hashnodeUsername, mediumUsername, devtoUsername }
        
        for (const [key, value] of Object.entries(blogFields)) {
            if(value && value.length > 0)
            blogFields[key] =normalize(value, {forcehttps: true})
        }
         
        individualProfileFields.blogs = blogFields
       
    // Build social object and add to profileFields
        const socialFields = {twitter, instagram, githubUsername, workEmail}
        
        for (const [key, value] of Object.entries(socialFields)) {
            if (value && value.length > 0)
                socialFields[key] = normalize(value, {forcehttps: true})
        }

        individualProfileFields.socials = socialFields

        try {
           

            //update
            let portfolio =  await Individual.findOne({ userPortfolio })
            
            if (portfolio) {
                return res.status(400).json({ msg: 'Portfolio name is already used' })
            } else {
                individualProfileFields.userPortfolio = userPortfolio
            }

            let individualProfile = await Individual.findOneAndUpdate(
                { register: req.register.id },
                { $set: individualProfileFields },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            )
console.log(individualProfile)
                return res.json(individualProfile)      
                 
        } catch (err) {
            console.error(err)
         res.status(500).json({msg:" Server Error"})   
        }


    })

    // @route DELETE  /myPortfolio/
    //@details  DELETE PORTFOLIO AND registerd user
    //access     PRIVATE

router.delete('/', auth, async(req, res) =>
{
    try {
        
        await Individual.findOneAndRemove({ register: req.register.id })
        await Register.findOneAndRemove({ id: req.register.id })
        res.json({msg: "Portfolio removed"})
        
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') {
            return res.status(400).json({msg:'Profile not found'})
        }
        return res.status(500).json({msg:'Server Error'})
    }
 
})

module.exports = router;