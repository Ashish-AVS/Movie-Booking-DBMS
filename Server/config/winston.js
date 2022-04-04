var appRoot = require('app-root-path')
var winston = require('winston')
const { format } = require('winston');
const { combine, timestamp, label, printf, prettyPrint} = format;

// define the custom settings for each transport (file, console)
var optionsAccessLogger = {
  file: {
    format: printf(info => {
      return (info.message);
    }),
    level: 'info',
    filename: `${appRoot}/logs/access.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    format: printf(info => {
      return (info.message);
    }),
    level: 'info',
    handleExceptions: true,
    json: false,
    colorize: true
  }
}

var optionsErrorLogger = {
  file: {
    format: printf(info => {
      return (`${Date.now()} ${info.message.status} ${info.message.endpoint} ${info.message.msg}`);
    }),
    level: 'error',
    filename: `${appRoot}/logs/error.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    format: printf(info => {
      return (`${Date.now()} ${info.message.status} ${info.message.endpoint} ${info.message.msg}`);
    }),
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true
  }
}
// instantiate a new Winston Logger with the settings defined above
var accesslogger = new winston.createLogger({
  transports: [
    new winston.transports.File(optionsAccessLogger.file),
    new winston.transports.Console(optionsAccessLogger.console)
  ],
  exitOnError: false // do not exit on handled exceptions
})

// create a stream object with a 'write' function that will be used by `morgan`
accesslogger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    accesslogger.info(message)
  }
}

var errorlogger = new winston.createLogger({
  transports: [
    new winston.transports.File(optionsErrorLogger.file),
    new winston.transports.Console(optionsErrorLogger.console)
  ],
  exitOnError: false // do not exit on handled exceptions
})

module.exports.accessLog = accesslogger
module.exports.errorLog = errorlogger