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

  nexmo.conversations.members.create(config.CONVERSATION_ID, {"action":"invite", "user_id":config.USER_ID, "channel":{"type":"app"}}, callback);
};
