// This class definition will eventually be the default
// returned from the package.

require('dotenv').config({path:__dirname + '/.env'});

var KEY = process.env.KEY || '';
var SECRET = process.env.SECRET || '';
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
  key: KEY, 
  secret: SECRET
});

nexmo.sms.sendTextMessage(
  FROM_NUMBER,
  TO_NUMBER, 
  'testing', 
  logToConsole
);
