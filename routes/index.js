const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Title'
    })
})

router.post('/', function(req, res) {
    const body = req.body

    const res_body = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email
    }

    res.render('welcome', res_body)
})

module.exports = router