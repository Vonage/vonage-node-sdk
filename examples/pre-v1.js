'use strict';

require('dotenv').config({path:__dirname + '/.env'});

var API_KEY = process.env.API_KEY || '';
var API_SECRET = process.env.API_SECRET || '';
var FROM_NUMBER = process.env.FROM_NUMBER || '';
var TO_NUMBER = process.env.TO_NUMBER || '';
var MAX_DIGITS = process.env.MAX_DIGITS || 4;
var ANSWER_URL = process.env.ANSWER_URL || '';
var PIN_CODE = process.env.PIN_CODE || '';

function consolelog (err,messageResponse) {
	if (err) {
                console.log(err);
        } else {
                console.dir(messageResponse);
        }
}

var nexmo = require('../lib/index');
nexmo.initialize(API_KEY, API_SECRET);

nexmo.sendTextMessage(FROM_NUMBER, TO_NUMBER, 'testing', consolelog);
nexmo.sendMessage({from:FROM_NUMBER,to: TO_NUMBER, text:'testing'}, consolelog);

nexmo.checkBalance(consolelog);
nexmo.getPricing('US',consolelog);
nexmo.getNumbers(consolelog);
nexmo.searchNumbers('US',consolelog);
nexmo.searchNumbers('US',303,consolelog);
nexmo.changePassword('nexmoapi',consolelog);

nexmo.sendTTSMessage(TO_NUMBER, 'testing', {}, consolelog);
nexmo.sendTTSPromptWithCapture(TO_NUMBER, 'testing', MAX_DIGITS, 'Goodbye', {}, consolelog);
nexmo.sendTTSPromptWithConfirm(TO_NUMBER, 'Enter your pin', MAX_DIGITS, PIN_CODE, 'Goodbye', 'Wrong pin', {}, consolelog);
nexmo.call(TO_NUMBER, ANSWER_URL, {}, consolelog);
