// app/routes/users.js a

var logger = require('winston');

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:userId')
  .get(function(req, res, next) {
    res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
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
