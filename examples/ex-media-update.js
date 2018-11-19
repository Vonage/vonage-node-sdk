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

  nexmo.media.update(config.MEDIA_ID, { public_item: true }, function(err, data) {
    if (err) { throw err; }
    console.log(data);
  });
};
