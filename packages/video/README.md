# Vonage Video SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/master?logo=github&style=flat-square&label=Workflow%20Build) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/github/v/release/vonage/vonage-node-sdk?logo=npm&style=flat-square)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)][../../LICENSE.TXT]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Video SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a
Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Constructor](#constructor)
* [Callbacks](#callbacks)
* [Testing](#testing)
* [Examples](#examples)
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

## Using the Vonage Video SDK

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)
if you only need to use the Video APIs. All you need to do is `require('@vonage/video')`, and use the returned object to
create your own client.

```js
const { Auth } = require('@vonage/auth');
const { Video } = require('@vonage/video');

const videoClient = new Video(new Auth({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
  }), options);
```

* `applicationId` - (optional) The Vonage API Application ID to be used when creating JWTs.
* `privateKey` - (optional) The Private Key to be used when creating JWTs. You can specify the key as any of the
  following:
    * A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding) containing the file
      contents.
    * A String containing the path to the key file on disk.
    * A String containing the key itself.

`options` is an object that can contain:

* `videoHost` - (optional) A base URL to use instead of the default `https://video.api.vonage.com`

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

## Examples

Forthcoming.

## Supported APIs

The following is a list of Vonage Video APIs and whether the SDK provides support for them:

| API   |  Supported?|
|----------|:-------------:|
| Session Creation | ✅ |
| Signaling | ✅ |
| Force Muting | ✅ |
| Archiving | ✅ |
| Custom S3/Azure buckets | ❌ |
| SIP Interconnect | ❌ |
| Live Streaming Broadcasts | ❌ |
| Experience Composer | ❌ |
| Account Management | ❌ |

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk

[license]: ../../LICENSE.txt
