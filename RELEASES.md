---
icon: node-color
id: vonage-node-sdk
pkgName: Node SDK
release: '2026-03-25'
title: Vonage Node SDK
version: 3.27.0
---

# Changelog

All notable changes to this project will be documented in this file.

---

## Vonage Node SDK v3.27.0 (2026-03-25)

Additions for new Voice features.

**Added**

- Added support for 24k Audio
- Supporting WebSocket authorization
- Added types for the "Wait" NCCO action

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.26.3...@vonage/server-sdk@3.27.0)

---

## Vonage Node SDK v3.26.0 (2026-01-28)

This release adds support for the Identity Insights API, RCS suggestions in the Messages API, and the next workflow support for the Verify API. The `getCaptionStatus` has been deprecated for the Video API. Third-party packages have been updated, along with the removal of `lodash`.

**Added**

- Support for the Identity Insights API
- Support for `nextWorkflow` for Verify API
- Support for RCS Suggestions for the Messages API

**Changed**

- Deprecated `getCaptionStatus` for the Video API

**New Contributors**

- [@alnacle](https://github.com/alnacle) made their first contribution in [#1030](https://github.com/Vonage/vonage-node-sdk/pull/1030)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.25.1...@vonage/server-sdk@3.26.0)

---

## Vonage Node SDK v3.25.1 (2025-09-22)

This is a small fix to the voice package to add in missing NCCO classes from the export.

**Fixed**

- Voice package missing exports for NCCO

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.25.0...@vonage/server-sdk@3.25.1)

---

## Vonage Node SDK v3.25.0 (2025-09-16)

This fixes a critical issue where ESM and CJS Modules are not loading.

**Fixed**

- Critical bug where ESM and CJS files were not built correctly.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.24.1...@vonage/server-sdk@3.25.0)

---

## Vonage Node SDK v3.24.3 (2025-09-12)

This addresses some mismatched version numbers.

---

## Vonage Node SDK v3.24.2 (2025-09-12)

Improved ESM and CJS module builds, added RCS workflow, and fixed typo in `initiateSIPCall` method name in the Video SDK.

**Build**

- Updated TypeScript config for better ESM and CJS module output

**Added**

- RCS workflow support for Verify V2

**Fixed**

- Typo in `video.initiateSIPCall` (was incorrectly named `intiateSIPCall`)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.24.1...@vonage/server-sdk@3.24.2)

---

## Vonage Node SDK v3.24.1 (2025-08-18)

Added a deprecation warning for `disconnectWebsocket`.

**Added**

- Deprecation warning for `disconnectWebsocket`

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.24.0...@vonage/server-sdk@3.24.1)

---

## Vonage Node SDK v3.23.0 (2025-08-15)

This adds bidirectional support for WebSockets for the Video SDK.

**Added**

- Bidirectional support for WebSockets

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.22.5...@vonage/server-sdk@3.23.0)

---

## Vonage Node SDK v3.22.5 (2025-08-13)

This release updates the transcription properties for the Video SDK.

**Fixed**

- Adjusted `BaseArchiveOptions` type, specifically removing `transcriptionProperties` from the nested type.

**Documentation**

- Fixed a typo in the README for the verify package.

**New Contributors**

- [@Mike-Zhylevych](https://github.com/Mike-Zhylevych) made their first contribution in [#1011](https://github.com/Vonage/vonage-node-sdk/pull/1011)
- [@amdcavallaro](https://github.com/amdcavallaro) made their first contribution in [#1010](https://github.com/Vonage/vonage-node-sdk/pull/1010)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.22.4...@vonage/server-sdk@3.22.5)

---

## Vonage Node SDK v3.22.4 (2025-08-12)

Minor fix for the server-client not appending the user agent to the request.

**Fixed**

- Server client now appends to the user-agent header

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.22.3...@vonage/server-sdk@3.22.4)

---

## Vonage Node SDK v3.22.3 (2025-08-07)

A small fix that impacts TypeScript users, using a string for the message type instead of the channels enum.

**Fixed**

- Channel in messages now allows a string to be used along with the enum

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.22.2...@vonage/server-sdk@3.22.3)

---

## Vonage Node SDK v3.22.2 (2025-08-07)

A small fix has been applied to the `Vonage` client for TypeScript.

**Fixed**

- For TypeScript, you can now pass in an Auth or Plain Object.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.22.1...@vonage/server-sdk@3.22.2)

---

## Vonage Node SDK v3.22.1 (2025-07-15)

Fixed an issue where the `MessageType` enum was not being exported.

**Fixed**

- Missing export for `MessageType` enum

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.22.0...@vonage/server-sdk@3.22.1)

---

## Vonage Node SDK v3.22.0 (2025-07-01)

