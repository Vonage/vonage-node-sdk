# Vonage Server SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/server-sdk?label=%40vonage%2Fserver-sdk&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Node.JS Server SDK for [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Constructor](#constructor)
* [Promises](#promises)
* [Testing](#testing)
* [Examples](#examples)
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

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md#options), and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either resolve these yourself, or use `await` to wait for a response.

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

* [Accounts][accounts]
* [Applications][applications]
* [Audit](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/audit/README.md)
* [Auth][auth]
* [JWT][jwt]
* [Messages](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/messages/README.md)
* [Number Insight V2](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/number-insight-v2/README.md)
* [Number Insights](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/number-insights/README.md)
* [Numbers](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/numbers/README.md)
* [Pricing](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/pricing/README.md)
* [Server Client][server-client]
* [Server SDK](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-sdk/README.md)
* [SMS][sms]
* [Sub Accounts](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/subaccounts/README.md)
* [Verify](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/verify/README.md)
* [Verify V2](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/verify2/README.md)
* [Vetch](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/vetch/README.md)
* [Video](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/video/README.md)
* [Voice][voice]

## Supported APIs

The following is a list of Vonage APIs and whether the Node Server SDK provides support for them:

| API                   |  API Release Status  | Supported? |
|-----------------------|:--------------------:|:----------:|
| Account API           | General Availability |     ✅      |
| Alerts API            | General Availability |     ✅      |
| Application API       | General Availability |     ✅      |
| Audit API             |         Beta         |     ✅      |
| Conversation API      | General Availability |     ✅      |
| Dispatch API          |         Beta         |     ❌      |
| External Accounts API |         Beta         |     ❌      |
| Media API             |         Beta         |     ✅      |
| Messages API          | General Availability |     ✅      |
| Meetings API          |      Deprecated      |     ✅      |
| Number Insight V2 API |         Beta         |     ✅      |
| Number Insights API   | General Availability |     ✅      |
| Number Management API | General Availability |     ✅      |
| Pricing API           | General Availability |     ✅      |
| Proactive Connect API |      Deprecated      |     ✅      |
| Redact API            |  Developer Preview   |     ✅      |
| Reports API           |         Beta         |     ✅      |
| SMS API               | General Availability |     ✅      |
| Sub Accounts          |         Beta         |     ✅      |
| Users                 | General Availability |     ✅      |
| Verify API            | General Availability |     ✅      |
| Verify v2 API         | General Availability |     ✅      |
| Video API             | General Availability |     ✅      |
| Voice API             | General Availability |     ✅      |

### Network APIS

The following Network APIs are supported however they are opt-in.

| API                   | Supported? |
|-----------------------|:----------:|
| Number Verification   |     ✅     |
| SIM Swap              |     ✅     |

#### Network API references

* [Number Verification](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/network-number-verification/README.md)
* [SIM Swap](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/network-sim-swap/README.md)

### V2 Migrations

While most of the V2 functions have been ported into their own package, some of the functions have not been ported or were removed. Below is a list of those changes:

| V2 Function                 |  Status   |                          Note                          |
|-----------------------------|:---------:|:------------------------------------------------------:|
| `vonage.conversion`         | _REMOVED_ |                                                        |
| `vonage.conversation`       |   Moved   |        Moved To [Conversations][conversations]         |
| `vonage.app`                |   Moved   |         Moved to [Applications][applications]          |
| `vonage.files`              |   Moved   |         Move to [ServerClient][server-client]          |
| `vonage.message`            |   Moved   |                  Moved to [SMS][sms]                   |
| `vonage.generateJwt`        |   Moved   |                Was moved to [JWT][jwt]                 |
| `vonage.generateSignature`  |   Moved   |       Was moved to [SMS][sms] and [Voice][voice]       |
| `vonage.calls`              |   Moved   |              Was moved to [Voice][voice]               |
| `vonage.credentials`        |  Updated  | Options can be found in [Server Client][server-client] |
| `vonage.options`            |  Updated  | Options can be found in [Server Client][server-client] |
| `vonage.options.httpClient` | _Removed_ |                                                        |
| `vonage.options.userAgent`  |   Moved   | Options can be found in [Server Client][server-client] |

For more information, check out each packages migration guide.

[accounts]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/accounts/README.md
[applications]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/applications/README.md
[auth]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md
[sms]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/sms/README.md
[server-client]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md
[jwt]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/jwt/README.md
[conversations]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/conversations/README.md
[voice]: https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/voice/README.md
[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: LICENSE.txt
