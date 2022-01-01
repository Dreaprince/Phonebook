const express = require('express');
// import routes here
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  // create end point here
  app.use(error);
}