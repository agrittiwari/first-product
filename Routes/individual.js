const express = require('express')
const router = express.Router()
// @route GET  /myPortfolio/{username}
//@details  get individual portfolio
//access     PUBLIC
router.get('/{id}/username', (req, res) => res.send('get individual portfolios'))

module.exports = router;