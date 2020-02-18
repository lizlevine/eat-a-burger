// import connection from connection.js file
var connection = require("./connection.js");

// create an object with orm.all method to use data
// creating cxn query and use cb to pass info in file system models folder

var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    })
  },

update: function(tableInput, condition, cb) {
    connection.query('UPDATE '+ tabelInput + ' SET devoured=true WHERE id='+condition+ ';', function(err,result){
        if(err)throw err;
        cb(result);
    })
},

    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO '+ tableInput + (burger_name)
        VALUES ('"+val+"') ';', function(err,result){
            if(err)throw err;
            cb(result);
        })
    }
}
module.exports = orm;
