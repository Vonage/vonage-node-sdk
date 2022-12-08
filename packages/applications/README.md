# Vonage Applications SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/3.x?logo=github&style=flat-square&label=Workflow%20Build)
[![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk)
![Latest Release](https://img.shields.io/npm/v/@vonage/applications)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/npm/l/@vonage/applications?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Applications SDK for Node.js for use with
[Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage
account. Sign up [for free at vonage.com][signup].

We recommend using this package as part of the overall
[`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk).

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Usage](#using-the-vonage-applications-sdk)
* [Promises](#promises)
* [Testing](#testing)

## Installation

We recommend using this SDK as part of the overall [
`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please
see the main package for installation.

You can also use this SDK standalone if you only need access to just the
Applications API.

### With NPM

```bash
npm install @vonage/applications
```

### With Yarn

```bash
yarn add @vonage/applications
```

## Using the Vonage Applications SDK

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it
as the `applications` property off of the client that you instantiate.

```js
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
  }, options);

const balance = await vonage.applications.listApplications();
```

### Standalone

The SDK can be used standalone from the main
[Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if
you only need to use the Applications API. All you need to do is
`require('@vonage/applications')`, and use the returned object to create your
own client.

```js
const { Auth } = require('@vonage/auth');
const { Applications } = require('@vonage/applications');

const credentials = new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
});
const options = { timeout: 1500 };

const applicationsClient = new Applications(credentials, options);
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/readme/packages/auth#options),
and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/readme/packages/server-client#options)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either
resolve these yourself, or use `await` to wait for a response.

```js
const applications = await applicationsClient.listApplications();

applicationsClient.listApplications()
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
