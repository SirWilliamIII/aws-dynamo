const express = require('express')
const router = express.Router()

const queries = require("../db/queries")
const getEntry = queries.getEntryByKey

/* GET users listing. */
router.get('/', function(req, res, next) {
    let city = req.query.city

    res.render('place', {
        city
    })
})

module.exports = router
