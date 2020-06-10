module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  nexmo.message.shortcodeAlert(config.TO_US_NUMBER, {time: "now", place: "here"}, {}, callback);
};
