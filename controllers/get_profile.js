const db_user = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.headers.authorization.split(' ')[1]
	
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			delete decoded.password
			res.json(decoded)
		} else {
            res.send(err)
        }
	})
}