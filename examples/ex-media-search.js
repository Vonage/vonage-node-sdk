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

  nexmo.media.search({ page_size: 1, page_index: 1 }, function(err, data) {
    if (err) { throw err; }
    console.log(data);
  });
};
