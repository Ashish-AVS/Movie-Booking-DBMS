const router = require('express').Router()
const {
    routes
  } = require('../app')
  const path = require('path')

router.use("/movie", require('./movies'))


module.exports = router;
