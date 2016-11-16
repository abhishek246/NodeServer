// app/routes/users.js

var user_utils = require('../models/user')
var Db = require('../models/dbutil')
var logger = require('winston');



module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:userId')
  .get(function(req, res, next) {
    var response = {notes: 'temp'}
    Db.get(postaction,'a','b');
    function postaction(err,rows){
      response.accessId = rows.accessId
      res.json(response)
    }
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
    res.json({notes: "Base route not defined"})
  })
  .post(function(req, res, next) {
    // Create new user
  });
};
