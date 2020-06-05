module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  // Sends an SMS with the text WIN
  nexmo.message.sendBinaryMessage(config.FROM_NUMBER, config.TO_NUMBER, '57494E', '050003CC0101', {
    "protocol-id": "65"
  }, callback);
};
