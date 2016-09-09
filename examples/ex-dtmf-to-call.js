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
  var dtmf = Promise.promisifyAll(nexmo.calls.dtmf);
  
  function randomPort() {
    return Math.floor(Math.random()*(7000-3000+1)+3000);
  }
  
  var app = require('express')();
  app.set('port', (process.env.PORT || randomPort()));
  app.use(require('body-parser').json());
  
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
        sendDtmf(callId);
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
  
  function sendDtmf(callId) {
    dtmf.sendAsync(callId, {digits: '1234'})
      .then(function(res) {
        console.log('dtmf.send res', res);
        
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
