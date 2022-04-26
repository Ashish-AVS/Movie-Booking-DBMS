const router = require('express').Router()
const connection = require('../../database');

router.get('/bookings/:id' , (req , res) => {
    const sql = `SELECT * FROM booking natural join movie where uid = ?`;
    connection.query(sql , req.params.id , (err , rows) => {
        if(err) {
         res.send(err);
         throw err;
        }
        res.json(rows);
    })
})

router.post('/add', (req, res, next) => {
     const sql = `INSERT INTO users SET ?`
     connection.query(sql, req.body , (err , rows) => {
         //TODO Send uid back
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
