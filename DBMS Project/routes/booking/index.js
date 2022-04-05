const router = require('express').Router()
const connection = require('../../database');
router.get('/:id' , (req , res) => {
    const sql = `SELECT * FROM booking where uid = ?`;
    connection.query(sql , req.params.id , (err , rows) => {
        if(err) {
         res.send(err);
         throw err;
        }
        res.json(rows);
    })
})
router.post('/', (req, res) => {
    const sql = `INSERT INTO booking SET ?`
    connection.query(sql, req.body , (err , rows) => {
            if(err)  {
                res.send(err);
                throw err;
            }
            res.json(rows);
    })
    // res.send(req.body);
});


module.exports = router;
