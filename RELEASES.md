---
version: '3.1.1'
release: '2 Mar 2023'
id: vonage-node-sdk
title: 'vonage-node-sdk'
icon: 'node-color'
pkgName: 'Node SDK'
---

# Changelog

All notable changes to this project will be documented in this file.


## 3.1.1

### Features

* Ported Audit and Redact packages from Node Server SDK v2.
* Introduced async auth handlers.
* Added simple search for Numbers.
* Added Verify v2.
* Added Video experience composer, captions, audio connector, ACL for JWT generator, SIP and DTMF playing.

### Bug Fixes

- Reverts back to ES6 and CommonJS for better Node compatibility.
- Improved response types for Verify v1.
- Fixed wrong case for Messages API parameters.
- Corrected our return types when sending SMS.
- Allowed no filter when getting owned numbers, added required filter when searching available numbers.
- Allowed features to be searched in available numbers.

Full Changelog: [https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.11...@vonage/server-sdk@3.1.1](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.11...@vonage/server-sdk@3.1.1)


## 3.0.11

### Features

- Added auth docs.
- Fixed readme for all products available.

Full Changelog: [https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.1...@vonage/server-sdk@3.0.11](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.1...@vonage/server-sdk@3.0.11)


## 3.0.1

### Features

- Added verify and voice.

### Bug Fixes

- Fixed a few typos in Number Insights.

[https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.0...@vonage/server-sdk@3.0.10](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.1...@vonage/server-sdk@3.0.0)


## 3.0.0

>This version is a complete rewrite of version 2. Written in Typescript and broken out into smaller packages to reduce package size. Callbacks have been removed, and most functions will take in param objects instead of using positional params. SMS and Messages have been broken out to mirror the API.

You can find migration guides for each package here:

- [Accounts](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/accounts/v2_TO_v3_MIGRATION_GUIDE.md)
- [Applications](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/applications/v2_TO_v3_MIGRATION_GUIDE.md)
- [Messages](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/messages/v2_TO_v3_MIGRATION_GUIDE.md)
- [Number Insights](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/number-insights/v2_TO_v3_MIGRATION_GUIDE.md)
- [Numbers](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/numbers/v2_TO_v3_MIGRATION_GUIDE.md)
- [Pricing](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/pricing/v2_TO_v3_MIGRATION_GUIDE.md)
- [SMS](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/sms/v2_TO_v3_MIGRATION_GUIDE.md)
- [Verify](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/verify/v2_TO_v3_MIGRATION_GUIDE.md)
- [Voice](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/voice/v2_TO_v3_MIGRATION_GUIDE.md)


## 2.11.2

 -   Corrected the issue where downloading a voice recording transcript would throw an exception.


## 2.11.0

-   Added support for the Messages API v1.0


## 2.10.1

### Updated

* Corrected license information.


## 2.10.0

>This version serves as the change from the Nexmo namespace to the Vonage namespace. The module now resides on NPM as `@vonage/server-sdk`. Prior versions under the Nexmo namespace will remain in maintenance mode for the next 12 months and receive bug and security fixes. All new functionality will only be added to the @vonage namespace.

### Updated

- Migrated SDK module from `nexmo` to `@vonage/server-sdk`.


## 2.9.1

* Fixed: TypeError: Nexmo is not a constructor.


## 2.9.0

* FIXED: #295 - Nexmo constructor changes of the given options object
* ADDED: Optional `target_api_key` parameter for the `number.buy()` and `number.cancel()` methods.
* ADDED: Typings for Messages API
* UPDATED: Private Key strings now replace `\n` with newlines for easier usage in environment variables.

## 2.8.0

* ADDED: Support for Verify PSD2 requests via `nexmo.verify.psd2()`.

## 2.7.0

* ADDED: Made `apiKey` and `apiSecret` optional when `applicationId` and `privateKey` are present in the Nexmo constructor.

## 2.6.0

* ADDED: Change host via the config object, using `apiHost` & `restHost`

## 2.5.3

* FIXED: URI Encode Signed SMS Message

## 2.5.2

* ADDED: Pricing API support

## 2.5.1

* ADDED: typings for Verify API
* ADDED: Applications API V2 support

## 2.4.2

* Added message signing for sending SMS
* Added `Nexmo.generateSignature` to verify signed messages

## 2.0.1

* FIXED: #116 - default setting of `retry-after` for 429 HTTP status code responses

## 2.0.0

* FIXED: #110 - check the `statusCode` on the response
* FIXED: #114 - handle 429 HTTP status codes
* UPDATED: To allow errors to be programmatically useful the `error` callback objects has been updated to `{statusCode: STATUS_CODE, body: JSON_BODY, headers: HEADERS}`

## 1.2.0

* ADDED: Add File API to the library. `nexmo.files.get` and `nexmo.files.save`.

## 1.1.2

* Fixed: Bug #104 - Fix JSON parsing error

## 1.1.1

* UPDATED: Changed User Agent format to match other libraries
* FIXED: Bug #88 - Undefined method when missing `method` declaration

## 1.1.0

* ADDED: `nexmo.generateJwt` to generate JWT based on instance credentials
* ADDED: `Nexmo.generateJwt` static function to generate JWT

## [1.0.0]

* ADDED: `applicationId` and `privateKey` properties to the first constructor parameter to support JWT generation.
* ADDED: `options.logger` to constructor 2nd parameter to allow adding customer logger.
* ADDED: `options.appendToUserAgent` to constructor 2nd parameter to append a custom string to `User-Agent` header sent to Nexmo.
* ADDED: nexmo.calls adding support to `create`, `get`, `update` and `delete` calls.
* ADDED: nexmo.applications adding support to `create`, `get`, `update` and `delete` calls.
* ADDED: Functionality is now namespaced:
    * `nexmo.message`
    * `nexmo.calls`
    * `nexmo.number`
    * `nexmo.verify`
    * `nexmo.numberInsight`
    * `nexmo.account`
    * `nexmo.voice` - legacy voice functionality
* CHANGED: `var Nexmo = require('nexmo');` returns a class definition which should be created using the `new` operator e.g. `var nexmo = new Nexmo(args...);`.
* REMOVED: `var nexmo = require('nexmo');` no longer exposes singleton functions offered by "easynexmo".

## Pre 1.0.0

Earlier versions of this library were published as "easynexmo". The "easynexmo" package is now deprecated.

[1.0.0]: https://github.com/Nexmo/nexmo-node/tree/v1.0.0
