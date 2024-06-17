# Vonage Verify V2 SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/verify2?label=%40vonage%2Fverify2&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]


<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Verify (for version 2) SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

-   [Installation](#installation)
-   [Usage](#usage)
-   [Promises](#promises)
-   [Testing](#testing)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Verify API.

### With NPM

```bash
npm install @vonage/verify2
```

### With Yarn

```bash
yarn add @vonage/verify2
```

## Usage

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `verify2` property off of the client that you instantiate.

```js
const { Vonage } = require('@vonage/server-sdk')

const credentials = {
  apiKey: API_KEY,
  apiSecret: API_SECRET,
}
const options = {}
const vonage = new Vonage(credentials, options)

vonage.verify2
  .newRequest()
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err))
```

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if you only need to use the Verify V2 API. All you need to do is `require('@vonage/verify2')`, and use the returned object to create your own client.

```js
const { Auth } = require('@vonage/auth')
const { Verify2 } = require('@vonage/verify2')

const credentials = new Auth({
  applicationId: APP_ID,
  privateKey: PRIAVTE_KEY,
})
const options = {}
const verifyClient = new Verify2(credentials, options)
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md#options), and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to wait for a response.

```js
const resp = await verifyClient.checkCode(VERIFY_REQUEST_ID, CODE)

vonage.verify2
  .checkCode(VERIFY_REQUEST_ID, CODE)
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err))
```

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
