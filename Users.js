var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserScheam = new Schema({
  user_name:String,
  password:String
});

var User = mongoose.model('Users',UserScheam);
module.exports = User;
