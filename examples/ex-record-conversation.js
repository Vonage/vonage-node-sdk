module.exports = function(callback, config) {

  var Nexmo = require("../lib/Nexmo");

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET,
    applicationId: config.APP_ID,
    privateKey: config.PRIVATE_KEY
  }, {
    debug: config.DEBUG
  });

  nexmo.conversations.record(config.CONVERSATION_ID, {
    action: "start",
    event_url: "https://example.com/event",
    event_method: "POST",
    split: "conversation",
    format: "mp3"
  }, callback);
};
