---
icon: node-color
id: vonage-node-sdk
pkgName: Node SDK
release: '2024-05-22'
title: Vonage Node SDK
version: 4.0.25
---

# Changelog

All notable changes to this project will be documented in this file.

---

## Vonage Node SDK v4.0.25 (2024-05-22)

test

test

---

## Vonage Node SDK v3.13.0 (2024-02-12)

This version delivers fixes and a new feature, including corrections for JWT algorithm parameters, session creation in the video API, authentication in Number Insights V2, updates to SMS and silent authentication in Verify2, and the introduction of the conversations package.

- Outdated/wrong algorithm argument in JWT handling.
- Video API session creation to ensure JSON return type.
- Incorrect authentication method in Number Insights V2.
- (Typescript only) Locale can now be any string along with a value from the enum

- Conversations package for enhanced communication features.

- Added `from`, `entityId`, and `contentId` to the SMS workflow in Verify V2.
- Verify V2 will return back the `check_url` if present.

[@Ymirke](https://github.com/Ymirke)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.12.2...@vonage/server-sdk@3.13.0)

---

## Vonage Node SDK v3.12.2 (2024-01-23)

The SDK update introduces improvements in response header charset decoding and NCCO encoding in voice functionality, enhancing overall reliability and performance.

### Added

### Fixed

- Decoding issues when charset is in the content type response header (https://github.com/Vonage/vonage-node-sdk/pull/904)
- NCCO encoding in voice functionality (https://github.com/Vonage/vonage-node-sdk/pull/906)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.12.0...@vonage/server-sdk@3.12.2)

---

## Vonage Node SDK v3.12.0 (2024-01-11)

This release addressed some issues with improper types, cleaning up `@vonage/vetch` package and adding a huge amount of documentation and examples to the code.

### Added

- Documentation blocks to all user facing API

### Fixed

- Updated all types to no longer use `any` when passing in parameters to the `send*Request` function calls

### Deprecated

- Having `@vonage/vetch` make HTTP calls is deprecated. Going forward only `@vonage/server-client` will handle making HTTP requests

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.11.0...@vonage/server-sdk@3.12.0)

---

## Vonage Node SDK v3.11.0 (2023-12-11)

Video has now been released and is no longer in beta. This release adds video to the `@vonage/server-sdk` for ease of use.

### Added

- Video has been released is now part of the core SDK

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.10.2...@vonage/server-sdk@3.11.0)

---

## Vonage Node SDK v3.10.2 (2023-10-19)

This release includes a fix for the wrong status code in SMS.

### Fixed

- Corrected the wrong status code for "partner account barred" in SMS

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.10.0...@vonage/server-sdk@3.10.2)

---

## Vonage Node SDK v3.10.1 (2023-11-12)

This release should be ignored as it is just adds some templates to GitHub

---

## Vonage Node SDK v3.10.0 (2023-10-13)

The node SDK version 3.10.0 introduces support for number insight v2 and the media API, refactors the meetings API path to include the version, and fixes a typo pricing and meetings.

### Added

- Support for number insight v2
- Support for the media API

### Fixed

- Typo in `explicit_approval` in join type for the pricing package
- Removed `mock-fs` as it's broken in GitHub actions
- Fixed a typo in the `ServiceType` enum for the meetings package

### Changed

- Version now present in the meetings API path

### Changed

- @ajumal-ashraf-dev made their first contribution ([#867](https://github.com/Vonage/vonage-node-sdk/pull/867)).
- @muhammadzadeh made their first contribution ([#870](https://github.com/Vonage/vonage-node-sdk/pull/870)).

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.3...@vonage/server-sdk@3.10.0)

---

## Vonage Node SDK v3.9.3 (2023-09-11)

This release addresses an issue where version 3.9.2 was missing published code.

### Fixed

- Addressed the issue where version 3.9.2 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.2...@vonage/server-sdk@3.9.3)

---

## Vonage Node SDK v3.9.2 (2023-08-21)

This release further addresses missing code in the published version.

### Fixed

- Continued correction of version numbers in child packages.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.1...@vonage/server-sdk@3.9.2)

---

## Vonage Node SDK v3.9.1 (2023-08-21)

This release addresses missing code not published.

### Fixed

- Corrected version numbers in child packages.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.0...@vonage/server-sdk@3.9.1)

---

## Vonage Node SDK v3.9.0 (2023-08-21)

This release introduces incoming signature verification for SMS and the JWT package, and includes file download functionality.