Introduced message failover support for improved delivery resilience.

**Added**

- Added message failover support to improve delivery reliability. [#994](https://github.com/Vonage/vonage-node-sdk/pull/994)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.21.2...@vonage/server-sdk@3.22.0)

---

## Vonage Node SDK v3.21.2 (2025-06-20)

This release expands the language enum for Video Captions.

**Added**

- Add more language codes for Captions API [#993](https://github.com/Vonage/vonage-node-sdk/pull/993)

**New Contributors**

- [@behei-vonage](https://github.com/behei-vonage) made their first contribution in [#993](https://github.com/Vonage/vonage-node-sdk/pull/993)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.21.0...@vonage/server-sdk@3.21.2)

---

## Vonage Node SDK v3.21.0 (2025-04-22)

This release adds Video quantization and post-call transcription to the Video Package.

**Added**

- Video Quantization and Post Call Transcription

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.20.1...@vonage/server-sdk@3.21.0)

---

## Vonage Node SDK v3.20.1 (2025-04-02)

This release patches the number insights SDK to use basic authentication by default.

**Changed**

- Updated number insights to use basic auth.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.20.0...@vonage/server-sdk@3.20.1)

---

## Vonage Node SDK v3.20.0 (2025-02-19)

Updated media URL validation to accept only Vonage or Nexmo domains and fixed typos.

**Added**

- Updated media URL validation to ensure only Vonage or Nexmo domains are accepted. [#981](https://github.com/Vonage/vonage-node-sdk/pull/981)

**Fixed**

- Corrected minor typos. [#984](https://github.com/Vonage/vonage-node-sdk/pull/984)

**New Contributors**

- [@BeLi4L](https://github.com/BeLi4L) made their first contribution. [#984](https://github.com/Vonage/vonage-node-sdk/pull/984)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.19.4...@vonage/server-sdk@3.20.0)

---

## Vonage Node SDK v3.19.4 (2025-01-21)

This release marks fraud detection for number-insights v2 as deprecated. For TypeScript, missing properties for NCCO objects have been added.

**Fixed**

- Missing `dtmfAnswer` and `onAnswer` properties [#979](https://github.com/Vonage/vonage-node-sdk/pull/979)

**Changed**

- Deprecated fraud detection and real-time-insights [#980](https://github.com/Vonage/vonage-node-sdk/pull/980)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.19.3...@vonage/server-sdk@3.19.4)

---

## Vonage Node SDK v3.19.3 (2025-01-09)

Added support for new DTMF endpoints and archive max bitrate, improved API authentication handling, and resolved issues with form requests, conversation creation, and header transformations.

**Added**

- Added support for new DTMF endpoints. [#977](https://github.com/Vonage/vonage-node-sdk/pull/977)
- Introduced max bitrate setting for archive functionality. [#972](https://github.com/Vonage/vonage-node-sdk/pull/972)

**Fixed**

- Fixed issue where form requests were sending an undefined form body. [#966](https://github.com/Vonage/vonage-node-sdk/pull/966)
- Resolved issue with incorrect request format for creating conversations. [#967](https://github.com/Vonage/vonage-node-sdk/pull/967)
- Corrected transformation of `user-to-user` header to Lisp case. [#976](https://github.com/Vonage/vonage-node-sdk/pull/976)

**Changed**

- Refactored authentication type handling for APIs. [#971](https://github.com/Vonage/vonage-node-sdk/pull/971)


**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.19.0...@vonage/server-sdk@3.19.3)

---

## Vonage Node SDK v3.19.0 (2024-10-17)

Added WhatsApp reaction, User-to-User SIP headers and Verify template. It also fixed issues with the `server-client` not removing undefined query string parameters and messages not using basic auth when only apiKey or apiSecret are provided.

**Added**

- WhatsApp reaction
- Verify Templates,
- User-to-User Header added to voice

**Fixed**

- Server-client not removing undefined query string parameters
- Messages not using basic auth when only apiKey or apiSecret are passed to the client

**Changed**

- New TTS Languages

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.18.0...@vonage/server-sdk@3.19.0)

---

## Vonage Node SDK v3.18.0 (2024-10-03)

This update fixes application response types, removes proactive-connect, makes `type` optional in Redact API, adds message updates, and adds verification templates.

**Added**

- Message updates
- Templates to verify

**Fixed**

- Application response types

**Changed**

- `type` parameter made optional in Redact API

**Removed**

- Proactive-connect

**New Contributors**

- [@s-lukashenka-micoworks](https://github.com/s-lukashenka-micoworks) made their first contribution in [#956](https://github.com/Vonage/vonage-node-sdk/pull/956)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.17.0...@vonage/server-sdk@3.18.0)

---

## Vonage Node SDK v3.17.0 (2024-09-03)

Deprecated proactive-connect and meetings, fixed incorrect HTTP method for updating
users, and added SIM swap, number verification and network client features.
Network API features are not included in the complete @Vonage/server-sdk package.
To use, you will need to install them manually.

**Added**

- Network API: SIM swap
- Network API: Custom client
- Network API: Number verification

**Deprecated**

- Proactive-connect
- Meetings

**Fixed**

- Incorrect HTTP method for updating users

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.16.0...@vonage/server-sdk@3.17.0)

---

## Vonage Node SDK v3.16.0 (2024-07-25)

Fixed missing advanced machine detection mode.

**Fixed**

- Added missing advanced machine detection mode

**New Contributors**

- [@d-vanhees-micoworks](https://github.com/d-vanhees-micoworks) made their first contribution in [#947](https://github.com/Vonage/vonage-node-sdk/pull/947)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.15.0...@vonage/server-sdk@3.16.0)

---

## Vonage Node SDK v3.15.0 (2024-07-01)

This release contains the addition of the `ttl` parameter to WhatsApp messages and introduces the new RCS Channel.

**Added**

- RCS channel

**Changed**

- `ttl` parameter is now added to WhatsApp channels

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.14.2...@vonage/server-sdk@3.15.0)

---

## Vonage Node SDK v3.14.2 (2024-06-20)

Fixed incorrect types on `BalanceTransferParameters` and `SubAccountCreateParameters`.

**Fixed**

- Incorrect type on `BalanceTransferParameters`
- Correct type on `SubAccountCreateParameters`

**New Contributors**

- [@froggy1014](https://github.com/froggy1014) made their first contribution in [#936](https://github.com/Vonage/vonage-node-sdk/pull/936)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.14.1...@vonage/server-sdk@3.14.2)

---

## Vonage Node SDK v3.14.1 (2024-05-21)

Version 3.14.1 of the Vonage Node SDK introduces fixes for private key path handling
and updated endpoints for video stream management. It also adds new parameters for
webhooks, Viber, and SMS, and enhances TTS language support. These updates
improve functionality, security, and expand messaging capabilities.

**Added**

- New webhook, Viber, and SMS parameters in messages.
- TTS languages generation from voice.json.

**Fixed**

- Passing in private key path for authentication.
- Updated endpoints for adding/removing streams from Archive in the video API.

**Refactored**

- Allowing strings for voice TTS languages.

**New Contributors**

- [@ThingUroboros](https://github.com/ThingUroboros )

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.14.0...@vonage/server-sdk@3.14.1)

---

## Vonage Node SDK v3.13.0 (2024-02-12)

This version delivers fixes and a new feature, including corrections for JWT
algorithm parameters, session creation in the video API, authentication in
Number Insights V2, updates to SMS and silent authentication in Verify2, and the
introduction of the conversations package.

**Added**

- Conversations package for enhanced communication features.

**Fixed**

- Outdated/wrong algorithm argument in JWT handling.
- Video API session creation to ensure JSON return type.
- Incorrect authentication method in Number Insights V2.
- (Typescript only) Locale can now be any string along with a value from the enum

**Changed**

- Added `from`, `entityId`, and `contentId` to the SMS workflow in Verify V2.
- Verify V2 will return back the `check_url` if present.

**New Contributors**

[@Ymirke](https://github.com/Ymirke)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.12.2...@vonage/server-sdk@3.13.0)

---

## Vonage Node SDK v3.12.2 (2024-01-23)

The SDK update introduces improvements in response header charset decoding and
NCCO encoding in voice functionality, enhancing overall reliability and
performance.

**Added**

- NCCO encoding in voice functionality (https://github.com/Vonage/vonage-node-sdk/pull/906)

**Fixed**

- Decoding issues when charset is in the content type response header (https://github.com/Vonage/vonage-node-sdk/pull/904)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.12.0...@vonage/server-sdk@3.12.2)

---

## Vonage Node SDK v3.12.0 (2024-01-11)

This release addressed some issues with improper types, cleaning up
`@vonage/vetch` package and adding a huge amount of documentation and examples
to the code.

**Added**

- Documentation blocks to all user facing API

**Fixed**

- Updated all types to no longer use `any` when passing in parameters to the `send*Request` function calls

**Deprecated**

- Having `@vonage/vetch` make HTTP calls is deprecated. Going forward only `@vonage/server-client` will handle making HTTP requests

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.11.0...@vonage/server-sdk@3.12.0)

---

## Vonage Node SDK v3.11.0 (2023-12-11)

Video has now been released and is no longer in beta. This release adds video to the `@vonage/server-sdk` for ease of use.

**Added**

- Video has been released is now part of the core SDK

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.10.2...@vonage/server-sdk@3.11.0)

---

## Vonage Node SDK v3.10.2 (2023-10-19)

This release includes a fix for the wrong status code in SMS.

**Fixed**

- Corrected the wrong status code for "partner account barred" in SMS

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.10.0...@vonage/server-sdk@3.10.2)

---

## Vonage Node SDK v3.10.1 (2023-11-12)

This release should be ignored as it is just adds some templates to GitHub

---

## Vonage Node SDK v3.10.0 (2023-10-13)

The node SDK version 3.10.0 introduces support for number insight v2 and the media API, refactors the meetings API path to include the version, and fixes a typo pricing and meetings.

**Added**

- Support for number insight v2
- Support for the media API

**Fixed**

- Typo in `explicit_approval` in join type for the pricing package
- Removed `mock-fs` as it's broken in GitHub actions
- Fixed a typo in the `ServiceType` enum for the meetings package

**Changed**

- Version now present in the meetings API path

**New Contributors**

- [@ajumal-ashraf-dev](https://github.com/ajumal-ashraf-dev) made their first contribution ([#867](https://github.com/Vonage/vonage-node-sdk/pull/867)).
- [@muhammadzadeh](https://github.com/muhammadzadeh) made their first contribution ([#870](https://github.com/Vonage/vonage-node-sdk/pull/870)).

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.3...@vonage/server-sdk@3.10.0)

---

## Vonage Node SDK v3.9.3 (2023-09-11)

This release addresses an issue where version 3.9.2 was missing published code.

**Fixed**

- Addressed the issue where version 3.9.2 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.2...@vonage/server-sdk@3.9.3)

---

## Vonage Node SDK v3.9.2 (2023-08-21)

This release further addresses missing code in the published version.

**Fixed**

- Continued correction of version numbers in child packages.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.1...@vonage/server-sdk@3.9.2)

---

## Vonage Node SDK v3.9.1 (2023-08-21)

This release addresses missing code not published.

**Fixed**

- Corrected version numbers in child packages.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.9.0...@vonage/server-sdk@3.9.1)

---

## Vonage Node SDK v3.9.0 (2023-08-21)

This release introduces incoming signature verification for SMS and the JWT package, and includes file download functionality.

**Added**

- Incoming signature verification for SMS.
- `verifySignature` to the JWT package.
- File download functionality.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.8.1...@vonage/server-sdk@3.9.0)

---

## Vonage Node SDK v3.8.1 (2023-08-15)

This release addresses a publishing issue related to the users package.

**Fixed**

- Fixed publishing for the users package.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.8.0...@vonage/server-sdk@3.8.1)

---

## Vonage Node SDK v3.8.0 (2023-08-14)

This release fixes the timeout parameter, WebSocket header type, and NCCO actions, restores append to user agent, and introduces the users package.

**Added**

- Introduces the users package.

**Fixed**

- Fixed the timeout parameter behavior.
- Corrected the WebSocket header type.
- Ensured NCCO actions set values for NCCO type to avoid JavaScript problems.
- Restored append to the user agent.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.7.2...@vonage/server-sdk@3.8.0)

---

## Vonage Node SDK v3.7.2 (2023-08-07)

This release adds more information about migration in the documentation.

**Added**

- Added more information about migration from V2 to V3.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.7.1...@vonage/server-sdk@3.7.2)

---

## Vonage Node SDK v3.7.1 (2023-08-07)

This release addresses a casing issue in number parameters.

**Fixed**

- Fixed casing in number API parameters.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.7.0...@vonage/server-sdk@3.7.1)

---

## Vonage Node SDK v3.7.0 (2023-08-02)

This release includes dependency updates and fixes related to word-wrap, package audit, and JWT claims.

**Added**

- Bumped word-wrap dependency from 1.2.3 to 1.2.4.

**Fixed**

- Updated packages after audit.
- Fixed ttl in claims for JWT.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.6.0...@vonage/server-sdk@3.7.0)

---

## Vonage Node SDK v3.6.0 (2023-06-26)

This release introduces Subaccounts Package, Advanced Machine Detection to Voice API, and the Meetings Package.

**Added**

- Subaccounts Package.
- Advanced Machine Detection to Voice API.
- Meetings Package.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.5.0...@vonage/server-sdk@3.6.0)

---

## Vonage Node SDK v3.5.1 (2023-05-24)

This release addresses specific issues with Voice and Verify V2.

**Fixed**

- Fixed an issue with blank values on the Dial API.
- Corrected the incorrect main entry in the package JSON for Verify v2.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.5.0...@vonage/server-sdk@3.5.1)

---

## Vonage Node SDK v3.5.0 (2023-05-23)

Added Verify v2 improvements, fixed issues, and simplified functions. Verify v2 is now generally available.

**Added**

- Added a cancel method for Verify v2.
- Introduced missing fraud check parameter for Verify v2.

**Changed**

- Simplified the `addAuthenticationToRequest` function.

**Fixed**

- Fixed an issue in Verify v2 where code was not returning a status.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.4.0...@vonage/server-sdk@3.5.0)

