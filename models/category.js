const db = require('../db')

const db_category = db.model('channel', {
    name: String,
})

module.exports = db_category