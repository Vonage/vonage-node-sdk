module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  nexmo.message.shortcode2FA(config.TO_US_NUMBER, {"company-name": "Acme", "pin": "1234"}, {}, callback);
};
