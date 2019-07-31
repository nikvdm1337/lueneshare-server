const db_message = require('../models/message')

module.exports = (req, res) => {
	let q = {}
	if (req.query && req.query.category) {
		q.category = req.query.category
	}
	db_message.find({}).sort('-date').populate({
		path: 'category',
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