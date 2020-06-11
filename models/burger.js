
// this file requires the orm (within config folder) which contains all methods
// also,uses the orm w/in config folder(burgers_controller.js) in order to collect data from db & send
// it to controllers folder (burgers_controller.js)

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, cb);
  },

  create: function(name, cb) {
    orm.create("burgers", name, cb);
  }
};

module.exports = burger;
