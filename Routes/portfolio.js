const express = require('express')
const Individual = require('../models/Individual')
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
// router.get('/:userPortfolio', async(req, res) =>
// { res.send('hey')
//     // try {
//     //     const portfolio = await Individual.findOne({ individual: req.params.userPortfolio }).populate('individual',['skills', 'status'])
//     // } catch (err) {
        
//     // }
    
    
//     // res.send(portfolio);
// })



module.exports = router;