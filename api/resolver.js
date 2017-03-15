var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');

module.exports = function(req, res) {
  var term = req.query.text.trim();
  var response;
  var results;
  res.json({
    body: term //format the quote in a better way
  });
};
