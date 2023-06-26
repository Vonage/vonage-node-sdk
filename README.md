# Vonage Server SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/server-sdk?label=%40vonage%2Fserver-sdk&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Node.JS SDK for [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

## References

This is a [monorepo](https://en.wikipedia.org/wiki/Monorepo). You can find more information for each package below:

* [Accounts](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/accounts/README.md)
* [Applications](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/applications/README.md)
* [Audit](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/audit/README.md)
* [Auth](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md)
* [JWT](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/jwt/README.md)
* [Messages](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/messages/README.md)
* [Number Insights](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/number-insights/README.md)
* [Numbers](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/numbers/README.md)
* [Pricing](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/pricing/README.md)
* [Redact](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/redact/README.md)
* [Server Client](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md)
* [Server SDK](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-sdk/README.md)
* [SMS](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/sms/README.md)
* [Verify](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/verify/README.md)
* [Verify V2](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/verify2/README.md)
* [Vetch](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/vetch/README.md)
* [Video](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/video/README.md)
* [Voice](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/voice/README.md)

## Supported APIs

Only API's marked as General Availability will be available through the [Server SDK](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-sdk/README.md) package. All other supported packages will have to be installed and configured outside that package.

The following is a list of Vonage APIs and whether the Node Server SDK provides support for them:

| API                   |  API Release Status  | Supported? |
|-----------------------|:--------------------:|:----------:|
| Account API           | General Availability |     ✅     |
| Alerts API            | General Availability |     ✅     |
| Application API       | General Availability |     ✅     |
| Audit API             |         Beta         |     ✅     |
| Conversation API      |         Beta         |     ❌     |
| Dispatch API          |         Beta         |     ❌     |
| External Accounts API |         Beta         |     ❌     |
| Media API             |         Beta         |     ❌     |
| Messages API          |         Beta         |     ✅     |
| Number Insight API    | General Availability |     ✅     |
| Number Management API | General Availability |     ✅     |
| Pricing API           | General Availability |     ✅     |
| Redact API            |  Developer Preview   |     ✅     |
| Reports API           |         Beta         |     ❌     |
| SMS API               | General Availability |     ✅     |
| Sub Accounts          |         Beta         |     ✅     |
| Verify API            | General Availability |     ✅     |
| Verify v2 API         | General Availability |     ✅     |
| Voice API             | General Availability |     ✅     |

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: LICENSE.txt