### Added

- Incoming signature verification for SMS.
- `verifySignature` to the JWT package.
- File download functionality.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.8.1...@vonage/server-sdk@3.9.0)

---

## Vonage Node SDK v3.8.1 (2023-08-15)

This release addresses a publishing issue related to the users package.

### Fixed

- Fixed publishing for the users package.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.8.0...@vonage/server-sdk@3.8.1)

---

## Vonage Node SDK v3.8.0 (2023-08-14)

This release fixes the timeout parameter, WebSocket header type, and NCCO actions, restores append to user agent, and introduces the users package.

### Added

- Introduces the users package.

### Fixed

- Fixed the timeout parameter behavior.
- Corrected the WebSocket header type.
- Ensured NCCO actions set values for NCCO type to avoid JavaScript problems.
- Restored append to the user agent.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.7.2...@vonage/server-sdk@3.8.0)

---

## Vonage Node SDK v3.7.2 (2023-08-07)

This release adds more information about migration in the documentation.

### Added

- Added more information about migration from V2 to V3.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.7.1...@vonage/server-sdk@3.7.2)

---

## Vonage Node SDK v3.7.1 (2023-08-07)

This release addresses a casing issue in number parameters.

### Fixed

- Fixed casing in number API parameters.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.7.0...@vonage/server-sdk@3.7.1)

---

## Vonage Node SDK v3.7.0 (2023-08-02)

This release includes dependency updates and fixes related to word-wrap, package audit, and JWT claims.

### Added

- Bumped word-wrap dependency from 1.2.3 to 1.2.4.

### Fixed

- Updated packages after audit.
- Fixed ttl in claims for JWT.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.6.0...@vonage/server-sdk@3.7.0)

---

## Vonage Node SDK v3.6.0 (2023-06-26)

This release introduces Subaccounts Package, Advanced Machine Detection to Voice API, and the Meetings Package.

### Added

- Subaccounts Package.
- Advanced Machine Detection to Voice API.
- Meetings Package.

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.5.0...@vonage/server-sdk@3.6.0)

---

## Vonage Node SDK v3.5.1 (2023-05-24)

This release addresses specific issues with Voice and Verify V2.

### Fixed

- Fixed an issue with blank values on the Dial API.
- Corrected the incorrect main entry in the package JSON for Verify v2.

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.5.0...@vonage/server-sdk@3.5.1)

---

## Vonage Node SDK v3.5.0 (2023-05-23)

Added Verify v2 improvements, fixed issues, and simplified functions. Verify v2 is now generally available.

### Added

- Added a cancel method for Verify v2.
- Introduced missing fraud check parameter for Verify v2.

### Fixed

- Fixed an issue in Verify v2 where code was not returning a status.

### Changed

- Simplified the `addAuthenticationToRequest` function.

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.4.0...@vonage/server-sdk@3.5.0)

---

## Vonage Node SDK v3.4.0 (2023-05-10)

This release includes various features and improvements, such as redact module, verify v2 support, auth signature timestamp, experience composer, captions for video, proactive connect, custom exceptions, and documentation updates.

### Added

- Redact module.
- Verify v2 support.
- Auth signature timestamp.
- Experience composer and captions for video.
- Bring your own passcode.
- Proactive connect.
- Custom exceptions for missing required parameters.

### Fixed

- Import issue with verification in the `verify` module.
- Kebab-case API parameter formatting.
- Documentation fixes and badge updates.

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.3.0...@vonage/server-sdk@3.4.0)

---

## Vonage Node SDK v3.3.0 (2023-04-12)

This release adds new features such as Messages update, Verify v2 support, Auth signature timestamp, Experience composer, captions for video, and Video client ACL while maintaining non-breaking changes for Messages and including code coverage improvements.

### Added

- Messages update.
- Verify v2 support.
- Auth signature timestamp.
- Experience composer and captions for video.
- Video client ACL.

### Changed

- Messages updated to be non-breaking.

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.2.0...@vonage/server-sdk@3.3.0)

---

## Vonage Node SDK v3.2.0 (2023-03-10)

This release fixes an import issue, added a new module, and improved API parameter formatting

### Added

- Introduction of a new `redact` module.

### Fixed

- Import issue with verification in the `verify` module.

### Changed

- Improved API parameter formatting to kebab-case.

**Full Changelog**: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.1.1...@vonage/server-sdk@3.2.0)

---

## Vonage Node SDK v3.1.1 (2023-03-02)

