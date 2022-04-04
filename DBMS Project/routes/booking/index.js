const router = require('express').Router()
const connection = require('../../database');

router.post('/', (req, res) => {
    const sql = `INSERT INTO movie SET ?`
    connection.query(sql, req.body , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});


module.exports = router;
