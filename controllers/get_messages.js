const db_message = require('../models/message')
const _ = require('lodash')

module.exports = (req, res) => {
	// let q = {}
	// console.log(req.query)
	// if (req.query && req.query.author) {
	// 	q.author = req.query.author
	// } else {
	// 	let q = {}
	// }
	db_message.find(req.query).sort('-date').populate({
		path: 'category',
		select: 'name'
	}).populate({
		path: 'author',
		select: 'name'
	}).then((data) => {
		// data_grouped = _.uniqBy(data, 'author._id')
		// console.log('data', data_grouped);
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}