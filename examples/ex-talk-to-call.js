module.exports = function(callback, config) {
  
  var Promise = require('bluebird');
  var SPACER = '\n****\n\n';

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY, 
      apiSecret: config.API_SECRET,
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    {debug: config.DEBUG}
  );
  
  var calls = Promise.promisifyAll(nexmo.calls);
  var talk = Promise.promisifyAll(nexmo.calls.talk);
  var callId = null;
  nexmo.calls.getAsync({})
    .then(function(resp) {
      callId = resp._embedded.calls[0].uuid;
      return talk.startAsync(
        callId,
        {
          text: "Hello from Nexmo"
        });
    })
    .then(function(resp) {
      console.log('talk.start response', resp);
      console.log(SPACER, 'Stopping talking');
      
      return talk.stopAsync(callId)
    })
    .then(function(resp) {
      callback(null, resp);
    })
    .catch(callback);
};
