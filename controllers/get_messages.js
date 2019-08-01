const db_message = require('../models/message')

module.exports = (req, res) => {
	db_message.find(req.query).sort('-date').populate({
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