---

## Vonage Node SDK v3.4.0 (2023-05-10)

This release includes various features and improvements, such as redact module, verify v2 support, auth signature timestamp, experience composer, captions for video, proactive connect, custom exceptions, and documentation updates.

**Added**

- Redact module.
- Verify v2 support.
- Auth signature timestamp.
- Experience composer and captions for video.
- Bring your own passcode.
- Proactive connect.
- Custom exceptions for missing required parameters.

**Fixed**

- Import issue with verification in the `verify` module.
- Kebab-case API parameter formatting.
- Documentation fixes and badge updates.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.3.0...@vonage/server-sdk@3.4.0)

---

## Vonage Node SDK v3.3.0 (2023-04-12)

This release adds new features such as Messages update, Verify v2 support, Auth signature timestamp, Experience composer, captions for video, and Video client ACL while maintaining non-breaking changes for Messages and including code coverage improvements.

**Added**

- Messages update.
- Verify v2 support.
- Auth signature timestamp.
- Experience composer and captions for video.
- Video client ACL.

**Changed**

- Messages updated to be non-breaking.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.2.0...@vonage/server-sdk@3.3.0)

---

## Vonage Node SDK v3.2.0 (2023-03-10)

This release fixes an import issue, added a new module, and improved API parameter formatting

