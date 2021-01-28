{/*Registeing User only to allow setting up Portfolio */}

const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const Register = require('../models/Register')


// @route POST  /myPortfolio/register
//@details  to register a user on app
//access    PUBLIC

router.post('/', [
    check('name', 'Please add Name')
        .not()
        .isEmpty(),
        
    check('email', 'Please add a unique email')
        .isEmail(),
    check('password', 'Please enter apassword with 6 or more characters')
        .isLength({ min: 6 })
], async (req, res) =>
{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name,   email, password } = req.body;

        try {
            
            let register = await Register.findOne({ email });
            

            if (register  ) {
                return res.status(400).json({msg: 'User already registered'})
            } 
            register = new Register({
                name,
                
                email,
                password
            })


            //creating a variable salt which is needed to encrypt the password via a method of bcrypt -gensalt-
            const salt = await bcrypt.genSalt(10)

            register.password = await bcrypt.hash(password, salt)

            //saving to the database

            await register.save()
            
            //payload is the object we want to send from database 
            const payload = {
                register: {
                    id: register.id,
                    
                }
            }
//Creating json web token with our registered user ID and a secret to make token secure 
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn:3600
            },
                (err, token) =>
                {
                    if (err) throw err;
                    res.json({ token})
                    
            })


           //res.json(userPortfolio) its not needed to accesed from token or something
        } catch (err) {
            console.error(err.message)
            res.status(400).send('Server error')
        }
})


module.exports = router;