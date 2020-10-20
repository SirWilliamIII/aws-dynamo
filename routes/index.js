const express = require('express')
const router = express.Router()


const queries = require("../db/queries")
const addEntry = queries.addEntry


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Title'
    })
})

router.post('/', function(req, res) {
    const body = req.body
    const res_body = {
        title: body.title,
        country: body.country

    }

    if (res_body.title && res_body.country) {
        addEntry('place', res_body.title, res_body.country)
    }

    res.render('confirm', res_body)
})

module.exports = router