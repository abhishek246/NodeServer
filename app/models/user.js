// app/models/user.js
// INITILIAZE your model here
// var User =  new Model()

var User = function(data){
	this.data = data;
}
var logger = require('winston');

User.getlog = function(){
	  logger.info('This is looggerrr 101');
}

module.exports = User;
