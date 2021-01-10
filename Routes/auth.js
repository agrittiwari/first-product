{/*Profile Updating Private Route */}

const express = require('express')

const router = express.Router()

const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const Register = require('../models/Register')




// @route GET  /myPortfolio/profileUpdate
//@details  user can update details form, GET LOGGED IN uSER
//access     PRIVATE
router.get('/',[], (req, res) => res.send('user can update his profile now'))



// @route POST  /myPortfolio/profileUpdate
//@details  to login user, auth user and get Token
//access     PUBLIC
router.post('/', [
    check('email', 'Please use a valid email')
        .isEmail(),
    check('password', 'Please use a password upto 6 characters')
        .isLength({ min: 6 })
], async (req, res) =>
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body
        
        try {
            let register = await Register.findOne({ email })

            if (!register) {
                return res.status(400).json({msg: 'Invalid Credentials'})
            }

            const isMatch = await bcrypt.compare(password, register.password)

            if (!isMatch) {
                return res.status(400).json({msg: 'Invalid Credentials'})
            }

            const payload = {
                register: {
                    id: register.id,
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000,
            }, (err,token) =>
                {
                    if (err) throw err;
                    if(token) res.json({token})
                    
            })

         } catch (err) {
            console.error(err)
            res.status(400).json('Server Error')
        }
        
    })


module.exports = router;