# Vonage Server SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/network-client?label=%40vonage%2Fnetwork-client&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Server Client SDK for Node.js used to wrap the authentication
headers/signatures for use with [Vonage APIs](https://www.vonage.com/). To use
it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
  * [Options](#options)
* [Testing](#testing)

## Installation

### With NPM

```bash
npm install @vonage/network-client
```

### With Yarn

```bash
yarn add @vonage/network-client
```

## Usage

To create a client, you will need to pass in a `@vonage/auth` object.

```js
const { Auth } = require('@vonage/auth');
const { Client } = require('@vonage/network-client');

const vonageClient = new Client (new Auth({
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        applicationId: APP_ID,
        privateKey: PRIVATE_KEY_PATH,
    }),
    options,
);
```

### Options

`options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)
along with the following that are specific for the network APIs

* `msisdn: string` - The MSISDN (phone number) you wish to authenticate to.
* `accessToken: string` (optional) - A pre generated Access token for making network API calls
* `expiresIn: string` (required if `accessToken` is passed) - Time until the access token expires

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
