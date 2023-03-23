# Vonage Server SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/3.x?logo=github&style=flat-square&label=Workflow%20Build)
[![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk)
![Latest Release](https://img.shields.io/npm/v/@vonage/server-sdk)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/npm/l/@vonage/server-sdk?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Node.JS Server SDK for [Vonage APIs](https://www.vonage.com/). To
use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to
[developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Constructor](#constructor)
* [Callbacks](#callbacks)
* [Testing](#testing)
* [Examples](#examples)
* [Supported APIs](#supported-apis)
* [References](#references)

## Installation

### With NPM

```bash
npm install @vonage/server-sdk
```

### With Yarn

```bash
yarn add @vonage/server-sdk
```

## Constructor

```js
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage(credentials, options);
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/packages/auth#options),
and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/packages/server-client#options)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either
resolve these yourself, or use `await` to wait for a response.

```js
const resp = await vonage.sms.send({
    to: '15552220000',
    from: '15559992222',
    text: 'This is a test',
});
```

## Testing

Run:

```bash
npm run test
```

Or to continually watch and run tests as you change the code:

```bash
npm run test-watch
```

## Examples

See the [Vonage Node Quickstarts repo](https://github.com/Vonage/vonage-node-code-snippets).

## References

You can find more information for each product below:

* [Accounts](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/accounts/README.md)
* [Applications](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/applications/README.md)
* [Audit](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/audit/README.md)
* [Auth](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md)
* [JWT](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/jwt/README.md)
* [Messages](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/messages/README.md)
* [Number Insights](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/number-insights/README.md)
* [Numbers](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/numbers/README.md)
* [Pricing](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/pricing/README.md)
* [Server Client](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md)
* [Server SDK](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-sdk/README.md)
* [SMS](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/sms/README.md)
* [Verify](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/verify/README.md)
* [Vetch](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/vetch/README.md)
* [Video](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/video/README.md)
* [Voice](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/voice/README.md)

## Supported APIs

The following is a list of Vonage APIs and whether the Node Server SDK provides support for them:

| API                   | API Release Status   | Supported? |
|-----------------------|----------------------|------------|
| Account API           | General Availability | ✅         |
| Alerts API            | General Availability | ✅         |
| Application API       | General Availability | ✅         |
| Audit API             | Beta                 | ✅         |
| Conversation API      | Beta                 | ❌         |
| Dispatch API          | Beta                 | ❌         |
| External Accounts API | Beta                 | ❌         |
| Media API             | Beta                 | ❌         |
| Messages API          | Beta                 | ❌         |
| Number Insight API    | General Availability | ✅         |
| Number Management API | General Availability | ✅         |
| Pricing API           | General Availability | ✅         |
| Redact API            | Developer Preview    | ✅         |
| Reports API           | Beta                 | ❌         |
| SMS API               | General Availability | ✅         |
| Verify API            | General Availability | ✅         |
| Verify v2 API         | Beta                 | ✅         |
| Voice API             | General Availability | ✅         |


[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: LICENSE.txt
