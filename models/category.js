const db = require('../db')

const db_category = db.model('category', {
    name: String,
})

module.exports = db_category