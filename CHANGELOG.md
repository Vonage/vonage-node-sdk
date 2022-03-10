# Changelog

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

## 2.10.11

- callback argument missing (#597)
- Repair signatures, fix up tests, remove legacy querystring

## 2.10.10

Updating version. No changes.

## 2.10.9

- Remove extraneous log output.

## 2.10.8

- Move querystring params in SMS to the JSON body.

## 2.10.7

- #429 Addressing typescript import bug

## 2.10.6

Updating main line branch tag. No changes.

## 2.10.5

### Fixed

- #432 - Fix new issue with host override.

## 2.10.4

### Fixed

- #400 - Fix issue with host override

## 2.10.3

### Added

- #400 - Added Yarn example in README.md
- #380 - Added Number typings
- #379 - Added Voice typings
- #376 - Added Media typings
- #373 - Added Number Insight typings

### Updated

- #389 - Discriminating unions support for different message responses
- #387 - Bump @babel/register from 7.11.5 to 7.12.0
- #385 - Bump @babel/core from 7.11.6 to 7.12.0
- #384 - Bump @babel/preset-env from 7.11.5 to 7.12.0
- #378 - Allow for Full URL Overrides in Constructor
- #375 - Updated uuid-dependency for performance improvement

### Fixed

## 2.10.2

### Updated

- #350 - Bump eslint-config-prettier from 6.11.0 to 6.12.0

### Fixed

- #370 - Fixed typos
- #369 - Fixed typos
- #358 - Fixed typos
- #357 - Fixed typos
- #355 - Fixed types module name
- #352 - Fixed typos

## 2.10.1

### Updated

- #347 - Correct license information

## 2.10.0

> This version serves as the change from the Nexmo namespace to the Vonage namespace. The module now resides on NPM as `@vonage/server-sdk`. Prior versions under the Nexmo namespace will remain in maintenance mode for the next 12 months and recieve bug and security fixes. All new functionality will only be added to the @vonage namespace.

### Updated

- #321 - Bump jsonwebtoken from 8.4.0 to 8.5.1
- #322 - Bump body-parser from 1.18.3 to 1.19.0
- #324 - Bump cross-env from 5.2.0 to 7.0.2
- #325 - **Migrated SDK module from `nexmo` to `@vonage/server-sdk`**
- #326 - Bump bluebird from 3.5.3 to 3.7.2
- #327 - Bump @babel/plugin-proposal-object-rest-spread from 7.10.4 to 7.11.0
- #328 - Bump @babel/register from 7.10.5 to 7.11.5
- #329 - Bump @babel/core from 7.11.5 to 7.11.6
- #330 - Bump @babel/preset-env from 7.10.4 to 7.11.5
- #333 - Bump nyc from 14.1.1 to 15.1.0
- #334 - Bump eslint-config-prettier from 6.2.0 to 6.11.0
- #336 - Bump @babel/cli from 7.10.5 to 7.11.6
- #339 - Bump dotenv from 2.0.0 to 8.2.0
- #340 - Bump babel-plugin-istanbul from 4.1.6 to 6.0.0
- #343 - Bump babel-plugin-add-module-exports from 1.0.2 to 1.0.4
- #344 - Bump request from 2.88.0 to 2.88.2

## 2.9.1

- FIXED: #317 - TypeError: Nexmo is not a constructor

## 2.9.0

- FIXED: #295 - Nexmo constructor changes of given options object
- ADDED: Optional `target_api_key` parameter for the `number.buy()` and `number.cancel()` methods.
- ADDED: Typings for Messages API
- UPDATED: Private Key strings now replaces `\n` with newlines for easier usage in environment variables.

## 2.8.0

- ADDED: Support for Verify PSD2 requests via `nexmo.verify.psd2()`.

## 2.7.0

- ADDED: Made `apiKey` and `apiSecret` optional when `applicationId` and `privateKey` are present in Nexmo constructor.

## 2.6.0

- ADDED: Change host via the config object, using `apiHost` & `restHost`

## 2.5.3

- FIXED: URI Encode Signed SMS Message

## 2.5.2

- ADDED: Pricing API support

## 2.5.1

- ADDED: typings for Verify API
- ADDED: Applications API V2 support

## 2.4.2

- Added message signing for for sending SMS
- Added `Nexmo.generateSignature` to verify signed messages

## 2.0.1

- FIXED: #116 - default setting of `retry-after` for 429 http status code responses

## 2.0.0

- FIXED: #110 - check the `statusCode` on the response
- FIXED: #114 - handle 429 HTTP status codes
- UPDATED: To allow errors to be programmatically useful the `error` callback objects has been updated to `{statusCode: STATUS_CODE, body: JSON_BODY, headers: HEADERS}`

## 1.2.0

- ADDED: Add File API to library. `nexmo.files.get` and `nexmo.files.save`.

## 1.1.2

- Fixed: Bug #104 - Fix JSON parsing error

## 1.1.1

- UPDATED: Changed User Agent format to match other libraries
- FIXED: Bug #88 - Undefined method when missing `method` declaration

## 1.1.0

- ADDED: `nexmo.generateJwt` to generate JWT based on instance credentials
- ADDED: `Nexmo.generateJwt` static function to generate JWT

## [1.0.0]

- ADDED: `applicationId` and `privateKey` properties to first constructor parameter to support JWT generation.
- ADDED: `options.logger` to constructor 2nd parameter to allow adding customer logger.
- ADDED: `options.appendToUserAgent` to constructor 2nd paramater to append custom string to `User-Agent` header sent to Nexmo.
- ADDED: nexmo.calls adding support to `create`, `get`, `update` and `delete` calls.
- ADDED: nexmo.applications adding support to `create`, `get`, `update` and `delete` calls.
- ADDED: Functionality is now namespaced:
  - `nexmo.message`
  - `nexmo.calls`
  - `nexmo.number`
  - `nexmo.verify`
  - `nexmo.numberInsight`
  - `nexmo.account`
  - `nexmo.voice` - legacy voice functionality
- CHANGED: `var Nexmo = require('nexmo');` returns a class definition which should be created using the `new` operator e.g. `var nexmo = new Nexmo(args...);`.
- REMOVED: `var nexmo = require('nexmo');` no longer exposes singleton functions offered by "easynexmo".

## Pre 1.0.0

Earlier versions of this library were published as "easynexmo". The "easynexmo" package is now deprecated.

[1.0.0]: https://github.com/Nexmo/nexmo-node/tree/v1.0.0
