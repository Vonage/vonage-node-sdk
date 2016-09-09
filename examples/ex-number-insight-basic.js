module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY, 
      apiSecret: config.API_SECRET
    },
    {debug: config.DEBUG}
  );
  
  console.log(nexmo.options);
  
  nexmo.numberInsight.get({level:'basic', number: config.TO_NUMBER}, callback);
};
