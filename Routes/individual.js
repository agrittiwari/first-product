const express = require('express')
const router = express.Router()
const Individual= require('../models/Individual')


// @route GET  /myPortfolio/{username}
//@details  get individual portfolio
//access     PUBLIC
router.get('/{id}/username', (req, res) =>
{
    res.send('get individual portfolios')
})

module.exports = router;