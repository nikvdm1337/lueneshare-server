const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    // 1. Check if email exists in db
    db_user.findOne({
        email: req.body.email
    }).then((user) => {
        if (user) {
            // 2. If email found, match passwords
            bcrypt.compare(req.body.password, user.password, (err, match) => {
                if (match) {
                    let token = jwt.sign(user.toObject(), process.env.SECRET)
                    res.status(200).json({
                        message:'You are logged in',
                        token: token,
                    })
                } else {
                    // 3. If passwords match, response "Login successful"
                   
                    res.send(`Wrong password and/or E-Mail address.`)
                }
            })
        } else {
            res.send('Email not found')
        }
    }).catch((err) => {
        res.status(300).send(err)
    })
}