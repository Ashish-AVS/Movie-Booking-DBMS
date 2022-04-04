  const mysql = require("mysql");
  const config = require('./dbconfig.json');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a@$H!$H498009',
    database: 'Movie_booking'

    // host: process.env.host,
    // user: process.env.user,
    // password: process.env.password,
    // database: process.env.database
  })
// SVKT04247@S21
  con.connect((err) => {
      if(err) throw err;
      console.log("Connected To DB!");
  })

  module.exports = con;