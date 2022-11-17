# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You can continue to use
the `@vonage/server-sdk` package or now use the Messages SDK as a standalone package. If you would like to continue to
use the full SDK, simply update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/messages
```

## Setup

### With the Vonage Server SDK

If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage API Key and Secret,
or an Application ID and Private Key. The messages client will then be available as `vonage.messages`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
});

vonage.messages.send({to: TO_NUMBER, from: FROM_NUMBER: channel: 'sms', text: MESSAGE})
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

### Standalone

This module is also capable of working as a standalone module. The only difference is that you create an `Messages`
object and pass the credentials there.

```js
const { Messages } = require('@vonage/messages');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers will need to convert their callbacks to work with the
responses returned from the calls.

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs
and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

There are no differences to the methods used for sending messages from 2.x to 3.x.

If you used the classes that were made available for different messages types in 2.x, you will want to update the
require statements to use:

    `@vonage/messages/dist/classes/`

instead of the older:

    `@vonage/server-sdk/lib/Messages`

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| N/A | N/A | N/A |

