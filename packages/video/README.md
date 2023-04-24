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

### With NPM

```bash
npm install @vonage/video
```

### With Yarn

```bash
yarn add @vonage/video
```

## Usage

Unlike the other SDK's this package is not include in the [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)

You only need to use the Video APIs. All you need to do is `require('@vonage/video')`, and use the returned object to create your own client.

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
| Session Creation          | ✅          |
| Signaling                 | ✅          |
| Force Muting              | ✅          |
| Archiving                 | ✅          |
| Custom S3/Azure buckets   | ❌          |
| SIP Interconnect          | ✅          |
| Live Streaming Broadcasts | ✅          |
| Experience Composer       | ✅          |
| Account Management        | ❌          |


[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
