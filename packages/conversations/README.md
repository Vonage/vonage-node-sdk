# Vonage Conversations SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/Vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/github/v/release/vonage/vonage-node-sdk?logo=npm&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)](../../LICENSE.TXT)

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Conversations SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free][signup] at vonage.com.

For full API documentation refer to the [Vonage Conversations API specs](https://developer.vonage.com/en/api/conversation?source=conversation).

If you are updating from V2 to V3, please check the migration guide found [here](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/conversations/v2_TO_v3_MIGRATION_GUIDE.md)

* [Installation](#installation)
* [Usage](#usage)
* [Promises](#promises)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Conversations API.

### With NPM

```bash
npm install @vonage/conversations
```

### With Yarn

```bash
yarn add @vonage/conversations
```

## Usage

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `conversations` property off of the client that you instantiate.

```js
const { Vonage } = require('@vonage/server-sdk');
const { Auth } = require('@vonage/auth');

const vonage = new Vonage(new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
}), options);

vonage.conversations.getConversation(CONVERSATION_ID)
```

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)
if you only need to use the Conversations API. All you need to do
is `require('@vonage/conversations')`, and use the returned object to create your own
client.

```js
const { Auth } = require('@vonage/auth');
const { Conversations } = require('@vonage/conversations');

const conversationsClient = new Conversations(new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
}), options);

conversationsClient.getConversation(CONVERSATION_ID)
```

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to
wait for a response.

```js
const resp = await conversationsClient.getConversation(CONVERSATION_ID)

conversationsClient.getConversation(CONVERSATION_ID)
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