In this release, new features were introduced, including porting Audit and Redact packages from Node Server SDK v2, async auth handlers, simple search for Numbers, Verify v2, and enhancements to the Video experience composer, captions, audio connector, ACL for JWT generator, SIP, and DTMF playing. Additionally, several bug fixes and improvements for Node compatibility and API parameters were implemented.

### Added

- Ported Audit and Redact packages from Node Server SDK v2.
- Introduced async auth handlers.
- Added simple search for Numbers.
- Added Verify v2.
- Added Video experience composer, captions, audio connector, ACL for JWT generator, SIP, and DTMF playing.

### Fixed

- Reverted back to ES6 and CommonJS for better Node compatibility.
- Improved response types for Verify v1.
- Fixed wrong case for Messages API parameters.
- Corrected return types when sending SMS.
- Allowed no filter when getting owned numbers, added required filter when searching available numbers.
- Allowed features to be searched in available numbers.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.11...@vonage/server-sdk@3.1.1)

---

## Vonage Node SDK v3.1.0 (2023-03-02)

This release includes updates to the build process, making auth handlers async, and other enhancements.

### Added

- Made auth handlers async for auth, messages, and server-client ([#801](https://github.com/Vonage/vonage-node-sdk/pull/801)).

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.20...@vonage/server-sdk@3.1.0)

---

## Vonage Node SDK v3.0.20 (2023-02-27)

This release addresses an issue where version 3.0.19 was missing published code.

### Fixed

- Addressed the issue where version 3.0.19 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.19...@vonage/server-sdk@3.0.20)

---

## Vonage Node SDK v3.0.19 (2023-02-27)

This release introduced an audit package, audio connector for video, and debug logging.

### Added

- Audit package.
- Audio connector for video.
- Debug logging.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.18...@vonage/server-sdk@3.0.19)

---

## Vonage Node SDK v3.0.18 (2023-01-12)

This release addresses an issue where version 3.0.17 was missing published code.

### Fixed

- Addressed the issue where version 3.0.17 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.16...@vonage/server-sdk@3.0.18)

---

## Vonage Node SDK v3.0.17 (2023-01-12)

This release addresses an issue where version 3.0.14 was missing published code.

### Fixed

- Addressed the issue where version 3.0.14 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.16...@vonage/server-sdk@3.0.17)

---

## Vonage Node SDK v3.0.16 (2023-01-12)

This release addresses an issue where version 3.0.16 needed Typescript to be recompiled

### Fixed

- Removed importHelpers compiler options

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.15...@vonage/server-sdk@3.0.16)

---

## Vonage Node SDK v3.0.15 (2023-01-10)

This release addresses an issue where version 3.0.14 was missing published code.

### Fixed

- Addressed the issue where version 3.0.14 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.14...@vonage/server-sdk@3.0.15)

---

## Vonage Node SDK v3.0.14 (2023-01-05)

This release includes the removal of tslib, the introduction of numbers simple search, and a fix for missing remapping of params in the verify module.

### Added

- Introduced numbers simple search.

### Fixed

- Removed tslib.
- Added missing remapping for params in the verify module.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.12...@vonage/server-sdk@3.0.14)

---

## Vonage Node SDK v3.0.13 (2023-01-05)

This release addresses an issue where version 3.0.12 was missing published code.

### Fixed

- Addressed the issue where version 3.0.12 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.13...@vonage/server-sdk@3.0.12)

---

## Vonage Node SDK v3.0.12 (2022-12-16)

### Fixed

- Added SIP and DTMF playing to video module.
- Reverted back to ES6 and CommonJS for better Node compatibility.

### Changed

- Updated changelog.
- Added Prettier for better formatting.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.11...@vonage/server-sdk@3.0.12)

---

## Vonage Node SDK v3.0.11 (2022-12-14)

This release includes various updates related to build configurations and documentation.

### Changed

- Cleanup tsconfig.
- Cleanup eslint config.
- Added husky with testing and lint fix.
- Updated multiple README files.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.10...@vonage/server-sdk@3.0.11)

---

## Vonage Node SDK v3.0.10 (2022-11-30)

This release includes fixes for Verify, SMS, and Numbers.

### Fixed

- Added "brand" to separate Verify from Sender ID.
- Corrected return types when sending SMS.
- Improved filtering for owned and available numbers.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.9...@vonage/server-sdk@3.0.10)

---

## Vonage Node SDK v3.0.9 (2022-11-23)

This release includes a fix for types using node:http for import.

