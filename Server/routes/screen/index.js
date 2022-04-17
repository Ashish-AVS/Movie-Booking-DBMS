const router = require('express').Router()
const connection = require('../../database');

router.post('/add', (req, res) => {
    const sql = `INSERT INTO screen SET ?`
    connection.query(sql, req.body , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});


router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM screen WHERE mid=${req.params.id}`
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});

router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM screen WHERE mid = ?`
    connection.query(sql, [req.params.id], (err, rows) => {
        if(err) throw err;
        res.json(rows);
    })
})

router.get('/', (req, res) => {
    const sql = `SELECT * FROM screen`
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});
module.exports = router;
