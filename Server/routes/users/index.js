const router = require('express').Router()
const connection = require('../../database');


router.post('/add', (req, res, next) => {
     const sql = `INSERT INTO users SET ?`
     connection.query(sql, req.body , (err , rows) => {
         if(err) throw err;
         res.json(rows);
     })
});


router.use('/:id', (req, res, next) => {
    const sql = `SELECT * FROM users WHERE uid=${req.params.id}`
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});


router.use('/', (req, res, next) => {
    const sql = `SELECT * FROM users`
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});
module.exports = router;
