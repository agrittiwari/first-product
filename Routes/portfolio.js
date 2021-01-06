const express = require('express')
 const router = express.Router()

// @route GET  /myPortfolio/portfolio
//@details  get all members who have portfolios
//access     PUBLIC
router.get('/', (req, res) => res.send('All registered Users'))


