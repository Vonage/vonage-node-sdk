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
  var stream = Promise.promisifyAll(nexmo.calls.stream);
  var callId = null;
  nexmo.calls.getAsync()
    .then(function(resp) {
      callId = resp._embedded.calls[0].uuid;
      return stream.startAsync(
        callId,
        {
          stream_url: [   
            'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3'
          ]
        });
    })
    .then(function(resp) {
      console.log('stream.start response', resp);
      console.log(SPACER, 'Stopping Stream');
      
      return stream.stopAsync(callId)
    })
    .then(function(resp) {
      callback(null, resp);
    })
    .catch(callback);
};
