# Nexmo Client Library for Node.js [![build status](https://secure.travis-ci.org/Nexmo/nexmo-node.png)](http://travis-ci.org/Nexmo/nexmo-node)

A Node.JS REST API Wrapper library for [Nexmo](http://nexmo.com/).

For full API documentation refer to [docs.nexmo.com](https://docs.nexmo.com/).

[![NPM](https://nodei.co/npm/nexmo.png)](https://nodei.co/npm/nexmo/)

[Installation](#installation) | [Constructor](#constructor) | [Messaging](#messaging) | [Voice](#voice) | [Verify](#verify) | [Number Insight](#number-insight) | [Applications](#applications) | [Management](#management) | [Redact](#redact) | [JWT (JSON Web Token)](#jwt)

## Installation

```bash
npm install nexmo
```

## Constructor

```js
var Nexmo = require('nexmo');

var nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
  }, options);
```

* `apiKey` - API Key from Nexmo
* `apiSecret` - API SECRET from Nexmo
* `applicationId` - The Nexmo Application ID to be used when creating JWTs. Required for voice related functionality.
* `privateKey` - The Private Key to be used when creating JWTs. You can specify the key as any of the following:
  * The private key as a string (It must start with `-----BEGIN PRIVATE KEY-----`)
  * A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding) containing the file contents.  Required for voice related functionality.
  * A path to the key file on disk
* `options` - Additional options for the constructor

Options are:

```js
{
  // If true, log information to the console
  debug: true|false,
  // append info the the User-Agent sent to Nexmo
  // e.g. pass 'my-app' for /nexmo-node/1.0.0/4.2.7/my-app
  appendToUserAgent: string,
  // Set a custom logger
  logger: {
    log: function() {level, args...}
    info: function() {args...},
    warn: function() {args...}
  },
  // Set a custom timeout for requests to Nexmo in milliseconds. Defaults to the standard for Node http requests, which is 120,000 ms.
  timeout: integer
}
```

## Messaging

### Send a text message

```js
nexmo.message.sendSms(sender, recipient, message, options, callback);
```

* `opts` - parameter is optional. See [SMS API Reference](https://docs.nexmo.com/messaging/sms-api/api-reference#request)

### Send a Binary Message

```js
nexmo.message.sendBinaryMessage(fromnumber, tonumber, body, udh, callback);
```

* `body` - Hex encoded binary data
* `udh` - Hex encoded udh

### Send a WAP Push Message

```js
nexmo.message.sendWapPushMessage(fromnumber, tonumber, title, url, validity, callback);
```

* `validity` - is optional (if given should be in milliseconds)

### Send a Short Code alert

```js
nexmo.message.shortcodeAlert(recipient, messageParams, opts, callback);
```

## Voice

For detailed information please see the documentation at https://docs.nexmo.com/voice/voice-api

### Make a call

Requires `applicationId` and `privateKey` to be set on the constructor.

```js
nexmo.calls.create({
  to: [{
    type: 'phone',
    number: TO_NUMBER
  }],
  from: {
    type: 'phone',
    number: FROM_NUMBER
  },
  answer_url: [ANSWER_URL]
}, callback);
```

For more information see https://docs.nexmo.com/voice/voice-api/api-reference#call_create

### Get a Call

```js
nexmo.calls.get(callId, callback);
```

For more information see https://docs.nexmo.com/voice/voice-api/api-reference#call_create

### Query Calls

```
nexmo.calls.get({status: 'completed'}, callback);
```

The first parameter can contain many properties to filter the returned call or to page results. For more information see the [Calls API Reference](https://docs.nexmo.com/voice/voice-api/api-reference#calls).

### Update a Call

```js
nexmo.calls.update(callId, { action: 'hangup' }, callback);
```

For more information see https://developer.nexmo.com/api/voice#modify-an-existing-call

### Stream an Audio File to a Call

```js
nexmo.calls.stream.start(
  callId,
  {
    stream_url: [
      'https://nexmo-community.github.io/ncco-examples/assets/voice_api_audio_streaming.mp3'
    ],
    loop: 1
  });
```

For more information see https://docs.nexmo.com/voice/voice-api/api-reference#stream_put

### Stop an audio stream in a call

```js
nexmo.calls.stream.stop(callId);
```

For more information see https://docs.nexmo.com/voice/voice-api/api-reference#stream_delete

### Play synthesized text in a call

```js
nexmo.calls.talk.start(
  callId,
  {
    text: 'No songs detected',
    voiceName: 'Emma',
    loop: 1
  }
);
```

For more information see https://docs.nexmo.com/voice/voice-api/api-reference#talk_put

### Stop synthesized text in a call

```js
nexmo.calls.talk.stop(callId);
```

### Send DTMF to a Call

```js
nexmo.calls.dtmf.send(callId, params, callback);
```

For more information see https://docs.nexmo.com/voice/voice-api/api-reference#dtmf_put


## Files

For detailed information please see the documentation at https://docs.nexmo.com/voice/voice-api/recordings

### Get a file (recording)

```js
nexmo.files.get(fileIdOrUrl, callback);
```

### Save a file (recording)

```js
nexmo.files.save(fileIdOrUrl, file, callback);
```

## Verify

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

### Cancel verification

```js
nexmo.verify.control({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,cmd:'cancel'},callback);
```

For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#control

### Trigger next verification event

```js
nexmo.verify.control({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,cmd:'trigger_next_event'},callback);
```

For more information check the documentation at https://docs.nexmo.com/verify/api-reference/api-reference#control

## Number Insight

### Basic

```js
nexmo.numberInsight.get({level: 'basic', number: NUMBER}, callback);
```

For more information check the documentation at https://docs.nexmo.com/number-insight/basic

Example:

```js
nexmo.numberInsight.get({level: 'basic', number: '1-234-567-8900'},  callback);
```

### Standard

```js
nexmo.numberInsight.get({level: 'standard', number: NUMBER}, callback);
```

For more information check the documentation at https://docs.nexmo.com/number-insight/standard

Example:

```js
nexmo.numberInsight.get({level: 'standard', number: '1-234-567-8900'}, callback);
```

### Advanced

```js
nexmo.numberInsight.get({level: 'advanced', number: NUMBER}, callback);
```

For more information check the documentation at https://docs.nexmo.com/number-insight/advanced

### Advanced Async

Number Insight Advanced might take a few seconds to return a result, therefore the option exist to process the result asynchronously through a webhook.

```js
nexmo.numberInsight.get({level: 'advancedAsync', number: NUMBER, callback: "http://example.com"}, callback);
```

In this case the result of your insight request is posted to the callback URL as a webhook. For more details on webhooks see the [Number Insight Advanced](https://docs.nexmo.com/number-insight/advanced-async) documentation.

## Applications

For an overview of applications see https://docs.nexmo.com/tools/application-api

### Create an App

```js
nexmo.applications.create(name, type, answerUrl, eventUrl, options, callback);
```

For more information see https://docs.nexmo.com/tools/application-api/api-reference#create

### Get a single App

```js
nexmo.applications.get(appId, callback);
```

For more information see https://docs.nexmo.com/tools/application-api/api-reference#retrieve

### Get Apps by filter

```js
nexmo.application.get(options, callback);
```

For more information see https://docs.nexmo.com/tools/application-api/api-reference#list

### Update an App

```js
nexmo.applications.update(appId, name, type, answerUrl, eventUrl, options, callback);
```

For more information see https://docs.nexmo.com/tools/application-api/api-reference#update

### Delete an App

```js
nexmo.application.delete(appId, callback);
```

For more information see https://docs.nexmo.com/tools/application-api/api-reference#delete

## Management

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
nexmo.number.get({pattern:714,index:1,size:50,search_pattern:2}, callback);
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
nexmo.number.search('US',{pattern:3049,index:1,size:50,features:'VOICE',search_pattern:2}, callback);
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

## Redact

### Redact a specific ID

```js
nexmo.redact.transaction(id, type, callback);
```

## Media

### Upload a file

```js
nexmo.media.upload({"file": "/path/to/file"}, callback);
```

### Upload from a URL

```js
nexmo.media.upload({"url": "https://example.com/ncco.json"}, callback);
```

### Search existing media

```js
// See https://ea.developer.nexmo.com/api/media#search-media-files
// for possible search parameters
nexmo.media.search({ page_size: 1, page_index: 1 }, callback);
```

### Download media

```js
nexmo.media.download(id, callback);
```

### Delete media

```js
nexmo.media.delete(id, callback);
```

### Update media

```js
nexmo.media.update(id, body, callback);
```

### Get media details

```js
nexmo.media.get(id, callback);
```

## JWT

There are two ways of generating a JWT. You can use the function that exists on the Nexmo definition:

```js
var Nexmo = require('nexmo');

var jwt = Nexmo.generateJwt('path/to/private.key', {application_id: APP_ID});
```

Or via a `Nexmo` instance where your supplied `applicationId` and `privateKey` credentials will be used:

```js
var Nexmo = require('nexmo');

var nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
  });

var jwt = nexmo.generateJwt();
```

## Voice (Deprecated)

### Send TTS Message

```js
nexmo.voice.sendTTSMessage(<TO_NUMBER>,message,options,callback);
```

### Send TTS Prompt With Capture

```js
nexmo.sendTTSPromptWithCapture(<TO_NUMBER>,message,<MAX_DIGITS>, <BYE_TEXT>,options,callback);
```

### Send TTS Prompt With Confirm

```js
nexmo.voice.sendTTSPromptWithConfirm(<TO_NUMBER>, message ,<MAX_DIGITS>,'<PIN_CODE>',<BYE_TEXT>,<FAILED_TEXT>,options,callback);
```

## Testing

Run:

```bash
npm test
```

Or to continually watch and run tests as you change the code:

```bash
npm run-script test-watch
```

## Examples

See [examples/README.md](examples/README.md).

Also see the [Nexmo Node Quickstarts repo](https://github.com/nexmo-community/nexmo-node-quickstart).

## Creating your own requests

> !!!IMPORTANT!!! This section uses internal APIs and should not be relied on. We make no guarantees that the interface is stable. Relying on these methods is not recommended for production applications

For endpoints that are not yet implemented, you can use the Nexmo HTTP Client to
make requests with the correct authentication method.

In these examples, we assume that you've created a `nexmo` instance as follows:

```javascript
var nexmo = new Nexmo({
    apiKey: 'API_KEY',
    apiSecret: 'API_SECRET',
    applicationId: 'APPLICATION_ID',
    privateKey: './private.key',
});
```

* If your API endpoint is on `api.nexmo.com`, use the `nexmo.options.api` object.
* If your API endpoint is on `rest.nexmo.com`, use the `nexmo.options.rest` object.

Both of these objects expose the following methods:

* `get(path, params, callback, useJwt)` (`params` is the query string to use)
* `post(path, params, callback, useJwt)` (`params` is the POST body to send)
* `postUseQueryString(path, params, callback, useJwt)` (`params` is the query string to use)
* `delete(path, callback, useJwt)`

To make a request to `api.nexmo.com/v1/calls?status=rejected`:

```javascript
nexmo.options.api.get(
    "/v1/calls",
    {"status": "rejected"},
    function(err, data){
        console.log(err);
        console.log(data);
    },
    true // Use JWT for authentication
);
```

To make a request to `rest.nexmo.com/sms/json?from=Demo&to=447700900000&text=Testing`:

```javascript
nexmo.options.rest.postUseQueryString(
    "/sms/json",
    {"from": "Demo", "to": "447700900000", "text": "Testing"},
    function(err, data){
        console.log(err);
        console.log(data);
    },
    false // Don't use JWT, fall back to API key/secret
);
```

## API Coverage

* Voice
  * [x] Outbound Calls
  * [ ] Inbound Call Webhook
  * [x] Update calls
  * [x] Stream to Call
  * [x] Talk to Call
  * [x] DTMF to Call
* Messaging
  * [x] Send
  * [ ] Delivery Receipt Webhook
  * [ ] Inbound Message Webhook
  * [x] Search
    * [x] Message
    * [x] Messages
    * [x] Rejections
  * [ ] US Short Codes
    * [ ] Two-Factor Authentication
    * [ ] Event Based Alerts
      * [ ] Sending Alerts
      * [ ] Campaign Subscription Management
* Number Insight
  * [X] Basic
  * [X] Standard
  * [X] Advanced
  * [X] Advanced Async
  * [ ] Advanced Async Webhook
* Verify
  * [x] Verify
  * [x] Check
  * [x] Search
  * [x] Control
* Applications
  * [x] Create an Application
  * [x] Get Applications
  * [x] Update an Application
  * [x] Delete an Application
* Account
  * [X] Balance
  * [x] Pricing
  * [x] Settings
  * [x] Top Up
  * [x] Numbers
    * [x] Search
    * [x] Buy
    * [x] Cancel
    * [x] Update
* Media
  * [x] Upload
  * [x] Download
  * [x] Search
  * [x] Get
  * [x] Update
  * [x] Delete
* Voice (Deprecated)
  * [x] Outbound Calls
  * [ ] Inbound Call Webhook
  * [x] Text-To-Speech Call
  * [x] Text-To-Speech Prompt
* Redact
  * [x] Transaction


## License

MIT - see [LICENSE](LICENSE.txt)
