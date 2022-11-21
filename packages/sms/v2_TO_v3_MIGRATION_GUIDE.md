# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed and is now a companion to the core Vonage Node SDK. You can continue to use the `@vonage/server-sdk` package or now use the SMS SDK as a standalone package. If you would like to continue to use the full SDK, update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/sms
```

## Setup

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will need to configure it using a Vonage API Key and Secret. The setup is the same for any other key/secret-based application. The SMS client will then be available as `vonage.sms`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    apKey: API_KEY,
    apiSecret: API_SECRET,
});

vonage.sms.send({
    to: TO_NUMBER,
    from: FROM_NUMBER,
    text: 'Sample SMS Text',
  })
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
```

### Standalone
This module is also capable of working as a standalone module. The only difference is that you create a `SMS` object and pass the credentials there.

```js
const { SMS } = require('@vonage/sms');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs. Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers need to convert their callbacks to work with the responses returned from the calls.

## TypeScript

The module is fully written in TypeScript. While the users will interact with the transpired JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| `vonage.sms.sendSms()` | `vonage.sms.send()` | This method has been renamed and now takes in a `SMSParams` object instead of individual parameters |
| `vonage.sms.sendBinaryMessage()` | _Removed_ |  This has been removed |
| `vonage.sms.sendWapPushMessage()` | _Removed_ |  This has been removed |
| `vonage.sms.search()` | _Removed_ |  This has been removed |
| `vonage.sms.searchRejections()` | _Removed_ |  This has been removed |
