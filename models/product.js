const db = require('../db')
const mongoose = require('mongoose')

const db_product = db.model('products', {
	title: {
		type: String,
		required: [true, 'Title is required']
	},
	description: {
		type: String,
		required: [true, 'Product description is required']
	},
	category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
		required: [true, 'Category is required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Category is required']
    },
    image: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = db_product