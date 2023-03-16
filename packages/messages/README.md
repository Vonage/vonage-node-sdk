# Vonage Messages SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/3.x?logo=github&style=flat-square&label=Workflow%20Build) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/github/v/release/vonage/vonage-node-sdk?logo=npm&style=flat-square)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)][../../LICENSE.TXT]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Messages SDK for Node.js for use
with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage
account. Sign up [for free at vonage.com][signup].

We recommend using this package as part of the
overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk)
.

For full API documentation refer
to [developer.nexmo.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Constructor](#constructor)
* [Callbacks](#callbacks)
* [Testing](#testing)
* [Examples](#examples)
* [Supported APIs](#supported-apis)

## Installation

We recommend using this SDK as part of the
overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk)
. Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the
Messages API.

### With NPM

```bash
npm install @vonage/messages
```

### With Yarn

```bash
yarn add @vonage/messages
```

## Using the Vonage Messages SDK

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it as
the `messages` property off of the client that you instantiate.

```js
const {Vonage} = require('@vonage/server-sdk');
const { Auth, AlgorithmTypes } = require('@vonage/auth');
const { SMS } = require('@vonage/messages');

const vonage = new Vonage(new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
  signature: {
    secret: 'ABCDE',
    algorithm: AlgorithmTypes.md5hash,
  },
}), options);

vonage.messages.send(new SMS({
  to: TO_NUMBER,
  from: FROM_NUMBER,
  text: MESSAGE
}));
```

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)
if you only need to use the Messages API. All you need to do
is `require('@vonage/messages')`, and use the returned object to create your own
client.

```js
const {Auth} = require('@vonage/auth');
const {Messages} = require('@vonage/messages');

const messagesClient = new Messages(new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
}), options);
```

* `apiKey` - API Key from Vonage API. If `applicationId` and `privateKey` are
  present, `apiKey` is optional.
* `apiSecret` - API Secret from Vonage API. If `applicationId` and `privateKey`
  are present, `apiSecret` is optional.
* `applicationId` - (optional) The Vonage API Application ID to be used when
  creating JWTs.
* `signature` - (optional) [deprecated] An object containg the secret and HASH
  algroithm to use for signing the request.
* `privateKey` - (optional) The Private Key to be used when creating JWTs. You
  can specify the key as any of the following:
  * A String containing the path to the key file on disk.
  * A String containing the key itself.
  * A Buffer containing the file contents.
* `options` is an object that can contain:

```json5
{
  // Set a custom timeout for requests to Nexmo in milliseconds. Defaults to the standard for Node http requests, which is 120,000 ms.
  timeout: integer,
  // Set a custom host for requests instead of api.nexmo.com
  apiHost: string,
  // Set a custom host for requests instead of rest.nexmo.com
  restHost: string
}
```

## Promises

Most methods that interact with the Vonage API uses Promises. You can either
resolve these yourself, or use `await` to
wait for a response.

```js
const resp = await messagesClient.send(new SMS({
  to: TO_NUMBER,
  from: FROM_NUMBER,
  text: MESSAGE
}));

messagesClient.send(new SMS({
  to: TO_NUMBER,
  from: FROM_NUMBER:
  text: MESSAGE
}))
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
