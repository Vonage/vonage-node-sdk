# Vonage Identity Insights SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=main) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/identity-insights-v2?label=%40vonage%2Fidentity-insightss&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Identity Insights SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Usage](#usage)
* [Promises](#promises)
* [Testing](#testing)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Identity Insights API.

### With NPM

```bash
npm install @vonage/identity-insights
```

### With Yarn

```bash
yarn add @vonage/identity-insights
```

## Usage

Unlike the other SDK's this package is not include in the [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk)

```js
import { Auth } from "@vonage/auth";
import { IdentityInsights } from "@vonage/identity-insights";

const credentials = new Auth({
  applicationId: "your-application-id",
  privateKey: "/path/to/your/private.key",
});

const options = {};

const clientInsights = new IdentityInsights(credentials, options);

const params = {
  phone_number: "14040000000",
  insights: {
    format: {},
    original_carrier: {},
    current_carrier: {},
  },
};

const resp = await clientInsights.getIdentityInsights(params);
```

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to wait for a response.

```js
const params = {
  phone_number: "14040000000",
  insights: {
    format: {},
    original_carrier: {},
    current_carrier: {},
  },
};

const resp = await clientInsights.getIdentityInsights(params);
```

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
