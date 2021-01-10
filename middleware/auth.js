const config = require('config')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next)  {
    //get the token from header
    const token = req.header('x-auth-token')

    //if not token
    if (!token) {
        res.status(401).json({msg: " NO Token, unauthorised acces denied"})
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret')) 

        req.register = decoded.register;
        next()
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: 'Token is not Valid'})

    }


}