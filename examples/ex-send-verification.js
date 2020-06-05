module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  nexmo.verify.request({
    number: config.TO_NUMBER,
    brand: config.BRAND_NAME
  }, callback);
};
