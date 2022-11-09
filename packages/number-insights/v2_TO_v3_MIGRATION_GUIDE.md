# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You can continue to use the `@vonage/server-sdk` package or now use the Messages SDK as a standalone package. If you would like to continue to use the full SDK, simply update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/number-insights
```
## Setup

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage API Key and Secret. The messages client will then be available as `vonage.numberInsights`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
});

vonage.numberInsights.basicLookup(PHONE_NUMBER)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

Please note that the accessor has changed from `vonage.numberInsight` to `vonage.numberInsights`.

### Standalone
This module is also capable of working as a standalone module. The only difference is that you create an `NumberInsights` object and pass the credentials there.

```js
const { NumberInsights } = require('@vonage/number-insights');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers will need to convert their callbacks to work with the responses returned from the calls. 

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| `vonage.numberInsight.get()` | - | This method has been expanded to individual lookup types, which now take a phone number as a primary parameter and then an object of additional options |
| - | `vonage.numberInsights.advancedLookup()` | This method allows an syncronous advanced lookup, and takes a phone number and an optional object of additional options |
| - | `vonage.numberInsights.asyncAdvancedLookup()` | This method allows an asyncronous advanced lookup, and takes a phone number and an optional object of additional options |
| - | `vonage.numberInsights.basicLookup()` | This method allows an syncronous basic lookup, and takes a phone number and an optional object of additional options |
| - | `vonage.numberInsights.standardLookup()` | This method allows an syncronous standard lookup, and takes a phone number and an optional object of additional options |