### Fixed

- Fixed types using node:http for import.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.7...@vonage/server-sdk@3.0.9)

---

## Vonage Node SDK v3.0.8 (2022-11-22)

This release addresses an issue where version 3.0.7 was missing published code.

### Fixed

- Addressed the issue where version 3.0.7 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.7...@vonage/server-sdk@3.0.8)

---

## Vonage Node SDK v3.0.7 (2022-11-22)

This release includes various fixes for numbers, messages and numbers API

### Fixed

- Fixed all the tests.
- Updated README.md.
- Allow features to be searched in available numbers.
- Exported additional NCCO classes and interfaces.
- Change Numbers API to make URL Form Encoded requests.
- Improved TypeScript installation before running build commands.
- Set the proper content type when sending PUT/PATCH/POST requests.

**New Contributors**

- @conshus made their first contribution. [387](https://github.com/Vonage/vonage-node-sdk/pull/687)

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.2...@vonage/server-sdk@3.0.7)

---

## Vonage Node SDK v3.0.6 (2022-11-22)

This release addresses an issue where version 3.0.5 was missing published code.

### Fixed

- Addressed the issue where version 3.0.5 was missing published code.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.5...@vonage/server-sdk@3.0.6)

---

## Vonage Node SDK v3.0.5 (2022-11-22)

This release includes documentation updates, fixes for migration guides, and improvements in TypeScript installation and content type handling.

### Added

- Added pricing migration guide.
- Added SMS migration guide.

### Fixed

- Removed duplicate docs.
- Improved TypeScript installation before running build commands.
- Set the proper content type when sending PUT/PATCH/POST requests.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.4...@vonage/server-sdk@3.0.5)

---

## Vonage Node SDK v3.0.4 (2022-11-18)

This release includes a fix for the Numbers API.

### Fixed

- Change Numbers API to make URL Form Encoded requests.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.3...@vonage/server-sdk@3.0.4)

---

## Vonage Node SDK v3.0.3 (2022-11-17)

This release includes documentation updates, fixes for migration docs, and improvements in searching available numbers and NCCO class exports.

### Added

- Added numbers migration guide.

### Fixed

- Allow features to be searched in available numbers.
- Exported additional NCCO classes and interfaces that weren't before.
- Fixed verify migration doc.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.2...@vonage/server-sdk@3.0.3)

---

## Vonage Node SDK v3.0.2 (2022-11-16)

This release addresses an issue with the WA Template interface caused by an older, incorrect spec.

### Fixed

- Fixed an issue with the WA Template interface from an older, incorrect spec.

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.1...@vonage/server-sdk@3.0.2)

---

## Vonage Node SDK v3.0.1 (2022-11-10)

This release updates V3 documentation, adds verify and voice, and fixes typos in Number Insights.

### Added

- Added verify and voice support, and fixed typos in Number Insights

### Fixed

- Updated V3 docs

### Changed

- Updated import from node-specific to just request http/https

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.0...@vonage/server-sdk@3.0.1)

---

## Vonage Node SDK v3.0.0 (2022-11-09)

This version is a complete rewrite of version 2. It is written in TypeScript and broken out into smaller packages to reduce package size. Callbacks have been removed, and most functions will take in param objects instead of using positional params. SMS and Messages have been broken out to mirror the API. Migration guides are provided for each package.

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

- @conshus made their first contribution ([#687](https://github.com/Vonage/vonage-node-sdk/pull/687)).

**Full Changelog**: [Link](https://github.com/Vonage/vonage-node-sdk/compare/2.11.2...@vonage/server-sdk@3.0.0)

---

## Vonage Node SDK v2.11.2

This release addresses a issue downloading a transcript

### Fixed

- Corrected the issue where downloading a voice recording transcript would throw an exception.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.11.1...@vonage/server-sdk@2.11.2)

---

## Vonage Node SDK v2.11.0

This release added support for the Messages API

### Added

- Added support for the Messages API v1.0.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.10.1...@vonage/server-sdk@2.11.0)

---

## Vonage Node SDK v2.10.1

This release includes the following update:

### Changed

- Corrected license information.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.10.0...@vonage/server-sdk@2.10.1)

---

## Vonage Node SDK v2.10.0

This version serves as the change from the Nexmo namespace to the Vonage namespace. The module now resides on NPM as `@vonage/server-sdk`. Prior versions under the Nexmo namespace will remain in maintenance mode for the next 12 months and receive bug and security fixes. All new functionality will only be added to the @vonage namespace.

