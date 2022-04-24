const router = require('express').Router()
const connection = require('../../database');
//Booking By User-id
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
    const sql1 = `select count(seat_id) + 1 as seat_id  from booking group by mid , sid , book_date , start_time having mid = ${req.body.mid} and sid = ${req.body.sid} and book_date = '${req.body.book_date}' and  start_time = '${req.body.start_time}';`
    const sql = `INSERT INTO booking SET ?`
    connection.query(sql1 , (err , rows) => {
        if(err)  {
            res.status(400).send(err);
            throw err;
        }
        console.log(rows);
        const {seat_id} = rows[0] ?? {seat_id: 0}; 
        
        connection.query(sql, {...req.body , seat_id} , (err , rows) => {
            if(err)  {
                res.send(err);
                throw err;
            }
           
            res.json( {...req.body , ...rows, seat_id});
        })
    })
    // res.send(req.body);
});


module.exports = router;
