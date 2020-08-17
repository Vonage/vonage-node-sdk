# Nexmo Client Library for Node.js
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![build status](https://secure.travis-ci.org/Nexmo/nexmo-node.png)](http://travis-ci.org/Nexmo/nexmo-node)
[![Known Vulnerabilities](https://snyk.io/test/github/Nexmo/nexmo-node/badge.svg)](https://snyk.io/test/github/Nexmo/nexmo-node)
[![codecov](https://codecov.io/gh/Nexmo/nexmo-node/branch/master/graph/badge.svg)](https://codecov.io/gh/Nexmo/nexmo-node)

<img src="https://developer.nexmo.com/assets/images/Vonage_Nexmo.svg" height="48px" alt="Nexmo is now known as Vonage" />

A Node.JS REST API Wrapper library for [Nexmo](https://www.nexmo.com/).

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

[![NPM](https://nodei.co/npm/nexmo.png)](https://nodei.co/npm/nexmo/)

[Installation](#installation) | [Constructor](#constructor) | [Callbacks](#callbacks) | [Messaging](#messaging) | [Message Signing](#signature) | [Voice](#voice) | [Verify](#verify) | [Number Insight](#number-insight) | [Applications](#applications) | [Management](#management) | [Redact](#redact) | [Pricing](#pricing) | [JWT (JSON Web Token)](#jwt)

## Installation

```bash
npm install nexmo
```

## Constructor

```js
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
    signatureSecret: SIGNATURE_SECRET,
    signatureMethod: SIGNATURE_METHOD
  }, options);
```

* `apiKey` - API Key from Nexmo. If `applicationId` and `privateKey` are present, `apiKey` is optional.
* `apiSecret` - API SECRET from Nexmo. If `applicationId` and `privateKey` are present, `apiSecret` is optional.
* `applicationId` - (optional) The Nexmo Application ID to be used when creating JWTs.
* `privateKey` - (optional) The Private Key to be used when creating JWTs. You can specify the key as any of the following:
  * A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding) containing the file contents.
  * A String containing the path to the key file on disk.
* `signatureSecret` - (optional) API singature secret from Nexmo, used for signing SMS message requests
* `signatureMethod` - (optional) singature method matching the one you gave Nexmo, used for signing SMS message requests. Must be one of "md5hash", "md5", "sha1", "sha256", or "sha512"
* `options` - (optional) Additional options for the constructor.

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
  timeout: integer,
  // Set a custom host for requests instead of api.nexmo.com
  apiHost: string,
  // Set a custom host for requests instead of rest.nexmo.com
  restHost: string
}
```

## Callbacks

All methods expect a `callback` function to be passed in, with a method signature of `(error, response)` where:

* `error` - is an Error object if the API call returns an error, or `null` if the API call was successful.
* `response` - is an Object, with the API response if the API call was successful, or `null` if there was an error.

Example:

```js
callback = (error, response) => {
  if (error) {
    console.error(error)
  }

  if (response) {
    console.log(response)
  }
}
```

## Messaging

### Send a text message

```js
nexmo.message.sendSms(sender, recipient, message, options, callback);
```

* `options` - parameter is optional. See [SMS API Reference](https://developer.nexmo.com/api/sms#send-an-sms)

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

For detailed information please see the documentation at https://developer.nexmo.com/api/voice

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

For more information see https://developer.nexmo.com/api/voice#createCall

### Get a Call

```js
nexmo.calls.get(callId, callback);
```

For more information see https://developer.nexmo.com/api/voice#getCall

### Query Calls

```
nexmo.calls.get({status: 'completed'}, callback);
```

The first parameter can contain many properties to filter the returned call or to page results. For more information see the [Calls API Reference](https://developer.nexmo.com/api/voice#getCalls).

### Update a Call

```js
nexmo.calls.update(callId, { action: 'hangup' }, callback);
```

For more information see https://developer.nexmo.com/api/voice#updateCall

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

For more information see https://developer.nexmo.com/api/voice#startStream

### Stop an audio stream in a call

```js
nexmo.calls.stream.stop(callId);
```

For more information see https://developer.nexmo.com/api/voice#stopStream

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

For more information see https://developer.nexmo.com/api/voice#startTalk

### Stop synthesized text in a call

```js
nexmo.calls.talk.stop(callId);
```

For more information see https://developer.nexmo.com/api/voice#stopTalk

### Send DTMF to a Call

```js
nexmo.calls.dtmf.send(callId, params, callback);
```

For more information see https://developer.nexmo.com/api/voice#startDTMF


## Files

For detailed information please see the documentation at https://developer.nexmo.com/voice/voice-api/guides/recording

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

For more information check the documentation at https://developer.nexmo.com/api/verify#verify-request

### Submit a PSD2 (Payment Services Directive 2) Verification Request

```js
nexmo.verify.psd2({number:<NUMBER_TO_BE_VERIFIED>,payee:<NAME_OF_THE_SELLER>,amount:<AMOUNT_IN_EUROS>},callback);
```

For more information check the documentation at https://developer.nexmo.com/api/verify#verifyRequestWithPSD2

### Validate the response of a Verification Request

```js
nexmo.verify.check({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,code:<CODE_TO_CHECK>},callback);
```

For more information check the documentation at https://developer.nexmo.com/api/verify#verify-check

### Search one or more Verification Request

```js
nexmo.verify.search(<ONE_REQUEST_ID or ARRAY_OF_REQUEST_ID>,callback);
```

For more information check the documentation at https://developer.nexmo.com/api/verify#verify-search

### Cancel verification

```js
nexmo.verify.control({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,cmd:'cancel'},callback);
```

For more information check the documentation at https://developer.nexmo.com/api/verify#verify-control

### Trigger next verification event

```js
nexmo.verify.control({request_id:<UNIQUE_ID_FROM_VERIFICATION_REQUEST>,cmd:'trigger_next_event'},callback);
```

For more information check the documentation at https://developer.nexmo.com/api/verify#verify-control

## Number Insight

### Basic

```js
nexmo.numberInsight.get({level: 'basic', number: NUMBER}, callback);
```

For more information check the documentation at https://developer.nexmo.com/number-insight/building-blocks/number-insight-basic/node

Example:

```js
nexmo.numberInsight.get({level: 'basic', number: '1-234-567-8900'},  callback);
```

### Standard

```js
nexmo.numberInsight.get({level: 'standard', number: NUMBER}, callback);
```

For more information check the documentation at https://developer.nexmo.com/number-insight/building-blocks/number-insight-standard/node

Example:

```js
nexmo.numberInsight.get({level: 'standard', number: '1-234-567-8900'}, callback);
```

### Advanced

```js
nexmo.numberInsight.get({level: 'advancedSync', number: NUMBER}, callback);
```

For more information check the documentation at https://developer.nexmo.com/number-insight/building-blocks/number-insight-advanced/node

### Advanced Async

Number Insight Advanced might take a few seconds to return a result, therefore the option exists to process the result asynchronously through a webhook.

```js
nexmo.numberInsight.get({level: 'advancedAsync', number: NUMBER, callback: "http://example.com"}, callback);
```

In this case, the result of your insight request is posted to the callback URL as a webhook. For more details on webhooks see the [Number Insight Advanced](https://developer.nexmo.com/number-insight/building-blocks/number-insight-advanced-async-callback/node) documentation.

## Applications

For an overview of applications see https://developer.nexmo.com/concepts/guides/applications

### Create an App

```js
nexmo.applications.create(params, callback);
```

For more information see https://developer.nexmo.com/api/application.v2#createApplication

`params` can be

``` json
{
"name": "My Application",
  "capabilities": {
    "voice": {
      "webhooks": {
        "answer_url": {
          "address": "https://example.com/webhooks/answer",
          "http_method": "POST"
        },
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "messages": {
      "webhooks": {
        "inbound_url": {
          "address": "https://example.com/webhooks/inbound",
          "http_method": "POST"
        },
        "status_url": {
          "address": "https://example.com/webhooks/status",
          "http_method": "POST"
        }
      }
    },
    "rtc": {
      "webhooks": {
        "event_url": {
          "address": "https://example.com/webhooks/event",
          "http_method": "POST"
        }
      }
    },
    "vbc": {}
  }
}
```

### Get a single App

```js
nexmo.applications.get(appId, callback, v2flag);
```

For more information see https://developer.nexmo.com/api/application.v2#getApplication

 - `v2flag` - if `true`, you'll receive the V2 API response, else you'll receive a V1 style response from the V2 API

### Get Apps by a filter

```js
nexmo.applications.get(options, callback, v2flag);
```

For more information see https://developer.nexmo.com/api/application.v2#listApplication
- `options` - filter options, use `{}` to get all your applications
- `v2flag` - if `true`, you'll receive the V2 API response, else you'll receive a V1 style response from the V2 API


### Update an App

```js
nexmo.applications.update(appId, params, callback);
```

For more information see https://developer.nexmo.com/api/application.v2#updateApplication

### Delete an App

```js
nexmo.application.delete(appId, callback);
```

For more information see https://developer.nexmo.com/api/application.v2#deleteApplication

## Management

### Check Account Balance

```js
nexmo.account.checkBalance(callback);
```

### List Account Secrets

```js
nexmo.account.listSecrets(apiKey, callback);
```

### Get Account Secret

```js
nexmo.account.getSecret(apiKey, secretId, callback);
```

### Create Account Secret

```js
nexmo.account.createSecret(apiKey, secret, callback);
```

### Delete Account Secret

```js
nexmo.account.deleteSecret(apiKey, secretId, callback);
```

### Get Pricing for sending a message to a country.

```js
nexmo.number.getPricing(countryCode, callback);
```

* `countryCode` - 2 letter ISO Country Code

### Get Pricing for sending a message or making a call to a number.

```js
nexmo.number.getPhonePricing(product, msisdn, callback);
```

* `product` - either `voice` or `sms`
* `msisdn` - Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. i.e. 447700900000

### Get all numbers associated with the account.

```js
nexmo.number.get(options, callback);
```

* `options` parameter is an optional Dictionary Object containing any of the following parameters
  * `pattern`
  * `search_pattern`
  * `index`
  * `size`
  * `has_application`
  * `application_id`

For more details about these options, refer to the [Numbers API reference](https://developer.nexmo.com/api/numbers#getOwnedNumbers)

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
  * `type`
  * `features`
  * `index`
  * `size`

For more details about these options, refer to the [Numbers API reference](https://developer.nexmo.com/api/numbers#getAvailableNumbers)

Example:

```js
nexmo.number.search('US',{pattern:3049,index:1,size:50,type:'mobile-lvn',features:'VOICE',search_pattern:2}, callback);
```

### Purchase Number

```js
nexmo.number.buy(countryCode, msisdn, callback);

// optional target_api_key option
nexmo.number.buy(countryCode, msisdn, target_api_key, callback);
```

For more details on these parameters, see the [Numbers API reference](https://developer.nexmo.com/api/numbers#buyANumber).

### Cancel Number

```js
nexmo.number.cancel(countryCode, msisdn, callback);

// optional target_api_key option
nexmo.number.cancel(countryCode, msisdn, target_api_key, callback);
```

For more details on these parameters, see the [Numbers API reference](https://developer.nexmo.com/api/numbers#cancelANumber).

### Update Number

```js
nexmo.number.update(countryCode, msisdn, params, callback);
```

`params` is a dictionary of parameters as described in the [Numbers API reference](https://developer.nexmo.com/api/numbers#updateANumber).

### Update Password (API Secret)

```js
nexmo.account.updatePassword(<NEW_PASSWORD>,callback);
```

### Update Callback URL associated to the account

```js
nexmo.account.updateSMSCallback(<NEW_CALLBACK_URL>,callback);
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

## Pricing

`type` is the type of service you wish to retrieve pricing for: either `sms`, `sms-transit` or `voice`.

### Get pricing for a specific country

```js
nexmo.pricing.get(type, country_code, callback);
```

### Get pricing for all countries

```js
nexmo.pricing.getFull(type, callback);
```

### Get pricing for a specific dialing prefix

```js
nexmo.pricing.getPrefix(type, country_prefix, callback);
```

### Get pricing for a specific phone number

```js
nexmo.pricing.getPhone(type, phone, callback);
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
const Nexmo = require('nexmo');

const jwt = Nexmo.generateJwt('path/to/private.key', {application_id: APP_ID});
```

Or via a `Nexmo` instance where your supplied `applicationId` and `privateKey` credentials will be used:

```js
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
  });

const jwt = nexmo.generateJwt();
```

## Signature

There are two ways of generating a signature hash. Both strip the `sig` parameter if supplied. You can use the function that exists on the Nexmo definition:

```js
const Nexmo = require('nexmo');

const hash = Nexmo.generateSignature(SIGNATURE_METHOD, SIGNATURE_SECRET, params);
```

Or via a `Nexmo` instance where your supplied `signatureSecret` and `signatureMethod`:

```js
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    signatureSecret: SIGNATURE_SECRET,
    signatureMethod: SIGNATURE_METHOD,
  });

const hash = nexmo.generateSignature();
```

`SIGNATURE_METHOD` is the signature method matching the one you gave Nexmo. Must be one of "md5hash", "md5", "sha1", "sha256", or "sha512".



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

Also, see the [Nexmo Node Quickstarts repo](https://github.com/nexmo-community/nexmo-node-quickstart).

## Creating your own requests

> #### IMPORTANT
> This section uses internal APIs and should not be relied on. We make no guarantees that the interface is stable. Relying on these methods is not recommended for production applications

For endpoints that are not yet implemented, you can use the Nexmo HTTP Client to
make requests with the correct authentication method.

In these examples, we assume that you've created a `nexmo` instance as follows:

```javascript
const nexmo = new Nexmo({
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
  * [x] Update Calls
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
  * [x] US Short Codes
    * [x] Two-Factor Authentication
    * [x] Event-Based Alerts
      * [x] Sending Alerts
      * [x] Campaign Subscription Management
* Number Insight
  * [X] Basic
  * [X] Standard
  * [X] Advanced
  * [X] Advanced Async
  * [ ] Advanced Async Webhook
* Verify
  * [x] Verify
  * [x] PSD2
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
