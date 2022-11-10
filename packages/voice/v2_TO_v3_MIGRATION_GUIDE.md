# Migration guide from Vonage Node SDK 2.x to 3.x

## Installation

The package name has changed, and is now a companion to the core Vonage Node SDK. You can continue to use the `@vonage/server-sdk` package or now use the Voice SDK as a standalone package. If you would like to continue to use the full SDK, simply update the version number to `^3.0` and follow this migration guide.

If you would like to use this SDK as a standalone package, you can install it using:

```console
$ npm install @vonage/voice
```
## Setup

Please note that the accessor has changed from `vonage.calls` to `vonage.voice`, and that many of the 2.x `vonage.voice` methods have been removed.

### With the Vonage Server SDK
If you are using the main Vonage Node Server SDK, you will just need to configure it using a Vonage API Key and Secret. The messages client will then be available as `vonage.voice`.

```js
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
    applicationId: APP_ID,
    privateKey: PRIVATE_KEY_PATH,
});

vonage.voice.getCall(CALL_UUID)
  .then(resp => console.log(resp))
  .catch(err => console.error(err));
```

### Standalone
This module is also capable of working as a standalone module. The only difference is that you create an `Voice` object and pass the credentials there.

```js
const { Voice } = require('@vonage/voice');
```

Functionality-wise, the standalone version works just as the wrapped SDK version.

## Callbacks vs Promises

The Node SDK v3.x uses Promises instead of callbacks. Customers will need to convert their callbacks to work with the responses returned from the calls. 

## TypeScript

The module is fully written in TypeScript. While the users will be interacting with the transpiled JavaScript code, IDEs and TypeScript compilers should provide a better experience than previous versions of the Vonage Node Server SDK.

## Changed Methods

In the 2.x version of the SDK, `vonage.voice` was connected to an older API that no longer exists. This prompted the accessor `vonage.calls` for the modern Vonage Voice API. As this API handles much more than just making calls, the `vonage.voice` accessor has dropped support for the older API and now emcompasses what the `vonage.calls` accessor used to, to better align with the current name of the API.

| 2.x Method | 3.x Method | Notes |
|----------------|---------------|-------|
| `vonage.voice.sendTTSMessage()` | - | This method belongs to an API that no longer exists and has been removed | 
| `vonage.voice.sendTTSPromptWithCapture()` | - | This method belongs to an API that no longer exists and has been removed | 
| `vonage.voice.sendTTSPromptWithConfirm()` | - | This method belongs to an API that no longer exists and has been removed | 
| `vonage.voice.call()` | - | This method belongs to an API that no longer exists and has been removed | 
| `vonage.calls.create()` | `vonage.voice.createOutboundCall()` | This method was moved to the `vonage.voice` accessor, and now takes an `OutboundCall` object. It was renamed to be clearer in its intent | 
| - | `vonage.voice.getCall()` | This method was moved to the `vonage.voice` accessor, and now takes a call UUID to return a single call | 
| `vonage.calls.get()` | `vonage.voice.search()` | This method was renamed to better show what it does, and now will always return a list of calls matching the filter | 
| `vonage.calls.update()` | - | This method has been broken up into the various actions you can take to control a call, and has been removed | 
| - | `vonage.voice.transferCallWithNCCO()` | This method has been added to replace `vonage.calls.update()`, and will transfer a call using an NCCO object | 
| - | `vonage.voice.transferCallWithURL()` | This method has been added to replace `vonage.calls.update()`, and will transfer a call using an NCCO returned from a URL | 
| - | `vonage.voice.hangUpCall()` | This method has been added to replace `vonage.calls.update()`, and will hang up the requested call | 
| - | `vonage.voice.muteCall()` | This method has been added to replace `vonage.calls.update()`, and will mute the specified UUID | 
| - | `vonage.voice.unmuteCall()` | This method has been added to replace `vonage.calls.update()`, and will unmute the specified UUID | 
| - | `vonage.voice.earmuff()` | This method has been added to replace `vonage.calls.update()`, and will earmuff the specified UUID | 
| - | `vonage.voice.unearmuff()` | This method has been added to replace `vonage.calls.update()`, and will unearmuff the specified UUID | 
| - | `vonage.voice.playDTMF()` | This method has been added to play a DTMF string into a call | 
| - | `vonage.voice.playTTS()` | This method has been added to play a string of Text to Speech into a call | 
| - | `vonage.voice.streamAudio()` | This method has been added to play an audio file into a call | 
| - | `vonage.voice.stopStreamAudio()` | This method has been added to stop playing a streaming audio file | 

