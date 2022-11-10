# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You can continue to use the `@vonage/server-sdk` package or now use the Verify SDK as a standalone package. If you would like to continue to use the full SDK, simply update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/voice
```
## Setup

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage API Key and Secret. The messages client will then be available as `vonage.verify`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: API_KEY,
    apiSecret: API_SECRET
});

vonage.verify.check(VERIFY_REQUEST_ID, CODE)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

### Standalone
This module is also capable of working as a standalone module. The only difference is that you create an `Verify` object and pass the credentials there.

```js
const { Verify } = require('@vonage/verify');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers will need to convert their callbacks to work with the responses returned from the calls. 

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| `vonage.verify.request()` | `vonage.verify.start()` | This method was renamed to better describe what it does, and now takes a `VerificationRequest` object or a `PSD2Request` object | 
| `vonage.verify.psd2()` | - | This method was combined with `vonage.verify.start()` | 
| `vonage.verify.check()` | `vonage.verify.check()` | This method now takes a request ID and code instead of various forms of input objects like a full Verification request | 
| `vonage.verify.search()` | `vonage.verify.search()` | This method now searches for a Verification based on the request ID, and no longer accepts an array of multiple request IDs | 
| `vonage.verify.control()` | - | This method has been broken up into discreet actions | 
| - | `vonage.verify.cancel()` | Cancel the request verification request | 
| - | `vonage.verify.trigger()` | Trigger the next event in the workflow | 
