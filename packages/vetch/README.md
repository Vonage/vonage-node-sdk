# Vonage Vetch SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/vetch?label=%40vonage%2Fvetch&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage `Vetch`er SDK for Node.js used to wrap a request using `node-fetch` to call [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
    * [Options](#options)
* [Testing](#testing)

## Installation

### With NPM

```bash
npm install @vonage/vetch
```

### With Yarn

```bash
yarn add @vonage/vetch
```

## Using the Vonage Vetch SDK

Vetch will return a [`VetchResponse`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/vetch/lib/types.ts#L28)

```js
const { request } = require('@vonage/vetch');

const response = await request({
  url: 'https://rest.nexmo.com/account/numbers'
})

console.log(response.data);
// Will output the json data from the API response
```

### Options

`options` are a superset from the request package. See [`VetchOptions`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/vetch/lib/interfaces/vetchOptions.ts) for more detail

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
