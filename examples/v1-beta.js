// This class definition will eventually be the default
// returned from the package.

require('dotenv').config({path:__dirname + '/.env'});

var API_KEY = process.env.API_KEY || '';
var API_SECRET = process.env.API_SECRET || '';
var FROM_NUMBER = process.env.FROM_NUMBER || '';
var TO_NUMBER = process.env.TO_NUMBER || '';

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
  apiSecret: API_SECRET
});

console.log('Sending Text Message');
nexmo.message.sendSms(
  FROM_NUMBER,
  TO_NUMBER, 
  'testing', 
  logToConsole
);

console.log('Getting Basic Number Insight');
nexmo.numberInsight.get({level:'basic', number: TO_NUMBER}, logToConsole);

console.log('Checking Balance');
nexmo.account.checkBalance(logToConsole);
