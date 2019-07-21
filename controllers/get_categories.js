const db_categories = require('../models/category')

module.exports = (req, res) => {
    db_categories.find({}).then ((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}