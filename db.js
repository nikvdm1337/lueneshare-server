const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true}, (err) => {
    if (err) {
        console.log("Connection failed: ", err)
    } else {
        console.log("Such connection, many database, much mongo!")
    }
})

module.exports = mongoose