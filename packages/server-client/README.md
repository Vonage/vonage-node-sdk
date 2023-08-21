# Vonage Auth SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/server-client?label=%40vonage%2Fserver-client&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Server Client SDK for Node.js used to wrap the authentication
headers/signatures for use with [Vonage APIs](https://www.vonage.com/). To use
it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
  * [Options](#options)
* [File Downloads](#file-downloads)
* [Testing](#testing)

## Installation

### With NPM

```bash
npm install @vonage/server-client
```

### With Yarn

```bash
yarn add @vonage/server-client
```

## Usage

To create a client, you will need to pass in a `@vonage/auth` object.

```js
const { Auth } = require('@vonage/auth');
const { Client } = require('@vonage/server-client');

const vonageClient = new Client (new Auth({
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        applicationId: APP_ID,
        privateKey: PRIVATE_KEY_PATH,
    }),
    options,
);
```

You will now be able to send requests using the client:

```js
const response = await vonageClient.sendGetRequest('https://rest.nexmo.com/account/numbers')
```

### Options

The constructor for the client takes in two parameters `credentials` and
`options`. `credentials` is either an [`Auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/lib/auth.ts#L13)
or an `object` containing the settings from [`AuthInterface`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/lib/types.ts#L35).

`options` allows adjusting api endpoints and the request timeout.

* `restHost: string` (optional) - Allows overwriting the default `https://rest.nexmo.com`.
* `apiHost: string` (optional) - Allows overwriting the default `https://api.nexmo.com`.
* `videoHost: string` (optional) - Allows overwriting the default `https://video.api.vonage.com`.
* `timeout: int` (optional) - Set a custom timeout for requests to Vonage in
  milliseconds. Defaults to the standard for Node http requests, which is
  120,000 ms.
* `appendUserAgent: string` (optional) - Set a custom string to be added to the
  `user-agent` header for the request

## File Downloads

When downloading files, the request needs to be built with proper security
headers set. Inside this package is the `FileClient` which will handle the
request. You can download a file using the File Id or the FQURL.

```js
const { Auth } = require('@vonage/auth');
const { FileClient } = require('@vonage/server-client');

const fileClient = new FileClient(new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
  }),
  options,
);

await fileClient.downloadFile('the-file-id-or-url', '/paht/to/save');
```

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
