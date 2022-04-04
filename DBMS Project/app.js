const app = require("express") ();
const bodyParser = require("body-parser");
const cors = require('cors')
const morgan = require('morgan')
const connection = require('./database');
var winston = require('./config/winston')

const PORT = process.env.PORT || 5000;

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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


// Routes configuration
app.use(require('./routes'))


app.get("/", function(req,res){
    res.send("Welcome to the world of science fiction, conflicting theories, fantasies and some eccentric nerds!")
});

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

app.listen(PORT , function() {
    console.log(`SERVER STARTED ON ${PORT}`);
})


/**
 * ALL SQL TABLE NAMES AND SCHEMA NAMES ARE LOWERCASE
 */