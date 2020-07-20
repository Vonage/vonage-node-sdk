module.exports = function(callback, config) {
  var Nexmo = require("../lib/Nexmo");

  var nexmo = new Nexmo(
    {
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    { debug: config.DEBUG }
  );

  if(!nexmo.credentials.privateKey) {
    // no key found
    throw new Error("PrivateKey not loaded");
  }
};
