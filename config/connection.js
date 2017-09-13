// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
// LOCALHOST DB
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

//HEROKU DB:

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "b088c8fe6c85a0",
//   password: "6ca2addd",
//   database: "heroku_9bafd60fbce33fd"
// });

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
