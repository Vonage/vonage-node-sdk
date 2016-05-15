Nexmo Client Library for Node.js [![build status](https://secure.travis-ci.org/Nexmo/nexmo-node.png)](http://travis-ci.org/Nexmo/nexmo-node)
===================================

A Node.JS REST API Wrapper library for Nexmo (http://nexmo.com/)

For full API documentation refer to https://docs.nexmo.com/

[![NPM](https://nodei.co/npm/easynexmo.png)](https://nodei.co/npm/easynexmo/)

Installation Instructions :
===========================

Download and Install lib/nexmo.js in your lib

or use

```
npm install easynexmo
```

Usage :
=======

```js
var nexmo = require('easynexmo');

nexmo.initialize(KEY, SECRET, DEBUG);
```

KEY - API Key from Nexmo

SECRET - API SECRET from Nexmo

DEBUG - set this to true to debug library calls

List of API's supported by the library.
=======================================

###Send a text message

	nexmo.sendTextMessage(sender,recipient,message,opts,callback)
opts parameter is optional

###Send a Binary Message

	nexmo.sendBinaryMessage(fromnumber, tonumber,body, udh, callback);

body - Hex encoded binary data

udh - Hex encoded udh

###Send a WAP Push Message

	nexmo.sendWapPushMessage(fromnumber,tonumber,title,url,validity,callback);

validity is optional (if given should be in milliseconds)

###Send a Short Code alert

	nexmo.shortcodeAlert(recipient, messageParams, opts, callback);

###Check Account Balance
	nexmo.checkBalance(callback);

###Get Pricing for sending message to a country.

	nexmo.getPricing(countryCode,callback);

countryCode - 2 letter ISO Country Code

###Get Pricing for sending message or making a call to a number.

	nexmo.getPhonePricing(product,countryCode,callback);

product - either `voice` or `sms`
countryCode - 2 letter ISO Country Code

###Get all numbers associated to the account.

	nexmo.getNumbers(options,callback);
options parameter is optional.

options parameter should be a Dictionary Object containing any of the following parameters :

pattern

search_pattern

index

size

For more details on what the above options mean refer to the Nexmo API  [documentation](https://docs.nexmo.com/tools/developer-api/account-numbers)

Example : nexmo.getNumbers({pattern:714,index:1,size:50,search_pattern:2},consolelog);

###Search for MSISDN's available to purchase.

	nexmo.searchNumbers(countryCode,options,callback);

options parameter is optional. They can be one of the following :

number pattern to match the search (eg. 1408)

Dictionary Object optionally containing the following parameters :

pattern

search_pattern

features

index

size

For more details on what the above options mean refer to the Nexmo API  [documentation](https://docs.nexmo.com/tools/developer-api/number-search)

Ex : nexmo.searchNumbers('US',{pattern:3049,index:1,size:50,features:'VOICE',search_pattern:2},consolelog);

###Purchase number

	nexmo.buyNumber(countryCode, msisdn, callback);

###Cancel Number

	nexmo.cancelNumber(countryCode, msisdn, callback);

###Update Number

	nexmo.updateNumber(countryCode, msisdn, params, callback)

params is a dictionary of parameters per [documentation](https://docs.nexmo.com/index.php/developer-api/number-update)

###Change Password (API Secret)

	nexmo.changePassword(<NEW_PASSWORD>,callback);

###Change Callback URL associated to the account

	nexmo.changeMoCallbackUrl(<NEW_CALLBACK_URL>,callback);

###Change Delivery Receipt URL associated to the account

	nexmo.changeDrCallbackUrl(<NEW_DR_CALLBACK_URL>,callback);

###Send TTS Message

	nexmo.sendTTSMessage = function(<TO_NUMBER>,message,options,callback);

###Send TTS Prompt With Capture

	nexmo.sendTTSPromptWithCapture(<TO_NUMBER>,message,<MAX_DIGITS>, <BYE_TEXT>,options,callback);

###Send TTS Prompt With Confirm

	nexmo.sendTTSPromptWithConfirm(<TO_NUMBER>, message ,<MAX_DIGITS>,'<PIN_CODE>',<BYE_TEXT>,<FAILED_TEXT>,options,callback);

###Make a voice call

	nexmo.call(<TO_NUMBER>,<ANSWER_URL>,options,callback);
	For more information check the documentation at https://docs.nexmo.com/voice/call

###Submit a Verification Request

	nexmo.verifyNumber({number:<NUMBER_TO_BE_VERIFIED>,brand:<NAME_OF_THE_APP>},callback);
For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#vrequest

###Validate the response of a Verification Request

	nexmo.checkVerifyRequest({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,code:<CODE_TO_CHECK>},callback);
For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#check

###Search one or more Verification Request

	nexmo.searchVerifyRequest(<ONE_REQUEST_ID or ARRAY_OF_REQUEST_ID>,callback);
For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#search

###Verification Control API

	nexmo.controlVerifyRequest({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,cmd:<CODE_TO_CHECK>},callback);
For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#control

###Number Insight - Basic

	nexmo.numberInsightBasic(numberToGetInsight,callback);
For more information check the documentation at https://docs.nexmo.com/number-insight/basic

Example : nexmo.numberInsightBasic('1-234-567-8900',consolelog);

###Number Insight - Standard

	nexmo.numberInsightStandard(numberToGetInsight,callback);
For more information check the documentation at https://docs.nexmo.com/number-insight/standard

Example : Example : nexmo.numberInsightStandard('1-234-567-8900',consolelog);

###Number Insight - Advanced

	nexmo.numberInsight({number:'<NUMBER_TO_GET_INSIGHT>',callback:<URL_TO_SUBMIT_THE_RESPONSE>},callback);
For more information check the documentation at https://docs.nexmo.com/number-insight/advanced

Callback
========

Callback from all API calls returns 2 parameters - error and a json object.

An example callback function :

	function consolelog (err,messageResponse) {
           if (err) {
                console.log(err);
           } else {
                console.dir(messageResponse);
           }
	}

Refer here https://docs.nexmo.com/ to get the schema for the returned message response object.

Testing
=======

There is a basic test suite which will test the functionality. It uses environment variables for settings for the tests. The environment variables are:

* KEY = The API key provided by Nexmo for your account
* SECRET = The secret provided by NExmo for your account
* FROM_NUMBER = The phone number to send messages and make calls from.
* TO_NUMBER = The phone number to send messages and make calls to.
* MAX_DIGITS = The maximum number of digits for the pin code.
* ANSWER_URL = The URL which has the VoiceXML file to control the call functionality
* PIN_CODE = The digits you must enter to confirm the message

You run the test suite using:

```
KEY=<your key> SECRET=<your secret> FROM_NUMBER=<from number> TO_NUMBER=<to number> MAX_DIGITS=<max digits> ANSWER_URL=<your answer url> PIN_CODE=<your pin code> node test/nexmo_test.js
```

Please remember to substitute the values!

For testing purposes you can also use setHost function to make the library send requests to another place like localhost instead of real Nexmo. Feel free to catch and process those requests the way you need. A usage example:

	nexmo.setHost('localhost');

Note that default port is 443 and easynexmo does https calls in such a case. You can use setPort function to make it proper for your testing environment. When port is not 443 it will make requests via http protocol. Have a look at an example:

	nexmo.setPort('8080');

The MIT License (MIT)
=====================

Copyright (c) 2015 Prabhu Velayutham

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
