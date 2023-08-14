# Vonage Media SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/media?label=%40vonage%2Fmedia&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]


<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Media SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

-   [Installation](#installation)
-   [Usage](#usage)
-   [Promises](#promises)
-   [Testing](#testing)

## Installation

### With NPM

```bash
npm install @vonage/media
```

### With Yarn

```bash
yarn add @vonage/media
```

## Usage

Unlike the other SDK's this package is not included in the [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)

```js
const { Auth } = require('@vonage/auth')
const { Media } = require('@vonage/media')

const credentials = new Auth({
  applicationId: APP_ID,
  privateKey: PRIAVTE_KEY,
})
const options = {}
const mediaClient = new Media(credentials, options)
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md#options), and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to wait for a response.

```js
const resp = await mediaClient.listMediaItem()

mediaClient
  .listMedia()
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