### Changed

- Migrated SDK module from `nexmo` to `@vonage/server-sdk`.

---

## Vonage Node SDK v2.9.1

This version Fixes an improper constructor

### Fixed

- TypeError: Nexmo is not a constructor.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.9.0...@vonage/server-sdk@2.9.1)

---

## Vonage Node SDK v2.9.0

This release addressed Nexmo constructor changes, introduced an optional target_api_key parameter for certain methods, added typings for Messages API, and updated private key handling for improved usage in environment variables

### Added

- Optional `target_api_key` parameter for the `number.buy()` and `number.cancel()` methods.
- Typings for Messages API.

### Fixed

- Addressed Nexmo constructor changes of the given options object.

### Changed

- Private Key strings now replace `\n` with newlines for easier usage in environment variables.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.8.0...@vonage/server-sdk@2.9.0)

---

## Vonage Node SDK v2.8.0

This release added support for Verify PSD2

### Added

- ADDED: Support for Verify PSD2 requests via `nexmo.verify.psd2()`.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.7.0...@vonage/server-sdk@2.8.0)

---

## Vonage Node SDK v2.7.0

This release introduced an update that made parameters optional in the Nexmo constructor.

### Changed

- Made `apiKey` and `apiSecret` optional when `applicationId` and `privateKey` are present in the Nexmo constructor.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.6.0...@vonage/server-sdk@2.7.0)

---

## Vonage Node SDK v2.6.0

This release added the ability to change hosts

### Added

- Ability to change hosts via the config object, using `apiHost` and `restHost`.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.5.3...@vonage/server-sdk@2.6.0)

---

## Vonage Node SDK v2.5.3

This release fixes URI encoding for SMS messages

### Fixed

- URI Encode Signed SMS Message.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.5.2...@vonage/server-sdk@2.5.3)

---

## Vonage Node SDK v2.5.2

This release added support for the Pricing API

### Added

- Pricing API support.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.5.1...@vonage/server-sdk@2.5.2)

---

## Vonage Node SDK v2.5.1

This release added support for the Verify and Applications API

### Added

- Typings for Verify API.
- Support for Applications API V2.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.4.2...@vonage/server-sdk@2.5.1)

---

## Vonage Node SDK v2.4.2

This release added support for signing requests

### Added

- Added message signing for sending SMS.
- Added `Nexmo.generateSignature` method to verify signed messages.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.0.1...@vonage/server-sdk@2.4.2)

---

## Vonage Node SDK v2.0.1

This release fixes the `retry-after` logic

### Fixed

-  Addressed the default setting of `retry-after` for 429 HTTP status code responses.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.0.0...@vonage/server-sdk@2.0.1)

---

## Vonage Node SDK v2.0.0

This major release addressed bug fixes related to status code checking, error handling, and introduced improvements for programmatically useful error objects.

### Fixed

- Checked the `statusCode` on the response.
- Handled 429 HTTP status codes.

### Changed

- Allow errors to be programmatically useful, the `error` callback objects have been updated to include `{statusCode: STATUS_CODE, body: JSON_BODY, headers: HEADERS}`.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.2.0...@vonage/server-sdk@2.0.0)

---

## Vonage Node SDK v1.2.0

This release added support for the File API

### Added

- File API to the library, introducing `nexmo.files.get` and `nexmo.files.save` methods.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.1.2...@vonage/server-sdk@1.2.0)

---

## Vonage Node SDK v1.1.2

This release fixes a bug with Parsing JSON

### Fixed

- Addressed a JSON parsing error.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.1.1...@vonage/server-sdk@1.1.2)

---

## Vonage Node SDK v1.1.1

This release updated the User Agent format to match other libraries and fixed a bug related to an undefined method.

### Fixed

- FIXED: Bug #88 - Addressed an issue with an undefined method when missing `method` declaration.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.1.0...@vonage/server-sdk@1.1.1)

### Changed

- UPDATED: Changed User Agent format to match other libraries.

---

## Vonage Node SDK v1.1.0

This release adds JWT generation capabilities.

### Added

- `nexmo.generateJwt` method to generate JWT based on instance credentials.
- `Nexmo.generateJwt` static function to generate JWT.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.0.0...@vonage/server-sdk@1.1.0)

---

## Vonage Node SDK v1.0.0

Earlier versions of this library were published as "easynexmo". The "easynexmo" package is now deprecated.

### Deprecated

- `easynexmo` is now deprecated