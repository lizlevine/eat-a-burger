// Pull in required dependencies
var mysql = require("mysql");

// Create the MySQL connection object
var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    port: 3306,
    host: "localhost",
    user: "liz",
    password: "1234",
    database: "burgers_db"
  }
);

// Export connection for ORM use
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadid);
});

// ____________________________________

// if (process.env.JAWSDB_URL) {
// DB is JawsDB on Heroku
connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// DB is local on localhost
// 	connection = mysql.createConnection({
// 		port: 3306,
// 		host: 'localhost',
// 		user: 'liz',
// 		password: '1234',
// 		database: 'burgers_db'
// 	})
// };

// Pull in required dependencies
// var mysql = require('mysql');

// Create the MySQL connection object
// var connection;

// if (process.env.JAWSDB_URL) {
// DB is JawsDB on Heroku
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// DB is local on localhost
// connection = mysql.createConnection({
// port: 3306,
// 		host: 'localhost',
// 		user: 'root',
// 		password: '',
// 		database: 'burgers_db'
// 	})
// };

module.exports = connection;
