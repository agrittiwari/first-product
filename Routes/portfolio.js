const express = require('express')
const Individual = require('../models/Individual')
const Register = require('../models/Register')
const router = express.Router()


// @route GET  /myPortfolio/portfolio
//@details  get all members who have portfolios
//access     PUBLIC
router.get('/portfolio', (req, res) =>
{
    res.json('all profiles')
})


// @route GET  /myPortfolio/:userPortfolio
//@details  get your specific portfolio
//access     PUBLIC
router.get('/:userPortfolio', async(req, res) =>
{

    try {

        
        let portfolio = await Individual.findOne({ userPortfolio: req.params.userPortfolio })
        console.log(portfolio)
        if (!portfolio) {
            return res.status(400).json({ msg: 'Portfolio not found' })
        }
        res.json(portfolio)
    } catch (err) {
        console.error(err.message)
    res.status(500).json({msg: 'Server Error'})
    }
    
    
   
})



module.exports = router;