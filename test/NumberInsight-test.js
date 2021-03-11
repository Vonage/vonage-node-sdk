import NumberInsight from "../lib/NumberInsight";
import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

import ResourceTestHelper from "./ResourceTestHelper";

chai.use(sinonChai);

var creds = Credentials.parse({
  apiKey: "some-key",
  apiSecret: "some-secret"
});
var emptyCallback = () => {};

describe("NumberInsight", () => {
  var httpClientStub = null;
  var numberInsight = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      logger: {
        info: () => {}
      }
    };
    numberInsight = new NumberInsight(creds, options);
  });

  it("should throw if there is no number for basic numberInsights", () => {
    try {
      numberInsight.get({});
    } catch (e) {
      expect(e.toString()).to.include("Missing Mandatory field - number");
    }
  });

  it("should throw if there is no params for basic numberInsights", () => {
    try {
      numberInsight.get("");
    } catch (e) {
      expect(e.toString()).to.include(
        "Number can contain digits and may include any or all of the following: white space, -,+, (, )."
      );
    }
  });

  it("should throw if there is no number format for basic numberInsights", () => {
    try {
      numberInsight.get({ level: "basic", number: "test" });
    } catch (e) {
      expect(e.toString()).to.include(
        "Number can contain digits and may include any or all of the following: white space, -,+, (, )."
      );
    }
  });

  it("should throw if there is no number for advanced numberInsights", () => {
    try {
      numberInsight.get({ level: "advanced" });
    } catch (e) {
      expect(e.toString()).to.include(
        "Missing Mandatory fields (number and/or callback url)"
      );
    }
  });

  it("should throw if there is no callback for advanced numberInsights", () => {
    try {
      numberInsight.get({ level: "advanced", number: "123456789" });
    } catch (e) {
      expect(e.toString()).to.include(
        "Missing Mandatory fields (number and/or callback url)"
      );
    }
  });

  it("should allow getting basic numberInsights", () => {
    numberInsight.get({ level: "basic", number: "123456789" }, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/ni/basic/json?number=123456789&api_key=some-key&api_secret=some-secret"
      })
    );
  });

  it("should allow getting standard numberInsights", () => {
    numberInsight.get(
      { level: "standard", number: "123456789" },
      emptyCallback
    );

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/ni/standard/json?number=123456789&api_key=some-key&api_secret=some-secret"
      })
    );
  });

  it("should allow getting advanced numberInsights", () => {
    numberInsight.get(
      {
        level: "advanced",
        number: "123456789",
        callback: "http://example.com"
      },
      emptyCallback
    );

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/ni/advanced/async/json?number=123456789&callback=http%3A%2F%2Fexample.com&api_key=some-key&api_secret=some-secret"
      })
    );
  });

  it("should allow getting advancedSync numberInsights", () => {
    numberInsight.get(
      { level: "advancedSync", number: "123456789" },
      emptyCallback
    );

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/ni/advanced/json?number=123456789&api_key=some-key&api_secret=some-secret"
      })
    );
  });
});
