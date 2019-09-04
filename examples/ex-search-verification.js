module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  nexmo.verify.search(config.REQUEST_ID, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Request Status:', result.status);
    }
  });
};
