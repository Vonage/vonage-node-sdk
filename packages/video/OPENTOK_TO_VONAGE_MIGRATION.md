# Migration guide from OpenTok Node SDK to Vonage Video Node SDK

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You will need to remove the old `opentok` package and install `@vonage/server-sdk`

```console
$ npm uninstall opentok
$ npm install -s @vonage/server-sdk
```

If you are not planning on using any of the additional Vonage APIs, or need to use a custom URL (for example, accessing dev or QA environments), you can also just install `@vonage/video` and configure it as a standalon client.

## Setup

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage Application that has video capabilities enabled. Setup is the same for any other application-based application. The video client will then be available as `vonage.video`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
 });
const session = await vonage.video.createSession();
```

### Standalone
This module is also capable of working as a standalone module. The only difference is that the private key must be passed in as a string (as of 0.6.0), and that you can provide an additional `baseUrl` option in the constructor options. By default, the SDK points to production, but if you need to access dev or QA, the standalone setup is recommended.

```js
const { Video } = require('@vonage/video');

const vonage = new Video({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_STRING,
    baseUrl: 'https://video.dev.api.vonage.com',
 });
const session = await vonage.createSession();
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The new Video Node SDK uses Promises instead of callbacks, as the next version of the Vonage Node Server SDK will be promise-based. Customers will need to convert their callbacks to work with the responses returned from the calls.

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK. Please note that the core SDK is still JavaScript, only the video module is TypeScript.

## Changed Methods

| OpenTok Method | Vonage Method | Notes |
|----------------|---------------|-------|
| `createSession()` | `createSession()` | The `mediaMode` option is currently "enabled" or "disable"  |
| `generateToken()` | `generateClientToken()` | This method was renamed to better reflect what it does  |
| `listArchives()` | `searchArchives()` | This method was renamed to better reflect what it does. Auto pagination is not enabled |
| `setArchiveLayout()` | `updateArchiveLayout()` | This method was renamed to better reflect what it does. The multiple parameters for the layout have been replaced with a single argument that takes an `ArchiveLayout` |
| `signal()` | `sendSignal()` | This method was renamed to better reflect what it does  |
| `forceDisconnect()` | `disconnectClient()` | This method was renamed to better reflect what it does  |
| `getStream()` | `getStreamInfo()` | This method was renamed to better reflect what it does  |
| `listStreams()` | `getStreamInfo()` | This method was removed, `getStreamInfo()` will return all streams if one is not supplied as a second argument |


## Supported APIs

The following is a list of Vonage Video APIs and whether the SDK provides support for them:

| API   |  Supported?
|----------|:-------------:|
| Session Creation | ✅ |
| Signaling | ✅ |
| Force Muting | ✅ |
| Archiving | ✅ |
| Custom S3/Azure buckets | ✅ |
| SIP Interconnect | ✅ |
| Live Streaming Broadcasts | ✅ |
| Experience Composer | ✅ |
| Account Management | ❌ |
