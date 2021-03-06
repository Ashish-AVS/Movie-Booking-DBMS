const { routes } = require("../app");
const router = require("express").Router();

router.use("/api/users", require('./users'));
router.use("/api/movie", require('./movie'));
router.use("/api/screen", require('./screen'));
router.use("/api/booking", require('./booking'));

module.exports = router;
