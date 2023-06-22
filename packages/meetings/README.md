# Vonage Meetings SDK for Node.js

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/vonage/vonage-node-sdk/Vonage/3.x?logo=github&style=flat-square&label=Workflow%20Build)
[![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk)
![Latest Release](https://img.shields.io/npm/v/@vonage/meetings)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/npm/l/@vonage/meetings?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Meetings SDK for Node.js for use with
[Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage
account. Sign up [for free at vonage.com][signup].

We recommend using this package as part of the overall [
`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk).

For full API documentation refer to [developer.nexmo.com](https://developer.nexmo.com/).

* [Installation](#installation)
* [Usage](#using-the-vonage-number-sdk)
* [Theme Files](#uploading-theme-images)
* [Promises](#promises)
* [Testing](#testing)

## Installation

We recommend using this SDK as part of the overall [
`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk).
Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the
Meetings API.

### With NPM

```bash
npm install @vonage/meetings
```

### With Yarn

```bash
yarn add @vonage/meetings
```

## Using the Vonage Meetings SDK

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it
as the `meetings` property off of the client that you instantiate.

```js
const { Vonage, Auth } = require('@vonage/server-sdk');

const credentials = new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET
});
const options = {};
const vonage = new Vonage(credentials, options);

(async () =>{
  for await (const room of vonage.meetings.getRooms()) {
    console.log(room);
  }
})();


```

### Standalone

The SDK can be used standalone from the main
[Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if
you only need to use the Meetings API. All you need to do is
`require('@vonage/meetings')`, and use the returned object to create your own
client.

```js
const { Auth } = require('@vonage/auth');
const { Meetings } = require('@vonage/meetings');

const credentials = new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET
});
const options = {};

const meetingsClient = new Meetings(credentials, options);
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/readme/packages/auth#options),
and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/tree/3.x/readme/packages/server-client#options)

## Uploading theme images

The SDK will handle all the steps for uploading images to your theme. All you need to do is pass in the `themeId`, `logoType` and the path the image file:

```js
const { Auth } = require('@vonage/auth');
const { Meetings, LogoType } = require('@vonage/meetings');

const credentials = new Auth({
    apiKey: API_KEY,
    apiSecret: API_SECRET
});
const options = {};

const meetingsClient = new Meetings(credentials, options);

(async () => {
	await meetingsClient.uploadIcon('my-theme', LogoType.WHITE, '/path/to/image.png'),
})()
```

For more information see [Uploading Icons and Logos](https://developer.vonage.com/en/meetings/code-snippets/theme-management#uploading-icons-and-logos)

## Promises

Most methods that interact with the Vonage API uses Promises. You can either
resolve these yourself, or use `await` to wait for a response.

```js
const resp = await vonage.meetings.getRoom(roomId);

vonage.meetings.getRoom(roomId)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
