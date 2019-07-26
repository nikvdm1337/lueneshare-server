const db_product = require('../models/product')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	let token = req.headers.authorization.split(' ')[1]
	
	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (decoded) {
			console.log('decoded', decoded)
			console.log('req.body', req.body)
			req.body.author = decoded._id
			db_product.create(req.body).then((data) => {
				db_product.findById(data._id)
					.populate({
						path: 'author',
						select: 'name'
					}).populate({
						path: 'category',
						select: 'name'
					}).then((message) => {
						res.send(message)
					}).catch((err) => {
						res.send(err)
					})
			}).catch((err) => {
				console.log('err', err)
				res.send(err)
			})
		}
	})
}