// app/routes/users.js

var logger = require('winston');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'CavacServ'
});

connection.connect();

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:userId')
  .get(function(req, res, next) {
    var response = {notes: 'this is there'}
    var data;
    data = connection.query('select * from OrganisationApp_accountaccess limit 1', function(err, rows, fields) {
        if (err) throw err;
            data = rows;
            console.log('fileds:', rows.length)
            response.accessId = rows[0].accessId;
            response.name = rows[0].name;
            response.emailId = rows[0].emailId;
            response.mobileNo = rows[0].mobileNo;
            response.empId = rows[0].empId;
            //response.userId = rows[0].userId;
            console.log('response:', response);
            res.json(response);
    })
    //connection.end();
  })
  .put(function(req, res, next) {
    // Update user
  })
  .patch(function(req, res,next) {
    // Patch
  })
  .delete(function(req, res, next) {
    // Delete record
  });

  router.route('/')
  .get(function(req, res, next) {
    // Logic for GET /users routes
    res.json({notes: "Root Folder"})
  }).post(function(req, res, next) {
    // Create new user
  });
};
