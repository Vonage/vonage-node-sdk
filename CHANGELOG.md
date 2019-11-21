# Changelog

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).

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
