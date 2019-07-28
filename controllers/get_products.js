const db_products = require('../models/product')

module.exports = (req, res) => {
	let q = {}
	console.log(req.query)
	if (req.query && req.query.category) {
		q.category = req.query.category
	}
	db_products.find(q).sort('-date').populate({
		path: 'categories',
		select: 'name'
	}).populate({
		path: 'author',
		select: 'name'
	}).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}