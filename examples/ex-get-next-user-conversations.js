module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');
  var querystring = require("querystring");

  var nexmo = new Nexmo({
      apiKey: config.API_KEY,
      apiSecret: config.API_SECRET,
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    {debug: config.DEBUG}
  );

  nexmo.users.getConversations(config.USER_ID, {page_size: 20}, (err, response) => {
    nexmo.users.next(response, callback);
  });
};
