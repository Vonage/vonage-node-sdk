# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You can continue to use the `@vonage/server-sdk` package or now use the Accounts SDK as a standalone package. If you would like to continue to use the full SDK, simply update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/applications
```
## Setup

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage API Key and Secret. Setup is the same for any other key/secret-based application. The applications client will then be available as `vonage.applications`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
});

vonage.applications.listApplications()
    .then(resp => console.log(resp))
    .catch(err => console.error(err));
```

### Standalone
This module is also capable of working as a standalone module. The only difference is that you create an `Applications` object and pass the credentials there.

```js
const { Appliations } = require('@vonage/applications');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers will need to convert their callbacks to work with the responses returned from the calls. 

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| `vonage.applications.create()` | `vonage.applications.createApplication()` | The method has been renamed, and now takes an Application object instead of individual parameters |
| `vonage.applications.get()` | `vonage.applications.getApplication()` | The method has been renamed, and now takes an Application ID to return just the single application object |
| `vonage.applications.update()` | `vonage.applications.updateApplication()` | The method has been renamed, and now takes an Application object instead of individual parameters |
| `vonage.applications.delete()` | `vonage.applications.deleteApplication()` | The method has been renamed |
| - | `vonage.applications.listApplication()` | The method has been added to allow searching and listing of applications |
