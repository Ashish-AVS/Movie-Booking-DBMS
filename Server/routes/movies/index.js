const router = require('express').Router()

router.use('/', require('./movies.js'))
router.use('/add', require('./add'))

module.exports = router