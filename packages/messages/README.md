# Vonage Messages SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/Vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/github/v/release/vonage/vonage-node-sdk?logo=npm&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)](../../LICENSE.TXT)

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Messages SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free][signup] at vonage.com.

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

If you are updating from V2 to V3, please check the migration guide found [here](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/messages/v2_TO_v3_MIGRATION_GUIDE.md)

* [Installation](#installation)
* [Usage](#usage)
* [Promises](#promises)
* [Channels](#channels)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Messages API.

### With NPM

```bash
npm install @vonage/messages
```

### With Yarn

```bash
yarn add @vonage/messages
```

## Usage

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `messages` property off of the client that you instantiate.

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

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to
wait for a response.

```js
const resp = await messagesClient.send(new SMS({
  to: TO_NUMBER,
  from: FROM_NUMBER,
  text: MESSAGE
}));

messagesClient.send(new SMS({
  to: TO_NUMBER,
  from: FROM_NUMBER,
  text: MESSAGE,
}))
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

## Testing

Run:

```bash
npm run test
```

## Channels

The Vonage Messages API supports several different communication channels, and
from time to time will add new channels. Each channel follows our normal product
development cycle and therefore different channels within the overall API may
have different release statuses at a certain point in time. Channels available
for general use will be listed as having 'General Availability'. Channels which
are currently part of a Beta program will be listed as 'Beta'. This table
details the current release status of each channel implemented in this SDK:

| Channel             |  API Release Status  |
|---------------------|:--------------------:|
| SMS                 | General Availability |
| MMS                 | General Availability |
| RCS                 | Beta                 |
| Facebook Messenger  | General Availability |
| WhatsApp            | General Availability |
| WhatsApp (reaction) | Beta                 |
| Viber               | General Availability |

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk

[license]: ../../LICENSE.txt