**Added**

- Introduction of a new `redact` module.

**Changed**

- Improved API parameter formatting to kebab-case.

**Fixed**

- Import issue with verification in the `verify` module.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.1.1...@vonage/server-sdk@3.2.0)

---

## Vonage Node SDK v3.1.1 (2023-03-02)

In this release, new features were introduced, including porting Audit and Redact packages from Node Server SDK v2, async auth handlers, simple search for Numbers, Verify v2, and enhancements to the Video experience composer, captions, audio connector, ACL for JWT generator, SIP, and DTMF playing. Additionally, several bug fixes and improvements for Node compatibility and API parameters were implemented.

**Added**

- Ported Audit and Redact packages from Node Server SDK v2.
- Introduced async auth handlers.
- Added simple search for Numbers.
- Added Verify v2.
- Added Video experience composer, captions, audio connector, ACL for JWT generator, SIP, and DTMF playing.

**Fixed**

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

**Added**

- Made auth handlers async for auth, messages, and server-client ([#801](https://github.com/Vonage/vonage-node-sdk/pull/801)).

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.20...@vonage/server-sdk@3.1.0)

---

## Vonage Node SDK v3.0.20 (2023-02-27)

This release addresses an issue where version 3.0.19 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.19 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.19...@vonage/server-sdk@3.0.20)

