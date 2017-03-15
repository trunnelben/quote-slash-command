var key = require('../utils/key');
var sync = require('synchronize');
var request = require('request');
var _ = require('underscore');

// The Type Ahead API.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  if (!term) {
    res.json([{
      title: '<i>(Type to see a quote/change quote)</i>',
      text: ''
    }]);
    return;
  }
  var response;
  try {
    response = sync.await(request({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2&callback=',
      qs: {
        limit: 2,
      },
      gzip: true,
      json: true,
      timeout: 10 * 1000
    }, sync.defer()));
  } catch (e) {
    res.status(500).send('Error');
    return;
  }


  var results = _.chain(response)
    .reject(function(quote) {
      return !quote || !quote[0] || !quote[0].content;
    })
    .map(function(quote) {
      //console.log(quote[1].content); //get display more quotes to choose from.
      return {
        title: quote[0].content,
        text: quote[0].content
      };
    }).value();


  if (results.length === 0) {
    res.json([{
      title: '<i>(no results)</i>',
      text: ''
    }]);
  } else {
    res.json(results);
  }
};
