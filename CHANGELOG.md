# changelog

all notable changes to this project will be documented in this file. The main package `@vonage/server-sdk` adheres to [Semantic Versioning](http://semver.org/) which will be the main version for this project. All other packages will be verisoned independantly.

## What's Changed

## 3.0.10 - 3.0.11

* #753 Adding husky with testing and lint fix
* #771 Updating sdk readme
* #770 Adding jwt readme
* #768 Updating voice readme
* #767 Updating video readme
* #757 Adding auth docs
* #759 Updating server-client readme
* #761 Updating applications readme
* #763 Adding numbers readme
* #764 Adding pricing readme
* #765 Adding sms readme
* #766 Updating verify readme
* #772 Updating main readme
* #758 Adding vetch readme
* #762 Updating number insights readme
* #760 Updating account readme

## 3.0.1 - 3.0.10

* #666 Fixed all the tests
* #687 Update README.md
* #720 Added verify and voice, and fixed a few typos in Number Insights
* #722 Change the import from node-specific to just request `http`/`https`
* #730 Fixed issue with WA Template interface from older, incorrect spec
* #731 Allow features to be searched in available numbers
* #732 Exported additional NCCO classes and interfaces that weren't before
* #734 Change Numbers API to make URL Form Encoded requests
* #738 Set the proper content type when we send put/patch/post
* #741 types using node:http for import

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

 -   Corrected issue where downloading a voice recording transcript would throw an exception.

## 2.11.0

-   Added support for the Messages API v1.0

## 2.10.2

### Updated

* #350 - Bump eslint-config-prettier from 6.11.0 to 6.12.0

### Fixed

* #370 - Fixed typos
* #369 - Fixed typos
* #358 - Fixed typos
* #357 - Fixed typos
* #355 - Fixed types module name
* #352 - Fixed typos

## 2.10.1

### Updated

* #347 - Correct license information

## 2.10.0

>This version serves as the change from the Nexmo namespace to the Vonage namespace. The module now resides on NPM as `@vonage/server-sdk`. Prior versions under the Nexmo namespace will remain in maintenance mode for the next 12 months and receive bug and security fixes. All new functionality will only be added to the @vonage namespace.

### Updated

* #321 - Bump jsonwebtoken from 8.4.0 to 8.5.1
* #322 - Bump body-parser from 1.18.3 to 1.19.0
* #324 - Bump cross-env from 5.2.0 to 7.0.2
* #325 - **Migrated SDK module from `nexmo` to `@vonage/server-sdk`**
* #326 - Bump bluebird from 3.5.3 to 3.7.2
* #327 - Bump @babel/plugin-proposal-object-rest-spread from 7.10.4 to 7.11.0
* #328 - Bump @babel/register from 7.10.5 to 7.11.5
* #329 - Bump @babel/core from 7.11.5 to 7.11.6
* #330 - Bump @babel/preset-env from 7.10.4 to 7.11.5
* #333 - Bump nyc from 14.1.1 to 15.1.0
* #334 - Bump eslint-config-prettier from 6.2.0 to 6.11.0
* #336 - Bump @babel/cli from 7.10.5 to 7.11.6
* #339 - Bump dotenv from 2.0.0 to 8.2.0
* #340 - Bump babel-plugin-istanbul from 4.1.6 to 6.0.0
* #343 - Bump babel-plugin-add-module-exports from 1.0.2 to 1.0.4
* #344 - Bump request from 2.88.0 to 2.88.2

## 2.9.1

* FIXED: #317 - TypeError: Nexmo is not a constructor

## 2.9.0

* FIXED: #295 - Nexmo constructor changes of given options object
* ADDED: Optional `target_api_key` parameter for the `number.buy()` and `number.cancel()` methods.
* ADDED: Typings for Messages API
* UPDATED: Private Key strings now replaces `\n` with newlines for easier usage in environment variables.

## 2.8.0

* ADDED: Support for Verify PSD2 requests via `nexmo.verify.psd2()`.

## 2.7.0

* ADDED: Made `apiKey` and `apiSecret` optional when `applicationId` and `privateKey` are present in Nexmo constructor.

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

* Added message signing for for sending SMS
* Added `Nexmo.generateSignature` to verify signed messages

## 2.0.1

* FIXED: #116 - default setting of `retry-after` for 429 http status code responses

## 2.0.0

* FIXED: #110 - check the `statusCode` on the response
* FIXED: #114 - handle 429 HTTP status codes
* UPDATED: To allow errors to be programmatically useful the `error` callback objects has been updated to `{statusCode: STATUS_CODE, body: JSON_BODY, headers: HEADERS}`

## 1.2.0

* ADDED: Add File API to library. `nexmo.files.get` and `nexmo.files.save`.

## 1.1.2

* Fixed: Bug #104 - Fix JSON parsing error

## 1.1.1

* UPDATED: Changed User Agent format to match other libraries
* FIXED: Bug #88 - Undefined method when missing `method` declaration

## 1.1.0

* ADDED: `nexmo.generateJwt` to generate JWT based on instance credentials
* ADDED: `Nexmo.generateJwt` static function to generate JWT

## [1.0.0]

* ADDED: `applicationId` and `privateKey` properties to first constructor parameter to support JWT generation.
* ADDED: `options.logger` to constructor 2nd parameter to allow adding customer logger.
* ADDED: `options.appendToUserAgent` to constructor 2nd paramater to append custom string to `User-Agent` header sent to Nexmo.
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
