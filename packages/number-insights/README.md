# Vonage Number Insights SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/3.x?logo=github&style=flat-square&label=Workflow%20Build) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/github/v/release/vonage/vonage-node-sdk?logo=npm&style=flat-square)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)][../../LICENSE.TXT]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Number Insights SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

We recommend using this package as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). 

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Constructor](#constructor)
* [Callbacks](#callbacks)
* [Testing](#testing)
* [Examples](#examples)
* [Supported APIs](#supported-apis)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Messages API.
### With NPM

```bash
npm install @vonage/number-insights
```

### With Yarn

```bash
yarn add @vonage/number-insights
```

## Using the Vonage Number Insights SDK

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `messages` property off of the client that you instantiate.

```js
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: API_KEY,
    apiSecret: API_SECRET
  }, options);

vonage.numberInsights.basicLookup(PHONE_NUMBER)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if you only need to use the Messages API. All you need to do is `require('@vonage/messages')`, and use the returned object to create your own client.

```js
const { Auth } = require('@vonage/auth');
const { NumberInsights } = require('@vonage/number-insights');

const niClient = new NumberInsights(new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
  }), options);
```

* `apiKey` - API Key from Vonage API. If `applicationId` and `privateKey` are present, `apiKey` is optional.
* `apiSecret` - API Secret from Vonage API. If `applicationId` and `privateKey` are present, `apiSecret` is optional.
* `options` is an object that can contain:

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

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to
wait for a response.

```js
const resp = await vonage.numberInsights.basicLookup(PHONE_NUMBER)

vonage.numberInsights.basicLookup(PHONE_NUMBER)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
