# How to use the examples

The examples are here for two reasons:

1. To help with testing against the live API - maybe full integration tests will be created at some point
2. To demonstrate how to use the API

Some examples are convoluted because they require a web server to be running and that web server to have a public IP address. This adds complexity. It also adds the requirement of using [ngrok](https://ngrok.com/).

Looking for more focused examples? Head to the [Nexmo Node Quickstarts rep][quickstarts]

That said, the naming of the files should make it clear what each example will demonstrate.

## Usage

Copy `example.env` and rename to `.env` and add the appropriate values.

Take a look at `run-examples.js`. This file can be run using:

```bash
node run-examples.js
```

### All examples

If you want to run all the `exampleFiles` override is commented out and that `runNextExample()` is called. This will load and run all modules with an `ex-` prefix.

### Selectively running examples

To selectively run examples you should either run a single example, commenting out all other `run...` lines:

```js
runExample('ex-send-sms.js', console.log);
```

Update the `exampleFiles` array and make sure `runNextExample` is not commented out e.g.

```js
exampleFiles = [
  // 'ex-check-balance.js',
  // 'ex-create-update-delete-app.js',
  // 'ex-dtmf-to-call.js',
  // 'ex-get-apps.js',
  'ex-get-calls.js',
  'ex-make-call.js'
  // 'ex-number-insight-basic.js',
  // 'ex-send-sms.js',
  // 'ex-stream-to-call.js',
  // 'ex-talk-to-call.js'
];

runNextExample();
```

## Missing an example

[Raise an issue](../../../issues)

## More examples

You can find examples that are much more focused of achieving a single goal in the [Nexmo Node Quickstarts rep][quickstarts].

[quickstarts]: https://github.com/nexmo-community/nexmo-node-quickstart
