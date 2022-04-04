const app = require("express")();
var dotenv = require('dotenv')
var cors = require('cors')
var helmet = require('helmet')
var morgan = require('morgan')
var express = require('express')
var createError = require('http-errors')
var winston = require('./config/winston')
module.exports = router


const mysql = require("mysql");
dotenv.config()

app.use(helmet())

// CORS
const corsOptions = {
  origin: (origin, callback) => {
      callback(null, true)
  }
}
app.use(cors(corsOptions))

// Logger
app.use(
  morgan(
      function (tokens, req, res) {
          var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
          return [
              tokens.date(req, res, 'clf'),
              tokens.method(req, res),
              tokens.url(req, res),
              tokens.status(req, res),
              ip,
              req.rid,
              tokens.res(req, res, 'content-length'),
              '-',
              tokens['response-time'](req, res),
              'ms'
          ].join(' ')
      }, {
          stream: winston.accessLog.stream
      }
  )
)

// rest api routes
app.use(require('./routes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error("Service not available currently");
    err.status = 404;
    next(err);
})

// error handler
app.use(function (err, req, res, next) {
    console.log(err);
    if (req.app.get('DEVELOPMENT') != 1) {
        winston.errorLog.error({
            status: err.status,
            endpoint: req.originalUrl,
            msg: err.message
        })
        errorHandler(res, err)
    } else {
        res.locals.message = err.message
        res.locals.error = err
        res.status(err.status || 500)
        res.render('error')
    }
})

module.exports = app




const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "Movie_booking",
});


// app.get("/insert", (req, res) => {
//   db.query(
//     'INSERT INTO Users (Name, DON) Values ("Ashish", 200000)',
//     (err, result) => {
//       if (err) return err;
//       res.send(result);
//     }
//   );
// });

app.listen(3001, () => {
  console.log(`server running!`);
});
