// Dependencies
var mysql = require("mysql");

// Sets connection to mysql database burgers_db
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Connects to the database set above
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// mysql://b6a949eeaacc4b:436dde75@us-cdbr-iron-east-03.cleardb.net/heroku_11a0b2e449385f1?reconnect=true

// // **************   HEROKU connection **************
// var connection = mysql.createPool({
//     host: "us-cdbr-iron-east-03.cleardb.net",
//     user: "b6a949eeaacc4b",
//     password: "436dde75",
//     database: "heroku_11a0b2e449385f1",
//     connectionLimit: 5
// });

// Exports the connection for use in other files
module.exports = connection;