---

## Vonage Node SDK v3.0.19 (2023-02-27)

This release introduced an audit package, audio connector for video, and debug logging.

**Added**

- Audit package.
- Audio connector for video.
- Debug logging.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.18...@vonage/server-sdk@3.0.19)

---

## Vonage Node SDK v3.0.18 (2023-01-12)

This release addresses an issue where version 3.0.17 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.17 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.16...@vonage/server-sdk@3.0.18)

---

## Vonage Node SDK v3.0.17 (2023-01-12)

This release addresses an issue where version 3.0.14 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.14 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.16...@vonage/server-sdk@3.0.17)

---

## Vonage Node SDK v3.0.16 (2023-01-12)

This release addresses an issue where version 3.0.16 needed Typescript to be recompiled

**Fixed**

- Removed importHelpers compiler options

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.15...@vonage/server-sdk@3.0.16)

---

## Vonage Node SDK v3.0.15 (2023-01-10)

This release addresses an issue where version 3.0.14 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.14 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.14...@vonage/server-sdk@3.0.15)

---

## Vonage Node SDK v3.0.14 (2023-01-05)

This release includes the removal of tslib, the introduction of numbers simple search, and a fix for missing remapping of params in the verify module.

**Added**

- Introduced numbers simple search.

**Fixed**

- Removed tslib.
- Added missing remapping for params in the verify module.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.12...@vonage/server-sdk@3.0.14)

---

## Vonage Node SDK v3.0.13 (2023-01-05)

This release addresses an issue where version 3.0.12 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.12 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.13...@vonage/server-sdk@3.0.12)

---

## Vonage Node SDK v3.0.12 (2022-12-16)

**Fixed**

- Added SIP and DTMF playing to video module.
- Reverted back to ES6 and CommonJS for better Node compatibility.

