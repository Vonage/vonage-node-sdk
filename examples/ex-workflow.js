module.exports = function(callback, config) {
  var Nexmo = require("../lib/Nexmo");

  var nexmo = new Nexmo(
    {
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    { debug: config.DEBUG }
  );

  nexmo.workflow.create(
    "failover",
    [
      {
        to: { type: "viber_service_msg", id: CONFIG.TO_NUMBER },
        from: { type: "viber_service_msg", id: CONFIG.FROM_NUMBER },
        message: {
          content: {
            type: "text",
            text: "viber test"
          },
          viber_service_msg: {
            ttl: 30
          }
        },
        failover: {
          expiry_time: 600,
          condition_status: "delivered"
        }
      },
      {
        to: { type: "sms", number: config.TO_NUMBER },
        from: { type: "sms", number: config.FROM_NUMBER },
        message: {
          content: {
            type: "text",
            text: "sms test"
          }
        }
      }
    ],
    callback
  );
};
