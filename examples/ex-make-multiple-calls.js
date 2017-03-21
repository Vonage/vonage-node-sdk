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

  function callWithRetry(callRequest, callback, maxRetries, retryCount) {
    retryCount = retryCount || 0;

    nexmo.calls.create(callRequest, function(error, result) {
        console.log('----------------------------');
        console.log('call response returned');
        console.log('error', JSON.stringify(error, null, 2));
        console.log('result', JSON.stringify(result, null, 2));

        if(error && error.statusCode === 429 && retryCount <= maxRetries) {
          console.log('429 detected. Retrying after', error.headers['retry-after'], 'ms');
          setTimeout(function() {
            callWithRetry(callRequest, callback, maxRetries, ++retryCount);
          }, error.headers['retry-after']);
          
        }
        else {
          callback(error, result);
        }
      });
  }

  const callsToMake = [
    {
      to: [{
        type: 'phone',
        number: config.TO_NUMBER
      }],
      from: {
        type: 'phone',
        number: config.FROM_NUMBER
      },
      answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json'],
      event_url: ['http://requestb.in/wgapg3wg?to=' + config.TO_NUMBER]
    },
    {
      to: [{
        type: 'phone',
        number: config.ALT_TO_NUMBER
      }],
      from: {
        type: 'phone',
        number: config.FROM_NUMBER
      },
      answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json'],
      event_url: ['http://requestb.in/wgapg3wg?to=' + config.ALT_TO_NUMBER]
    }
  ];

  const results = [];
  function makeNextCall(error, result) {
    if(error || result) {
      results.push({error: error, result: result});
    }

    if(callsToMake.length > 0) {
      var callRequest = callsToMake.shift();
      callWithRetry(callRequest, makeNextCall, 1);
    }
    else {
      console.log('--------------------------');
      console.log('all calls completed', results);
      console.log('--------------------------');
      callback(null, results);
    }
  }

  makeNextCall();

};
