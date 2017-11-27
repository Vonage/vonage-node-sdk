module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY, 
      apiSecret: config.API_SECRET
    },
    {debug: config.DEBUG}
  );

  // You can get general pricing for a country
  nexmo.number.getPricing('GB', console.log);

  // Or you can find out the price to call/sms a specific number
  nexmo.number.getPhonePricing('voice', '447700900000', console.log)
};
