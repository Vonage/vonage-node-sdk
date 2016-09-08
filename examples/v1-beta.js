// This class definition will eventually be the default
// returned from the package.

require('dotenv').config({path:__dirname + '/.env'});

var API_KEY = process.env.API_KEY || '';
var API_SECRET = process.env.API_SECRET || '';
var FROM_NUMBER = process.env.FROM_NUMBER || '';
var TO_NUMBER = process.env.TO_NUMBER || '';
var APP_ID = process.env.APP_ID || '';
var PRIVATE_KEY = process.env.PRIVATE_KEY || '';

var Promise = require('bluebird');

var SPACER = '\n-------------------------------------\n\n';

function logToConsole (err,messageResponse) {
  if (err) {
    console.log(err);
  }
  else {
    console.dir(messageResponse);
  }
}

var Nexmo = require('../lib/Nexmo');

var nexmo = new Nexmo({
    apiKey: API_KEY, 
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY
  },
  {debug: true}
);

function sendSms(callback) {
  var sendSms = nexmo.message.sendSms(
    FROM_NUMBER,
    TO_NUMBER, 
    'testing',
    callback
  );
}

function numberInsightBasic(callback) {
  nexmo.numberInsight.get({level:'basic', number: TO_NUMBER}, callback);
}

function checkBalance(callback) {
  nexmo.account.checkBalance(callback);
}

function getApps(callback) {
  nexmo.app.get({}, callback);
}

function crudApp(callback) {
  
  var app = Promise.promisifyAll(nexmo.app);
  
  var tempAppName = new Date().getTime(); 
  console.log('Creating App', tempAppName);

  app.createAsync(tempAppName, 'voice', 'https://v1uxw2scimhr.runscope.net', 'https://v1uxw2scimhr.runscope.net', null)
    .then(function(createResp) {
      console.log('Updating App', tempAppName);
      return app.updateAsync(createResp.id, tempAppName, 'voice', 'https://v1uxw2scimhr.runscope.net', 'https://v1uxw2scimhr.runscope.net', null);
    })
    .then(function(updateResp) {
      console.log('Deleting App', tempAppName);
      return app.deleteAsync(updateResp.id);
    })
    .then(function(deleteResp) {
      console.log('App Deleted');
      callback(null, deleteResp);
    })
    .catch(callback);
}

function makeCall(callback) {
  nexmo.calls.create({
    to: [{
      type: 'phone',
      number: TO_NUMBER
    }],
    from: {
      type: 'phone',
      number: FROM_NUMBER
    },
    answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
  }, callback);
}

function getCalls(callback) {
  var calls = Promise.promisifyAll(nexmo.calls);
  var callId = null;
  nexmo.calls.getAsync()
    .then(function(resp) {
      console.log(resp._embedded.calls);
      
      callId = resp._embedded.calls[0].uuid;
      console.log(SPACER, 'Getting single call details', callId);
      return calls.getAsync(callId);
    })
    .then(function(resp) {
      console.log(SPACER, 'Updating a call', callId);
      return calls.updateAsync(callId, {action: 'hangup'});
    })
    .catch(callback);
}

var examples = [
  {
    title: 'Send an SMS',
    example: sendSms
  },
  
  {
    title: 'Get Basic Number Insight',
    example: numberInsightBasic
  },
  {
    title: 'Check Balance',
    example: checkBalance
  },
  
  {
    title: 'Get List of Apps',
    example: getApps
  },
  
  {
    title: 'Create, Update and Delete an App',
    example: crudApp
  },
    
  {
    title: 'Make a call',
    example: makeCall
  },
    
  {
    title: 'Get all Calls and then get a single Call',
    example: getCalls
  }
];

var exampleIndex = 0;
function runExample(err, resp) {
  var toRun = examples[exampleIndex];
  if(toRun) {
    exampleIndex++;
    
    console.log(SPACER, 'Starting', toRun.title);
    toRun.example(runExample);
  }
  else {
    console.log('All examples complete');
  }
}

console.log('Starting to run the examples');
runExample();
