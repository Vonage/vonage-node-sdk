# Vonage Proactive Connect SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/proactive-connect?label=%40vonage%2Fproactive-connect&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

> [!WARNING]
> Starting on August 31st 2024, This API is sunset and will be removed in the next major release.

This is the Vonage Proactive Connect SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
* [Promise](#promises)
* [Testing](#testing)
* [Supported APIs](#supported-apis)

## Installation

### With NPM

```bash
npm install @vonage/proactive-connect
```

### With Yarn

```bash
yarn add @vonage/proactive-connect
```

## Usage

Unlike the other SDK's this package is not include in the [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)

You only need to use the Proactive Connect APIs. All you need to do is `require('@vonage/proactive-connect')`, and use the returned object to create your own client.

```js
const { Auth } = require('@vonage/auth');
const { ProactiveConnect } = require('@vonage/proactive-connect');

const credentials = new Auth({
  applicationId: APP_ID,
  privateKey: PRIVATE_KEY_PATH,
});
const options = {};
const proactiveConnectClient = new ProactiveConnect(credentials, options);
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md#options), and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)

## Promises

This SDK uses Promises to return data.

```js
(async () =>{
  for await (const list of proactiveConnectClient.findAllLists()) {
    console.log(list);
  }
})();
```

## Testing

Run:

```bash
npm test
```

## Supported APIs

The following is a list of Vonage Proactive APIs and whether the SDK provides support for them:

| API         |  Supported? |
|-------------|:-----------:|
| Lists       | ✅          |
| Items       | ✅          |
| Action      | ❌          |
| Jobs        | ❌          |
| Runs        | ❌          |
| Events      | ✅          |


[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
