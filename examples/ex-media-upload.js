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

  nexmo.media.upload(
    {
      //file: "/path/to/file", // If you want to upload a file instead of fetching a URL, set this instead
      url: "https://www.nexmo.com/wp-content/uploads/2016/07/nexmo_vonage_color.jpg",
      info: { test: "content" }
    },
    function(err, data) {
      if (err) { throw err; }
      console.log(data);
    }
  );
};
