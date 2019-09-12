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

  nexmo.conversations.events.create(config.CONVERSATION_ID, {"type":"text", "from":config.MEMBER_ID, "body":{"text":"test"}}, callback);
};
