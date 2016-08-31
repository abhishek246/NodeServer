var nconf = require('nconf');
nconf.set('url', 'mywebsite.com');

nconf.set('database', {
  user: 'username',
  password: 'password',
  server: 'url'
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'Happay_v2'
});
