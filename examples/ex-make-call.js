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
  
  nexmo.calls.create({
    to: [{
      type: 'phone',
      number: config.TO_NUMBER
    }],
    from: {
      type: 'phone',
      number: config.FROM_NUMBER
    },
    answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
  }, callback);
};
