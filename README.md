# Nexmo Client Library for Node.js [![build status](https://secure.travis-ci.org/Nexmo/nexmo-node.png)](http://travis-ci.org/Nexmo/nexmo-node)

A Node.JS REST API Wrapper library for Nexmo (http://nexmo.com/)

For full API documentation refer to https://docs.nexmo.com/

[![NPM](https://nodei.co/npm/nexmo.png)](https://nodei.co/npm/nexmo/)

## Installation Instructions

```bash
npm install nexmo
```

## Usage

```js
var Nexmo = require('nexmo');

var nexmo = new Nexmo({apiKey: API_KEY, apiSecret: API_SECRET}, {debug: DEBUG});
```

* `API_KEY` - API Key from Nexmo
* `API_SECRET` - API SECRET from Nexmo
* `DEBUG` - set this to true to debug library calls

## List of API's supported by the library

### Send a text message

```js
nexmo.sms.sendTextMessage(sender, recipient, message, opts, callback);
```

* `opts` - parameter is optional

### Send a Binary Message

```js
nexmo.sms.sendBinaryMessage(fromnumber, tonumber,body, udh, callback);
```

* `body` - Hex encoded binary data
* `udh` - Hex encoded udh

### Send a WAP Push Message

```js
nexmo.sms.sendWapPushMessage(fromnumber, tonumber, title, url, validity, callback);
```

* `validity` - is optional (if given should be in milliseconds)

### Send a Short Code alert

```js
nexmo.sms.shortcodeAlert(recipient, messageParams, opts, callback);
```

### Check Account Balance

```js
nexmo.account.checkBalance(callback);
```

### Get Pricing for sending message to a country.

```js
nexmo.number.getPricing(countryCode, callback);
```

* `countryCode` - 2 letter ISO Country Code

### Get Pricing for sending message or making a call to a number.

```js
nexmo.number.getPhonePricing(product, countryCode, callback);
```

* `product` - either `voice` or `sms`
* `countryCode` - 2 letter ISO Country Code

### Get all numbers associated to the account.

```js
nexmo.number.get(options, callback);
```

* `options` parameter is an optional Dictionary Object containing any of the following parameters
	* `pattern`
	* `search_pattern`
	* `index`
	* `size`

For more details on what the above options mean refer to the Nexmo API  [documentation](https://docs.nexmo.com/tools/developer-api/account-numbers)

Example:

```js
nexmo.number.get({pattern:714,index:1,size:50,search_pattern:2},consolelog);
```

### Search for MSISDN's available to purchase

```js
nexmo.number.search(countryCode,options,callback);
```

`options` parameter is optional. They can be one of the following :

1. number pattern to match the search (eg. 1408)
2. Dictionary Object optionally containing the following parameters :
	* `pattern`
	* `search_pattern`
	* `features`
	* `index`
	* `size`

For more details on what the above options mean refer to the Nexmo API  [documentation](https://docs.nexmo.com/tools/developer-api/number-search)

Example:

```js
nexmo.number.search('US',{pattern:3049,index:1,size:50,features:'VOICE',search_pattern:2},consolelog);
```

### Purchase number

```js
nexmo.number.buy(countryCode, msisdn, callback);
```

### Cancel Number

```js
nexmo.number.cancel(countryCode, msisdn, callback);
```

### Update Number

```js
nexmo.number.update(countryCode, msisdn, params, callback);
```

params is a dictionary of parameters per [documentation](https://docs.nexmo.com/index.php/developer-api/number-update)

### Update Password (API Secret)

```js
nexmo.account.updatePassword(<NEW_PASSWORD>,callback);
```

### Update Callback URL associated to the account

```js
nexmo.updateSMSCallback(<NEW_CALLBACK_URL>,callback);
```

### Change Delivery Receipt URL associated to the account

```js
nexmo.account.updateDeliveryReceiptCallback(<NEW_DR_CALLBACK_URL>,callback);
```

### Send TTS Message

```js
nexmo.voice.sendTTSMessage = function(<TO_NUMBER>,message,options,callback);
```

### Send TTS Prompt With Capture

```js
nexmo.sendTTSPromptWithCapture(<TO_NUMBER>,message,<MAX_DIGITS>, <BYE_TEXT>,options,callback);
```

### Send TTS Prompt With Confirm

```js
nexmo.voice.sendTTSPromptWithConfirm(<TO_NUMBER>, message ,<MAX_DIGITS>,'<PIN_CODE>',<BYE_TEXT>,<FAILED_TEXT>,options,callback);
```

### Make a voice call

```js
nexmo.voice.call(<TO_NUMBER>,<ANSWER_URL>,options,callback);
```

For more information check the documentation at https://docs.nexmo.com/voice/call

### Submit a Verification Request

```js
nexmo.verify.request({number:<NUMBER_TO_BE_VERIFIED>,brand:<NAME_OF_THE_APP>},callback);
```

For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#vrequest

### Validate the response of a Verification Request

```js
nexmo.verify.check({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,code:<CODE_TO_CHECK>},callback);
```

For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#check

### Search one or more Verification Request

```js
nexmo.verify.search(<ONE_REQUEST_ID or ARRAY_OF_REQUEST_ID>,callback);
```

For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#search

### Verification Control API

```js
nexmo.verify.control({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,cmd:<CODE_TO_CHECK>},callback);
```

For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#control

### Number Insight - Basic

```js
nexmo.numberInsight.get({level: 'basic', number: NUMBER}, callback);
```

For more information check the documentation at https://docs.nexmo.com/number-insight/basic

Example:

```js
nexmo.numberInsight.get({level: 'basic', number: '1-234-567-8900'}, consolelog);
```

### Number Insight - Standard

```js
nexmo.numberInsight.get({level: 'standard', number: NUMBER}, callback);
```
	
For more information check the documentation at https://docs.nexmo.com/number-insight/standard

Example:

```js
nexmo.numberInsight.get({level: 'standard', number: '1-234-567-8900'}, consolelog);
```

### Number Insight - Advanced

```js
nexmo.numberInsight.get({level: 'advanced', number: NUMBER}, callback);
```

For more information check the documentation at https://docs.nexmo.com/number-insight/advanced

## Callbacks

Callback from all API calls returns 2 parameters - error and a json object.

An example callback function:

```js
function consolelog (err,messageResponse) {
	if (err) {
		console.log(err);
	} else {
		console.dir(messageResponse);
	}
}
```

Refer here https://docs.nexmo.com/ to get the schema for the returned message response object.

## Testing

Run the

```bash
npm test
```

For testing purposes you can also use setHost function to make the library send requests to another place like localhost instead of real Nexmo. Feel free to catch and process those requests the way you need. A usage example:

```js
nexmo.setHost('localhost');
```

Note that default port is 443 and nexmo does https calls in such a case. You can use setPort function to make it proper for your testing environment. When port is not 443 it will make requests via http protocol. Have a look at an example:

```js
nexmo.setPort('8080');
```

## Examples

There are some basic examples which will test the functionality. They uses environment variables for settings for the tests. The environment variables are:

* API_KEY = The API key provided by Nexmo for your account
* API_SECRET = The secret provided by NExmo for your account
* FROM_NUMBER = The phone number to send messages and make calls from.
* TO_NUMBER = The phone number to send messages and make calls to.
* MAX_DIGITS = The maximum number of digits for the pin code.
* ANSWER_URL = The URL which has the VoiceXML file to control the call functionality
* PIN_CODE = The digits you must enter to confirm the message

The simplest way to run the examples is to create a `.env` file in the `examples` directory with the following:

```
API_KEY={value}
API_SECRET={value}
FROM_NUMBER={value}
TO_NUMBER={value}
MAX_DIGITS={value}
ANSWER_URL={value}
PIN_CODE={value}
```

Then run:

```bash
node examples/pre-v1.js
```

And

```bash
node examples/v1-beta.js
```

## License

MIT - see [LICENSE](LICENSE.txt)
