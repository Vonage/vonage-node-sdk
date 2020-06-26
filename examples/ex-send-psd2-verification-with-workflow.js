module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  nexmo.verify.psd2({
    number: config.TO_NUMBER,
    payee: config.BRAND_NAME,
    amount: "10",
    workflow_id: config.WORKFLOW_ID
  }, callback);
};
