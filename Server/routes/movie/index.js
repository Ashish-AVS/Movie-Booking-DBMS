const router = require('express').Router()
const connection = require('../../database');

router.post('/add', (req, res) => {
    const sql = `INSERT INTO movie SET ?`
    connection.query(sql, req.body , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});

router.get("/display/:id", (req, res) => {
    const sql = 'SELECT * FROM display WHERE mid = ?'
    connection.query(sql, req.params.id , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
})

router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM movie WHERE mid=${req.params.id}`
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        res.json(rows);
    })
});

router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM movie WHERE mid = ?`
    connection.query(sql, [req.params.id], (err, rows) => {
        if(err) throw err;
        res.json(rows);
    })
})


router.get('/', (req, res) => {
    const sql = `select * , sid as screen from movie m natural join display`
    const genreSql = `select * from movie_genre`

    
    connection.query(sql , (err , rows) => {
        if(err) throw err;
        // res.json(rows);
        connection.query(genreSql, (err, gRows) => {
            if(err) throw err;
            const movies = rows.map(movie => {
                movie.genre = gRows.filter(row => row.mid === movie.mid).map(row => row.genre)
                return movie;
            })
            // return movies;
            res.json(movies)
        })
    })

});
module.exports = router;
