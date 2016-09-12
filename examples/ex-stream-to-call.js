module.exports = function(callback, config) {
  
  var Promise = require('bluebird');
  var ngrok = require('ngrok');
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
  
  function randomPort() {
    return Math.floor(Math.random()*(7000-3000+1)+3000);
  }
  
  var app = require('express')();
  app.set('port', (process.env.PORT || randomPort()));
  app.use(require('body-parser').json());
  
  app.get('/', function(req, res) {
    res.send('hello');
  });
  
  // Handle events
  var callId = null;
  app.post('/', function(req, res) {
    console.log('Request received', req.body);
    // Hack: seeing two inbound webhook requests.
    // Use callId to indicate this.
    if(req.body.status === 'answered' && !callId) {
      callId = req.body.uuid;
      
      console.log('Call answered with call_uuid', callId)
      
      setTimeout(function() {
        sendStream(callId);
      }, 5000);
    }
    
    res.sendStatus(204);
  });
  
  var server = app.listen(app.get('port'), makeCall);
  
  function makeCall() {    
    console.log('Web server listening on port', app.get('port'));
      
    Promise.promisify(ngrok.connect)(app.get('port'))
      .then(function(url) {
        console.log('ngrok tunnel set up:', url);
        
        console.log('calling', config.TO_NUMBER);
        return calls.createAsync({
          to: [{
            type: 'phone',
            number: config.TO_NUMBER
          }],
          from: {
            type: 'phone',
            number: config.FROM_NUMBER
          },
          answer_url: ['https://nexmo-community.github.io/ncco-examples/conference.json'],
          event_url: [url]
        });
      })
      .then(function(res) {
        console.log('call in progress', res);
      })
      .catch(callback);
  }
  
  function sendStream(callId) {
    
    stream.startAsync(
      callId,
      {
        stream_url: [   
          'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3'
        ],
        loop: 1
      })
      .then(function(resp) {
        console.log('stream.start response', resp);
        
        console.log('waiting a short time');
        return Promise.delay(2000);
      })
      .then(function(resp) {
        console.log('stopping the stream', resp);
        
        return nexmo.calls.stream.stopAsync(callId);
      })
      .then(function(res) {
        console.log('stream.stop res', res);
        
        console.log('waiting a short time');
        return Promise.delay(2000);
      })
      .then(function(res) {
        return calls.updateAsync(callId, {action: 'hangup'});
      })
      .then(function(res) {
        console.log('calls.update', res);
        
        server.close();
        ngrok.kill();
        
        return Promise.delay(2000);
      })
      .then(function() {
        callback(null, null);
      })
      .catch(function(err) {
        if(server) server.close();
        if(ngrok) ngrok.kill();
        
        callback(err);
      });
  }

};
