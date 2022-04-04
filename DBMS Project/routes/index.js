const { routes } = require("../app");
const router = require("express").Router();

router.use("/api/users", require('./users'));
router.use("/api/movies", require('./movie'));

module.exports = router;
