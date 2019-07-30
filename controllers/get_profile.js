const db_user = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.headers.authorization.split(' ')[1]
	
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			res.json({email: decoded.email, city:decoded.city, name:decoded.name, profilepic:decoded.profilepic})
		} else {
            res.send(err)
        }
	})
}