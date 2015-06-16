var auth = require("./../auth");
var validator = require("req-validator");
var errors = require("web-errors").errors;

var urls = require('./../urls');


module.exports = function (cb) {

  var params = {
    grant_type: 'client_credential',
    appid: auth.appId,
    secret: auth.appSecret
  };
  urls.request(params, function(error, json) {
    if (error) {
      auth.accessToken = json.access_token;
    }
    cb(error, json);
  });
};