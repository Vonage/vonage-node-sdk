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
  var callId = null;
  nexmo.calls.getAsync({})
    .then(function(resp) {
      console.log(resp._embedded.calls);
      
      callId = resp._embedded.calls[0].uuid;
      console.log(SPACER, 'Getting single call details', callId);
      return calls.getAsync(callId);
    })
    .then(function(resp) {
      console.log('single call details', resp);
      
      console.log(SPACER, 'Getting calls by query');
      return calls.getAsync({status: 'completed'});
    })
    .then(function(resp) {
      console.log('Call query response', resp);
      
      console.log(SPACER, 'Updating a call', callId);
      return calls.updateAsync(callId, {action: 'hangup'});
    })
    .then(function(resp) {
      callback(null, resp);
    })
    .catch(callback);
};
