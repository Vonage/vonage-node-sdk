# Changelog

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](http://semver.org/).


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
