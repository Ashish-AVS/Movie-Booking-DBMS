const router = require('express').Router()
const connection = require('../../database');


router.use('/:id', (req, res, next) => {
    const sql = `SELECT * FROM Users WHERE id=${req.params.id}`
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});


router.use('/', (req, res, next) => {
    res.send("hello world")
});
module.exports = router;
