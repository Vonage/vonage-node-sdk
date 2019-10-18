module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY,
      apiSecret: config.API_SECRET,
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    {debug: config.DEBUG}
  );

  nexmo.conversations.members.get(config.CONVERSATION_ID, {page_size: 5}, (error, response) => {
    nexmo.conversations.members.next(response, (error, response) => {
      nexmo.conversations.members.prev(response, callback);
    });
  });
};
