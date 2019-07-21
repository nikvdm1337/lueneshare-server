// Config, importing the modules
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())

app.get('/api/categories', require('./controllers/get_categories'))
app.get('/api/users', require('./controllers/get_users'))

app.post('/api/signup', require('./controllers/post_user'))
app.post('/api/products', require('./controllers/post_products'))


app.listen(process.env.PORT, (err) => {
    if (err) {
    console.log('ERROR', err)
    } else {
    console.log(`Connected to localghost ${process.env.PORT}`)
    }
})