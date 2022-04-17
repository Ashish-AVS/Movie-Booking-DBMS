const db = require("../database");

module.exports = class User {
    constructor(uid , fname , lname , email , credits) {
        this.uid = uid;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.credits = credits;
    }
    static getAllUsers() {
     let user = [];
     db.query('SELECT * FROM user' , (err , rows) => {
         if(err) throw err;
        // console.log(rows);
        user = rows;
        console.log(user);
        
     })
     return user;
    }
}