**Changed**

- Updated changelog.
- Added Prettier for better formatting.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.11...@vonage/server-sdk@3.0.12)

---

## Vonage Node SDK v3.0.11 (2022-12-14)

This release includes various updates related to build configurations and documentation.

**Changed**

- Cleanup tsconfig.
- Cleanup eslint config.
- Added husky with testing and lint fix.
- Updated multiple README files.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.10...@vonage/server-sdk@3.0.11)

---

## Vonage Node SDK v3.0.10 (2022-11-30)

This release includes fixes for Verify, SMS, and Numbers.

**Fixed**

- Added "brand" to separate Verify from Sender ID.
- Corrected return types when sending SMS.
- Improved filtering for owned and available numbers.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.9...@vonage/server-sdk@3.0.10)

---

## Vonage Node SDK v3.0.9 (2022-11-23)

This release includes a fix for types using node:http for import.

**Fixed**

- Fixed types using node:http for import.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.7...@vonage/server-sdk@3.0.9)

---

## Vonage Node SDK v3.0.8 (2022-11-22)

This release addresses an issue where version 3.0.7 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.7 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.7...@vonage/server-sdk@3.0.8)

---

## Vonage Node SDK v3.0.7 (2022-11-22)

This release includes various fixes for numbers, messages and numbers API

**Fixed**

- Fixed all the tests.
- Updated README.md.
- Allow features to be searched in available numbers.
- Exported additional NCCO classes and interfaces.
- Change Numbers API to make URL Form Encoded requests.
- Improved TypeScript installation before running build commands.
- Set the proper content type when sending PUT/PATCH/POST requests.

**New Contributors**

- [@conshus](https://github.com/conshus) made their first contribution. [387](https://github.com/Vonage/vonage-node-sdk/pull/687)

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.2...@vonage/server-sdk@3.0.7)

---

## Vonage Node SDK v3.0.6 (2022-11-22)

This release addresses an issue where version 3.0.5 was missing published code.

**Fixed**

- Addressed the issue where version 3.0.5 was missing published code.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.5...@vonage/server-sdk@3.0.6)

---

## Vonage Node SDK v3.0.5 (2022-11-22)

This release includes documentation updates, fixes for migration guides, and improvements in TypeScript installation and content type handling.

**Added**

- Added pricing migration guide.
- Added SMS migration guide.

**Fixed**

- Removed duplicate docs.
- Improved TypeScript installation before running build commands.
- Set the proper content type when sending PUT/PATCH/POST requests.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.4...@vonage/server-sdk@3.0.5)

---

## Vonage Node SDK v3.0.4 (2022-11-18)

This release includes a fix for the Numbers API.

**Fixed**

- Change Numbers API to make URL Form Encoded requests.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.3...@vonage/server-sdk@3.0.4)

---

## Vonage Node SDK v3.0.3 (2022-11-17)

This release includes documentation updates, fixes for migration docs, and improvements in searching available numbers and NCCO class exports.

**Added**

- Added numbers migration guide.

**Fixed**

- Allow features to be searched in available numbers.
- Exported additional NCCO classes and interfaces that weren't before.
- Fixed verify migration doc.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.2...@vonage/server-sdk@3.0.3)

---

## Vonage Node SDK v3.0.2 (2022-11-16)

This release addresses an issue with the WA Template interface caused by an older, incorrect spec.

**Fixed**

- Fixed an issue with the WA Template interface from an older, incorrect spec.

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.1...@vonage/server-sdk@3.0.2)

---

## Vonage Node SDK v3.0.1 (2022-11-10)

This release updates V3 documentation, adds verify and voice, and fixes typos in Number Insights.

**Added**

- Added verify and voice support, and fixed typos in Number Insights

**Fixed**

- Updated V3 docs

**Changed**

- Updated import from node-specific to just request http/https

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@3.0.0...@vonage/server-sdk@3.0.1)

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

**Full Changelog** [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/2.11.2...@vonage/server-sdk@3.0.0)

---

## Vonage Node SDK v2.11.2

This release addresses a issue downloading a transcript

**Fixed**

- Corrected the issue where downloading a voice recording transcript would throw an exception.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.11.1...@vonage/server-sdk@2.11.2)

---

## Vonage Node SDK v2.11.0

This release added support for the Messages API

**Added**

- Added support for the Messages API v1.0.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.10.1...@vonage/server-sdk@2.11.0)

---

## Vonage Node SDK v2.10.11 (2022-03-10)

This release fixes missing callback arguments and repairs signature handling.

**Fixed**

- Callback argument missing (#597)
- Repair signatures, fix up tests, remove legacy querystring

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.9...v2.10.11)

---

