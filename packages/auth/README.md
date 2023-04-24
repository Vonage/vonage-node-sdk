# Vonage Auth SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/auth?label=%40vonage%2Fauth&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Auth SDK for Node.js for creating authentication headers and signature for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

We recommend using this package as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk).

For full API documentation refer to [developer.vonage.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Usage](#usage)
  * [Options](#options)
* [Testing](#testing)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Auth SDK.

### With NPM

```bash
npm install @vonage/auth
```

### With Yarn

```bash
yarn add @vonage/auth
```

## Usage

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `auth` property off of the client that you instantiate.

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if you only need to use the Auth API. All you need to do is `require('@vonage/auth')`, and use the returned object to create your own client.

```js
const { Auth } = require('@vonage/server-sdk');
// Or if standalone
const { Auth } = require('@vonage/auth');

const vonageAuth = new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
});

(async () => {
  const basicHeader = vonageAuth.createBasicHeader();
  console.log(basicHeader);
})()
```

### Options

Options is an object with the following properties:

* `apiKey` - API Key from Vonage API. If `applicationId` and `privateKey` are present, `apiKey` is optional.
* `apiSecret` - API Secret from Vonage API. If `applicationId` and `privateKey` are present, `apiSecret` is optional.
* `applicationId` - (optional) The Vonage API Application ID to be used when creating JWTs.
* `privateKey` - (optional) The Private Key to be used when creating JWTs. You can specify the key as any of the following:
    * A [Buffer](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_string_encoding) containing the file contents.
    * A String containing the path to the key file on disk.
    * A String containing the key itself.

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
