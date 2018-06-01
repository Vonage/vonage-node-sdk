module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY,
      apiSecret: config.API_SECRET
    },
    {debug: config.DEBUG}
  );

  nexmo.redact.transaction(config.REDACT_ID, config.REDACT_TYPE, function(err, data) {
    if (err) { throw err; }
    // Returns a 204 if successful, so no response body
  });
};
