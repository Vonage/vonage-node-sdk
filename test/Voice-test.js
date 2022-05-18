import Voice from "../lib/Voice";
import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

import ResourceTestHelper from "./ResourceTestHelper";

// var expectedRequestArgs = ResourceTestHelper.requestArgsMatch({
//   path: "/search/messages?ids=1&ids=2"
// });

chai.use(sinonChai);

var creds = Credentials.parse({
  apiKey: "some-key",
  apiSecret: "some-secret",
});
var emptyCallback = () => {};

describe("Voice", () => {
  var httpClientStub = null;
  var voice = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      logger: {
        info: () => {},
      },
    };
    voice = new Voice(creds, options);
  });

  it("should throw if there is no message for tts request", () => {
    try {
      voice.sendTTSMessage();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Text Message");
    }
  });

  it("should throw if there is no phone number for tts request", () => {
    try {
      voice.sendTTSMessage(undefined, "message");
    } catch (e) {
      expect(e.toString()).to.include("Invalid to address");
    }
  });

  it("should throw if there is no message for tts with capture request", () => {
    try {
      voice.sendTTSPromptWithCapture();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Text Message");
    }
  });

  it("should throw if there is no maxDigits for tts with capture request", () => {
    try {
      voice.sendTTSPromptWithCapture("123", "message");
    } catch (e) {
      expect(e.toString()).to.include("Invalid max digits for TTS prompt");
    }
  });

  it("should throw if there is no byeText for tts with capture request", () => {
    try {
      voice.sendTTSPromptWithCapture("123", "message", 4);
    } catch (e) {
      expect(e.toString()).to.include("Invalid bye text for TTS prompt");
    }
  });

  it("should throw if there is no message for tts with confirm request", () => {
    try {
      voice.sendTTSPromptWithConfirm();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Text Message");
    }
  });

  it("should throw if there is no maxDigits for tts with confirm request", () => {
    try {
      voice.sendTTSPromptWithConfirm("123", "message");
    } catch (e) {
      expect(e.toString()).to.include("Invalid max digits for TTS prompt");
    }
  });

  it("should throw if there is no pinCode for tts with confirm request", () => {
    try {
      voice.sendTTSPromptWithConfirm("123", "message", 4);
    } catch (e) {
      expect(e.toString()).to.include("Invalid pin code for TTS confirm");
    }
  });

  it("should throw if there is no byeText for tts with confirm request", () => {
    try {
      voice.sendTTSPromptWithConfirm("123", "message", 4, "1234");
    } catch (e) {
      expect(e.toString()).to.include("Invalid bye text for TTS prompt");
    }
  });

  it("should throw if there is no failedText for tts with confirm request", () => {
    try {
      voice.sendTTSPromptWithConfirm("123", "message", 4, "1234", "bbye");
    } catch (e) {
      expect(e.toString()).to.include("Invalid failed text for TTS confirm");
    }
  });

  it("should throw if there is no answerUrl for call request", () => {
    try {
      voice.call();
    } catch (e) {
      expect(e.toString()).to.include("Invalid answer URL for call");
    }
  });

  it("should allow making a call with a URL callback", () => {
    voice.call("123", "http://example.com");

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/call/json?answer_url=http%3A%2F%2Fexample.com&api_key=some-key&api_secret=some-secret&to=123",
      })
    );
  });
});
