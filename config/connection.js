// setup basic MySQL connection and export that connection
var mysql = require("mysql");

// Create the MySQL connection object
var connection = mysql.createConnection({

//   process.env.JAWSDB_URL || {
    // connection = mysql.createConnection(process.env.JAWSDB_URL);
    
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

module.exports = connection;

// ____________________________________

// if (process.env.JAWSDB_URL) {
// DB is JawsDB on Heroku



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




