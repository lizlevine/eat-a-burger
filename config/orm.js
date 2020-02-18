// import connection from connection.js file
var connection = require("./connection.js");

// create an object with orm.all method to use data
// creating cxn query and use cb to pass info in file system models folder
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

var orm = {
  all: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  update: function(tableInput, condition, cb) {
    connection.query(
      "UPDATE " + tabelInput + " SET devoured=true WHERE id=" + condition + ";",
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
// below example of using template string format instead
  create: function(tableInput, val, cb) {
    connection.query(
      `INSERT INTO ${tableInput} (burger_name), VALUES ${val};`,
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};
module.exports = orm;
