# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You can continue to use the `@vonage/server-sdk` package or now use the Accounts SDK as a standalone package. If you would like to continue to use the full SDK, simply update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/accounts
```
## Setup

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage API Key and Secret. Setup is the same for any other key/secret-based application. The accounts client will then be available as `vonage.accounts`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
});

vonage.accounts.getBalance()
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
```

Please note that the accessor has changed from `vonage.account` to `vonage.accounts`.

The Secrets API is also now accessed differently, and has moved from `vonage.account` to `vonage.secrets`.

### Standalone
This module is also capable of working as a standalone module. The only difference is that you create an `Accounts` or `Secrets` object and pass the credentials there.

```js
const { Accounts, Secrets } = require('@vonage/accounts');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers will need to convert their callbacks to work with the responses returned from the calls. 

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| `vonage.account.getBalance()` | `vonage.accounts.getBalance()` |  |
| `vonage.account.changePassword()` | N/A | You will need to delete and create a secret |
| `vonage.account.updateSMSCallback()` | `vonage.accounts.updateAccountCallbacks()` | The new method allows multiple callbacks to be updated at once  |
| `vonage.account.updateDeliveryReceiptCallback()` | `vonage.accounts.updateAccountCallbacks()` | The new method allows multiple callbacks to be updated at once  |
| `vonage.account.topUp()` | `vonage.accounts.topUpBalance()` | The method was renamed to better reflect what is being topped up  |
| `vonage.account.listSecrets()` | `vonage.secrets.listSecrets()` | This method was moved to the `secrets` accessor |
| `vonage.account.getSecret()` | `vonage.secrets.getSecret()` | This method was moved to the `secrets` accessor |
| `vonage.account.deleteSecret()` | `vonage.secrets.deleteSecret()` | This method was moved to the `secrets` accessor |
| - | `vonage.secrets.createSecret()` | This method was added to allow secret creation |