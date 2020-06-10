module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  // Unless you have a phone capable of receiving WAP messages, you won't be able to test this.
  nexmo.message.sendWapPushMessage(config.FROM_NUMBER, config.TO_NUMBER, 'Test', 'http://example.com', callback);
};
