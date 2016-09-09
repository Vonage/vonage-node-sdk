module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY, 
      apiSecret: config.API_SECRET
    },
    {debug: config.DEBUG}
  );
  
  nexmo.message.sendSms(config.FROM_NUMBER, config.TO_NUMBER, 'testing', callback);
};
