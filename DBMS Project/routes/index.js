const { routes } = require("../app");
const path = require("path");
const router = require("express").Router();

router.use("/api/users", require('./users'));

module.exports = router;
