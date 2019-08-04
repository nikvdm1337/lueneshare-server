const db_products = require('../models/product')

module.exports = (req, res) => {
	
	db_products.find(req.query).sort('-date').populate({
		path: 'category',
		select: 'name'
	}).populate({
		path: 'author',
		select: 'name'
	}).then((data) => {
		console.log('data', data)
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}