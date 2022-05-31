import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ShortCode from "../lib/ShortCode";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);

var creds = Credentials.parse({
  apiKey: "some-key",
  apiSecret: "some-secret",
});
var emptyCallback = () => {};

describe("ShortCode", () => {
  var httpClientStub = null;
  var shortcode = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      logger: {
        info: () => {},
      },
    };
    shortcode = new ShortCode(creds, options);
  });

  it("should throw if there is no recipient number", () => {
    let callback = sinon.spy();
    shortcode.shortcodeAlert(undefined, {}, undefined, callback);

    expect(callback).to.have.been.calledWith(
      sinon.match(new Error(ShortCode.ERROR_MESSAGES.to)),
      undefined
    );
  });

  it("should throw if there are no message parameters", () => {
    try {
      shortcode.shortcodeAlert("undefined", undefined, undefined);
    } catch (e) {
      expect(e.toString()).to.include("Invalid shortcode message parameters");
    }
  });

  it("should allow sending an alert via shortcode", () => {
    let recipient = "123456789";
    let messageParams = { some: "param" };
    let opts = { type: "text" };
    shortcode.shortcodeAlert(recipient, messageParams, opts, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/sc/us/alert/json?type=text&some=param&to=123456789&api_key=some-key&api_secret=some-secret",
      }),
      "POST"
    );
  });

  it("should allow host override when sending an alert via shortcode", () => {
    let recipient = "123456789";
    let messageParams = { some: "param" };
    let opts = { type: "text" };
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      restHost: "rest.example.com",
      logger: {
        info: () => {},
      },
    };
    let shortcode = new ShortCode(creds, options);
    shortcode.shortcodeAlert(recipient, messageParams, opts, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.example.com",
        path: "/sc/us/alert/json?type=text&some=param&to=123456789&api_key=some-key&api_secret=some-secret",
      }),
      "POST"
    );
  });

  it("should allow sending a 2fa message via shortcode", () => {
    let recipient = "123456789";
    let messageParams = { some: "param" };
    let opts = { type: "text" };
    shortcode.shortcode2FA(recipient, messageParams, opts, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/sc/us/2fa/json?type=text&some=param&to=123456789&api_key=some-key&api_secret=some-secret",
      }),
      "POST"
    );
  });

  it("should allow host override when sending a 2fa message via shortcode", () => {
    let recipient = "123456789";
    let messageParams = { some: "param" };
    let opts = { type: "text" };
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      restHost: "rest.example.com",
      logger: {
        info: () => {},
      },
    };
    let shortcode = new ShortCode(creds, options);
    shortcode.shortcode2FA(recipient, messageParams, opts, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.example.com",
        path: "/sc/us/2fa/json?type=text&some=param&to=123456789&api_key=some-key&api_secret=some-secret",
      }),
      "POST"
    );
  });

  it("should allow sending a marketing message via shortcode", () => {
    let recipient = "123456789";
    let messageParams = { some: "param" };
    let opts = { type: "text" };
    shortcode.shortcodeMarketing(recipient, messageParams, opts, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/sc/us/marketing/json?type=text&some=param&to=123456789&api_key=some-key&api_secret=some-secret",
      }),
      "POST"
    );
  });

  it("should allow host override when sending a marketing message via shortcode", () => {
    let recipient = "123456789";
    let messageParams = { some: "param" };
    let opts = { type: "text" };
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      restHost: "rest.example.com",
      logger: {
        info: () => {},
      },
    };
    let shortcode = new ShortCode(creds, options);
    shortcode.shortcodeMarketing(recipient, messageParams, opts, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.example.com",
        path: "/sc/us/marketing/json?type=text&some=param&to=123456789&api_key=some-key&api_secret=some-secret",
      }),
      "POST"
    );
  });
});
