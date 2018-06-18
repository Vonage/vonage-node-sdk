module.exports = function(callback, config) {
  var Nexmo = require("../lib/Nexmo");

  var nexmo = new Nexmo(
    {
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    { debug: config.DEBUG }
  );

  nexmo.channel.send(
    { type: "sms", number: config.TO_NUMBER },
    { type: "sms", number: config.FROM_NUMBER },
    { content: { type: "text", text: "testing" } },
    callback
  );
};
