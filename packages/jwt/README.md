# Vonage JWT SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/3.x?logo=github&style=flat-square&label=Workflow%20Build)
[![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk)
![Latest Release](https://img.shields.io/npm/v/@vonage/jwt)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/npm/l/@vonage/jwt?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage JWT SDK for Node.js. This package helps create JWT tokens to
use with [Vonage APIs](https://www.vonage.com/).

For full API documentation refer to
[developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#using-the-vonage-jwt-sdk)
* [Testing](#testing)

## Installation

### With NPM

```bash
npm install @vonage/jwt
```

### With Yarn

```bash
yarn add @vonage/jwt
```

## Using the Vonage JWT SDK

All you need to do is `require('@vonage/jwt')`, and use the returned object to
create your own JWT token.

```js
const { tokenGenerate } = require('@vonage/jwt');

const jwtToken = tokenGenerate(applicationId, privateKey, generatorOptions);
```

### Parameters

* `applicationId: string` - The Vonage Application Id.
* `privateKey: string | Buffer` - The private key.
* `generatorOptions: GeneratorOptions` - An object that can be used to set
  options for the token. See the
  [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) for all options
  and claims. You can also pass in a Vonage
  [`acl`](https://developer.vonage.com/conversation/guides/jwt-acl)

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
