const db = require('../db')

const db_user = db.model('user', {
	name: {
		type: String,
		required: [true, 'User Name is required']
	},
	email: {
		type: String,
		required: [true, 'User Email is required']
	},
	password: {
		type: String,
		required: [true, 'User Password is required']
	}
})

module.exports = db_user