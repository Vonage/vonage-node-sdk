# Vonage Video SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/video?label=%40vonage%2Fvideo&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Video SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
* [Promise](#promises)
* [Testing](#testing)
* [Supported APIs](#supported-apis)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Video API.

### With NPM

```bash
npm install @vonage/video
```

### With Yarn

```bash
yarn add @vonage/video
```

## Usage

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `video` property off of the client that you instantiate.

```js
const { Auth } = require('@vonage/auth');
const { Vonage } = require('@vonage/server-sdk');

const credentials = new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET
});
const options = {};
const vonage = new Vonage(credentials, options);

const session = await vonage.video.createSession();
```

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if you only need to use the Video API. All you need to do is `require('@vonage/video')`, and use the returned object to create your own client.

```js
const { Auth } = require('@vonage/auth');
const { Video } = require('@vonage/video');

const credentials = new Auth({
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
});
const options = {};
const videoClient = new Video(credentials, options);
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md#options), and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)

## Promises

This SDK uses Promises to return data.

```js
const session = await videoClient.createSession();
```

## Testing

Run:

```bash
npm test
```

## Supported APIs

The following is a list of Vonage Video APIs and whether the SDK provides support for them:

| API                       |  Supported? |
|---------------------------|:-----------:|
| Session Creation          |      ✅     |
| Signaling                 |      ✅     |
| Force Muting              |      ✅     |
| Archiving                 |      ✅     |
| SIP Interconnect          |      ✅     |
| Live Streaming Broadcasts |      ✅     |
| Experience Composer       |      ✅     |


[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
