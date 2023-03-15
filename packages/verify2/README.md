# Vonage Verify SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/Vonage/vonage-node-sdk/ci.yml?branch=3.x)
[![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk)
![Latest Release](https://img.shields.io/npm/v/@vonage/verify2)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/npm/l/@vonage/verify2?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Verify (for version 2) SDK for Node.js for use with
[Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage
account. Sign up [for free at vonage.com][signup].

For full API documentation refer to
[developer.vonage.com](https://developer.vonage.com/).

-   [Installation](#installation)
-   [Usage](#using-the-vonage-verify-sdk)
-   [Promises](#promises)
-   [Testing](#testing)

## Installation

### With NPM

```bash
npm install @vonage/verify2
```

### With Yarn

```bash
yarn add @vonage/verify2
```

## Using the Vonage Verify v2 SDK

The SDK can be used standalone from the main
[Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if
you only need to use the Messages API. All you need to do is
`require('@vonage/verify')`, and use the returned object to create your own
client.

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

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/readme/packages/auth#options),
and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/readme/packages/server-client#options)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either
resolve these yourself, or use `await` to wait for a response.

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