## Vonage Node SDK v2.10.9 (2021-06-18)

This release removes extraneous log output.

**Fixed**

- Remove extraneous log output.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.8...v2.10.9)

---

## Vonage Node SDK v2.10.8 (2021-04-23)

This release moves querystring parameters in SMS to the JSON body.

**Changed**

- Move querystring params in SMS to the JSON body.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.6...v2.10.8)

---

## Vonage Node SDK v2.10.6 (2021-02-16)

This release updates the main line branch tag with no functional changes.

**Changed**

- Updating main line branch tag. No changes.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.5...v2.10.6)

---

## Vonage Node SDK v2.10.5 (2021-01-08)

This release fixes a new issue with host override.

**Fixed**

- Fix new issue with host override. (#432)

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.4...v2.10.5)

---

## Vonage Node SDK v2.10.4 (2020-11-10)

This release fixes an issue with host override.

**Fixed**

- Fix issue with host override. (#400)

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.3...v2.10.4)

---

## Vonage Node SDK v2.10.3 (2020-11-05)

A special thanks to all of the Hacktoberfest contributions. This release adds typings, URL override support, and dependency updates.

**Added**

- Added Yarn example in README.md (#400)
- Added Number typings (#380)
- Added Voice typings (#379)
- Added Media typings (#376)
- Added Number Insight typings (#373)

**Updated**

- Discriminating unions support for different message responses (#389)
- Allow for Full URL Overrides in Constructor (#378)
- Updated uuid-dependency for performance improvement (#375)
- Various dependency bumps (#387, #385, #384)

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.2...v2.10.3)

---

## Vonage Node SDK v2.10.2 (2020-10-05)

This release fixes various typos and type module name issues.

**Fixed**

- Fixed typos (#370, #369, #358, #357)
- Fixed types module name (#355)

**Updated**

- Bump eslint-config-prettier from 6.11.0 to 6.12.0 (#350)

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.10.1...v2.10.2)

---

## Vonage Node SDK v2.10.1

This release includes the following update:

**Changed**

- Corrected license information.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.10.0...@vonage/server-sdk@2.10.1)

---

## Vonage Node SDK v2.10.0

This version serves as the change from the Nexmo namespace to the Vonage namespace. The module now resides on NPM as `@vonage/server-sdk`. Prior versions under the Nexmo namespace will remain in maintenance mode for the next 12 months and receive bug and security fixes. All new functionality will only be added to the @vonage namespace.

**Changed**

- Migrated SDK module from `nexmo` to `@vonage/server-sdk`.

---

## Vonage Node SDK v2.9.1

This version Fixes an improper constructor

**Fixed**

- TypeError: Nexmo is not a constructor.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.9.0...@vonage/server-sdk@2.9.1)

---

## Vonage Node SDK v2.9.0

This release addressed Nexmo constructor changes, introduced an optional target_api_key parameter for certain methods, added typings for Messages API, and updated private key handling for improved usage in environment variables

**Added**

- Optional `target_api_key` parameter for the `number.buy()` and `number.cancel()` methods.
- Typings for Messages API.

**Fixed**

- Addressed Nexmo constructor changes of the given options object.

**Changed**

- Private Key strings now replace `\n` with newlines for easier usage in environment variables.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.8.0...@vonage/server-sdk@2.9.0)

---

## Vonage Node SDK v2.8.0

This release added support for Verify PSD2

**Added**

- ADDED: Support for Verify PSD2 requests via `nexmo.verify.psd2()`.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.7.0...@vonage/server-sdk@2.8.0)

---

## Vonage Node SDK v2.7.0

This release introduced an update that made parameters optional in the Nexmo constructor.

**Changed**

- Made `apiKey` and `apiSecret` optional when `applicationId` and `privateKey` are present in the Nexmo constructor.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.6.0...@vonage/server-sdk@2.7.0)

---

## Vonage Node SDK v2.6.0

This release added the ability to change hosts

**Added**

- Ability to change hosts via the config object, using `apiHost` and `restHost`.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.5.3...@vonage/server-sdk@2.6.0)

---

## Vonage Node SDK v2.5.3

This release fixes URI encoding for SMS messages

**Fixed**

- URI Encode Signed SMS Message.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.5.2...@vonage/server-sdk@2.5.3)

---

## Vonage Node SDK v2.5.2

This release added support for the Pricing API

**Added**

- Pricing API support.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.5.1...@vonage/server-sdk@2.5.2)

---

## Vonage Node SDK v2.5.1

This release added support for the Verify and Applications API

**Added**

- Typings for Verify API.
- Support for Applications API V2.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.4.2...@vonage/server-sdk@2.5.1)

---

## Vonage Node SDK v2.4.2

This release added support for signing requests

**Added**

- Added message signing for sending SMS.
- Added `Nexmo.generateSignature` method to verify signed messages.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.0.1...@vonage/server-sdk@2.4.2)

