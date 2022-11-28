# Vonage Server SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/master?logo=github&style=flat-square&label=Workflow%20Build) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/github/v/release/vonage/vonage-node-sdk?logo=npm&style=flat-square)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)][license]

<img src="https://developer.vonage.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Node.JS Server SDK for [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Constructor](#constructor)
* [Callbacks](#callbacks)
* [Testing](#testing)
* [Examples](#examples)
* [Supported APIs](#supported-apis)

## Installation

```bash
npm install @vonage/server-sdk
```

## Constructor

```js
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
    signatureSecret: SIGNATURE_SECRET,
    signatureMethod: SIGNATURE_METHOD
  }, options);
```

* `apiKey` - API Key from Vonage API. If `applicationId` and `privateKey` are present, `apiKey` is optional.
* `apiSecret` - API SECRET from Vonage API. If `applicationId` and `privateKey` are present, `apiSecret` is optional.
* `applicationId` - (optional) The Vonage API Application ID to be used when creating JWTs.
* `privateKey` - (optional) The Private Key to be used when creating JWTs. You can specify the key as any of the following:
    * A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding) containing the file contents.
    * A String containing the path to the key file on disk.
    * A String containing the key itself.
* `signatureSecret` - (optional) API signature secret from Vonage API, used for signing SMS message requests
* `signatureMethod` - (optional) signature method matching the one you gave Vonage API, used for signing SMS message requests. Must be one of "md5hash", "md5", "sha1", "sha256", or "sha512"
* `options` - (optional) Additional options for the constructor.

Options are:

```js
{
  // If true, log information to the console
  debug: true|false,
  // append info the the User-Agent sent to Vonage
  // e.g. pass 'my-app' for /vonage-node/1.0.0/4.2.7/my-app
  appendToUserAgent: string,
  // Set a custom logger
  logger: {
    log: function() {level, args...}
    info: function() {args...},
    warn: function() {args...}
  },
  // Set a custom timeout for requests to Vonage in milliseconds. Defaults to the standard for Node http requests, which is 120,000 ms.
  timeout: integer,
  // Set a custom host for requests instead of api.vonage.com
  apiHost: string,
  // Set a custom host for requests instead of rest.vonage.com
  restHost: string
}
```

## Promises

This SDK uses Promises to return data. Each method call will have a return value that can be
manipulated in a `.then()` chain, and errors can be caught using `.catch()`.

Example:

```js
await vonage.sms.send({to, from, text})
  .then(resp => { console.log('Message sent successfully'); console.log(resp); })
  .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
```

## Testing

Run:

```bash
lerna run test
```

## Examples

See the [Vonage Node Quickstarts repo](https://github.com/Vonage/vonage-node-code-snippets).

## Supported APIs

The following is a list of Vonage APIs and whether the Node Server SDK provides support for them:

| API   | API Release Status |  Supported?
|----------|:---------:|:-------------:|
| Account API | General Availability |✅|
| Alerts API | General Availability |✅|
| Application API | General Availability |✅|
| Audit API | Beta |❌|
| Conversation API | Beta |❌|
| Dispatch API | Beta |❌|
| External Accounts API | Beta |❌|
| Media API | Beta |❌|
| Messages API | Beta |✅|
| Number Insight API | General Availability |✅|
| Number Management API | General Availability |✅|
| Pricing API | General Availability |✅|
| Redact API | Developer Preview |❌|
| Reports API | Beta |❌|
| SMS API | General Availability |✅|
| Verify API | General Availability |✅|
| Voice API | General Availability |✅|

[signup]: https://dashboard.vonage.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: LICENSE.txt
