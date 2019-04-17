module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
    apiKey: config.API_KEY,
    apiSecret: config.API_SECRET
  }, {
    debug: config.DEBUG
  });

  nexmo.applications.update(config.APP_ID, {
    name: 'My updated nexmo-node Example V2 App',
    capabilities: {
      voice: {
        webhooks: {
          answer_url: {
            address: "https://example.com",
            http_method: "GET"
          },
          event_url: {
            address: "https://example.com",
            http_method: "POST"
          }
        }
      },
      messages: {
        webhooks: {
          inbound_url: {
            address: "https://example.com",
            http_method: "POST"
          },
          status_url: {
            address: "https://example.com",
            http_method: "POST"
          }
        }
      },
      rtc: {
        webhooks: {
          event_url: {
            address: "https://example.com",
            http_method: "POST"
          }
        }
      }
    }
  }, callback);
};
