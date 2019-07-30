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
app.get('/api/products', require('./controllers/get_products'))
app.get('/api/messages', require('./controllers/get_messages'))
app.get('/api/profile', require('./controllers/get_profile'))

app.post('/api/signup', require('./controllers/post_user'))
app.post('/api/products', require('./controllers/post_products'))
app.post('/api/login', require('./controllers/login'))
app.post('/api/messages', require ('./controllers/post_message'))

app.listen(process.env.PORT, (err) => {
    if (err) {
    console.log('ERROR', err)
    } else {
    console.log(`Connected to localghost ${process.env.PORT}`)
    }
})