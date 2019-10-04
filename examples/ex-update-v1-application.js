module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  const name = 'My updated nexmo-node Messages App';
  const type = 'messages';
  const answerUrl = 'https://example.com'; // webhook that points to NCCO
  const eventUrl = 'https://example.com';

  let options = {
    inbound_url: 'https://example.com',
    status_url: 'https://example.com'
  };

  nexmo.applications.update(config.APP_ID, name, type, answerUrl, eventUrl, options, callback);
};
