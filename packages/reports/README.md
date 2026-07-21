# Vonage Reports SDK for Node.js

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vonage/vonage-node-sdk/ci.yml?branch=3.x) [![Codecov](https://img.shields.io/codecov/c/github/vonage/vonage-node-sdk?label=Codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/Vonage/vonage-server-sdk) ![Latest Release](https://img.shields.io/npm/v/@vonage/reports?label=%40vonage%2Freports&style=flat-square) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg?style=flat-square)](../../CODE_OF_CONDUCT.md) [![License](https://img.shields.io/npm/l/@vonage/accounts?label=License&style=flat-square)][license]

<img src="https://developer.nexmo.com/images/logos/vbc-logo.svg" height="48px" alt="Vonage" />

This is the Vonage Reports SDK for Node.js for use with [Vonage APIs](https://www.vonage.com/). To use it you will need a Vonage account. Sign up [for free at vonage.com][signup].

For full API documentation refer to [developer.vonage.com](https://developer.vonage.com/).

* [Installation](#installation)
* [Usage](#usage)
* [Promises](#promises)
* [Supported Products](#supported-products)
* [Testing](#testing)

## Installation

We recommend using this SDK as part of the overall [`@vonage/server-sdk` package](https://github.com/vonage/vonage-node-sdk). Please see the main package for installation.

You can also use this SDK standalone if you only need access to just the Reports API.

### With NPM

```bash
npm install @vonage/reports
```

### With Yarn

```bash
yarn add @vonage/reports
```

## Usage

### As part of the Vonage Server SDK

If you are using this SDK as part of the Vonage Server SDK, you can access it as the `reports` property off of the client that you instantiate.

```js
const { Vonage } = require('@vonage/server-sdk');
const { Auth } = require('@vonage/auth');

const vonage = new Vonage(new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
}));

const response = await vonage.reports.getRecords({
  product: 'SMS',
  accountId: API_KEY,
  dateStart: '2024-01-01T00:00:00Z',
  dateEnd: '2024-02-01T00:00:00Z',
});
```

### Standalone

The SDK can be used standalone from the main [Vonage Server SDK for Node.js](https://github.com/vonage/vonage-node-sdk) if you only need to use the Reports API. All you need to do is `require('@vonage/reports')`, and use the returned object to create your own client.

```js
const { Auth } = require('@vonage/auth');
const { Reports } = require('@vonage/reports');

const credentials = new Auth({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
});
const options = {};

const reportsClient = new Reports(credentials, options);
```

Where `credentials` is any option from [`@vonage/auth`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/auth/README.md#options), and `options` is any option from [`@vonage/server-client`](https://github.com/Vonage/vonage-node-sdk/blob/3.x/packages/server-client/README.md#options)

## Promises

Most methods that interact with the Vonage API use Promises. You can either resolve these yourself, or use `await` to wait for a response.

```js
const resp = await reportsClient.getRecords({
  product: 'SMS',
  accountId: API_KEY,
  dateStart: '2024-01-01T00:00:00Z',
  dateEnd: '2024-02-01T00:00:00Z',
});

reportsClient.getRecords({
  product: 'SMS',
  accountId: API_KEY,
  dateStart: '2024-01-01T00:00:00Z',
  dateEnd: '2024-02-01T00:00:00Z',
})
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

## Supported Products

The Reports API supports generating reports and records for the following Vonage products:

| Product                  | Sync Records | Async Report |
|--------------------------|:------------:|:------------:|
| SMS                      | ✅           | ✅           |
| Voice (Call)             | ✅           | ✅           |
| Voice (ASR)              | ✅           | ✅           |
| Voice (AMD)              | ✅           | ✅           |
| Voice (WebSocket)        | ✅           | ✅           |
| In-App Voice             | ✅           | ✅           |
| Verify API               | ✅           | ✅           |
| Verify API V2            | ✅           | ✅           |
| Number Insight           | ✅           | ✅           |
| Conversations (Events)   | ✅           | ✅           |
| Conversations (Messages) | ✅           | ✅           |
| Network API Events       | ✅           | ✅           |
| SMS Traffic Control      | ✅           | ✅           |
| Video API                | ✅           | ✅           |
| Reports (Usage)          | ✅           | ✅           |

### Synchronous Records

Use `getRecords` for frequent, periodic retrieval of smaller data sets (up to tens of thousands of records per query):

```js
const response = await reportsClient.getRecords({
  product: 'SMS',
  accountId: API_KEY,
  dateStart: '2024-01-01T00:00:00Z',
  dateEnd: '2024-01-02T00:00:00Z',
});

console.log(`Total records: ${response.itemsCount}`);
for (const record of response.records) {
  console.log(record.id, record.status);
}
```

### Asynchronous Reports

Use `createReport` for infrequent, large data queries (up to tens of millions of records). The report is generated in the background and can be polled with `getReport`. Vonage recommends limiting queries to a maximum of 7 million records.

```js
// Create the report
const report = await reportsClient.createReport({
  product: 'SMS',
  accountId: API_KEY,
  dateStart: '2024-01-01T00:00:00Z',
  dateEnd: '2024-02-01T00:00:00Z',
  callbackUrl: 'https://example.com/webhook',
});

console.log(`Report ID: ${report.requestId}`);

// Poll until complete
let status = await reportsClient.getReport(report.requestId);

while (status.requestStatus === 'PENDING' || status.requestStatus === 'PROCESSING') {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  status = await reportsClient.getReport(report.requestId);
}

console.log(`Download: ${status.links.downloadReport?.href}`);

// Cancel a pending report
await reportsClient.cancelReport(report.requestId);
```

## Testing

Run:

```bash
npm run test
```

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=node-server-sdk
[license]: ../../LICENSE.txt
