const db = require('../db')
const mongoose = require('mongoose')

const db_message = db.model('message', {
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'Message Author is required']
	},
	date: {
		type: Date,
		default: Date.now
	},
	body: {
		type: String,
		required: [true, 'Message Body is required']
	},
	currentProduct: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'product',
		required: [true, 'Current product is required']
	}
})

module.exports = db_message