---

## Vonage Node SDK v2.4.0 (2018-09-27)

This release adds support for the Secret Management API.

**Added**

- Support for the Secret Management API.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v.2.3.2...v2.4.0)

---

## Vonage Node SDK v2.3.2 (2018-06-19)

This release fixes a response close callback issue.

**Fixed**

- Fix `response.on('close')` callback being triggered without an error.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v.2.3.0...v.2.3.2)

---

## Vonage Node SDK v2.3.0 (2018-06-01)

This release adds support for the Redact API.

**Added**

- Support for Redact API.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.2.1...v.2.3.0)

---

## Vonage Node SDK v2.2.1 (2018-04-29)

This release updates dependencies to fix a security vulnerability.

**Fixed**

- Updated dependencies to fix security vulnerability. (#179)

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.2.0...v2.2.1)

---

## Vonage Node SDK v2.2.0 (2018-01-24)

This release adds support for the Media API.

**Added**

- Support for Media API.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.1.2...v2.2.0)

---

## Vonage Node SDK v2.1.2 (2018-01-11)

This release adds HTTP timeout configuration and includes various refactoring and testing improvements.

**Added**

- Ability to set HTTP timeout.

**Changed**

- Refactored account related settings out of the `nexmo` singleton into their own class.
- Added new test helpers for asserting that the correct URL gets called.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.1.1...v2.1.2)

---

## Vonage Node SDK v2.1.1 (2017-12-14)

This release includes bug fixes, documentation updates, new features, and test improvements.

**Fixed**

- Prevent default headers being overwritten in `HTTPClient`. (#125)
- Handle 204 status code as a success, not an error. (#155)
- You can now change the port in HTTPClient (previously forced to use 443).

**Added**

- Search SMS messages. (#139)
- Search SMS rejections. (#140)
- Report conversion data to Nexmo (if enabled on your account). (#141)
- Trigger an auto-reload top-up. (#169)

**Documentation**

- Add copy/paste example for Verify. (#127)
- Private key can be provided inline. (#136)
- Updating calls. (#153)

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.0.2...v2.1.1)

---

## Vonage Node SDK v2.0.2 (2017-07-17)

This release removes SDK-level validation in favour of API-level validation.

**Changed**

- Remove SDK check for valid phone number, instead leaving this to the API.
- Remove SDK check for valid application type, instead leaving this to the API.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/v2.0.1...v2.0.2)

---

## Vonage Node SDK v2.0.1

This release fixes the `retry-after` logic

**Fixed**

-  Addressed the default setting of `retry-after` for 429 HTTP status code responses.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@2.0.0...@vonage/server-sdk@2.0.1)

---

## Vonage Node SDK v2.0.0

This major release addressed bug fixes related to status code checking, error handling, and introduced improvements for programmatically useful error objects.

**Fixed**

- Checked the `statusCode` on the response.
- Handled 429 HTTP status codes.

**Changed**

- Allow errors to be programmatically useful, the `error` callback objects have been updated to include `{statusCode: STATUS_CODE, body: JSON_BODY, headers: HEADERS}`.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.2.0...@vonage/server-sdk@2.0.0)

---

## Vonage Node SDK v1.2.0

This release added support for the File API

**Added**

- File API to the library, introducing `nexmo.files.get` and `nexmo.files.save` methods.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.1.2...@vonage/server-sdk@1.2.0)

---

## Vonage Node SDK v1.1.2

This release fixes a bug with Parsing JSON

**Fixed**

- Addressed a JSON parsing error.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.1.1...@vonage/server-sdk@1.1.2)

---

## Vonage Node SDK v1.1.1

This release updated the User Agent format to match other libraries and fixed a bug related to an undefined method.

**Fixed**

- FIXED: Bug #88 - Addressed an issue with an undefined method when missing `method` declaration.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.1.0...@vonage/server-sdk@1.1.1)

**Changed**

- UPDATED: Changed User Agent format to match other libraries.

---

## Vonage Node SDK v1.1.0

This release adds JWT generation capabilities.

**Added**

- `nexmo.generateJwt` method to generate JWT based on instance credentials.
- `Nexmo.generateJwt` static function to generate JWT.

Full Changelog: [View on GitHub](https://github.com/Vonage/vonage-node-sdk/compare/@vonage/server-sdk@1.0.0...@vonage/server-sdk@1.1.0)

---

## Vonage Node SDK v1.0.0

Earlier versions of this library were published as "easynexmo". The "easynexmo" package is now deprecated.

**Deprecated**

- `easynexmo` is now deprecated
