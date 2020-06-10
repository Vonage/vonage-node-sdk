import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import Number from "../lib/Number";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

import ResourceTestHelper from "./ResourceTestHelper";

chai.use(sinonChai);

var creds = Credentials.parse({
  apiKey: "some-key",
  apiSecret: "some-secret"
});
var emptyCallback = () => {};

describe("Number", () => {
  var httpClientStub = null;
  var number = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      logger: {
        info: () => {}
      }
    };
    number = new Number(creds, options);
  });

  it("should throw if there are no parameters when getting numbers", () => {
    try {
      number.get();
    } catch (e) {
      expect(e.toString()).to.include(
        "Options parameter should be a dictionary. Check the docs for valid properties for options"
      );
    }
  });

  it("should throw if there is no country code when searching numbers", () => {
    try {
      number.search();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Country Code");
    }
  });

  it("should throw if there is no country code when buying numbers", () => {
    try {
      number.buy();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Country Code");
    }
  });

  it("should throw if there is no country code when cancelling numbers", () => {
    try {
      number.cancel();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Country Code");
    }
  });

  it("should throw if there is no country code when updating numbers", () => {
    try {
      number.update();
    } catch (e) {
      expect(e.toString()).to.include("Invalid Country Code");
    }
  });

  it("should throw if there is no MSISDN when updating numbers", () => {
    try {
      number.update("GB");
    } catch (e) {
      expect(e.toString()).to.include("Invalid MSISDN passed");
    }
  });

  it("should throw if there is no MSISDN when buying numbers", () => {
    try {
      number.buy("GB");
    } catch (e) {
      expect(e.toString()).to.include("Invalid MSISDN passed");
    }
  });

  it("should throw if there is no MSISDN when cancelling numbers", () => {
    try {
      number.cancel("GB");
    } catch (e) {
      expect(e.toString()).to.include("Invalid MSISDN passed");
    }
  });

  it("should throw if the country code is not 2 letters when searching numbers", () => {
    try {
      number.search("G");
    } catch (e) {
      expect(e.toString()).to.include("Invalid Country Code");
    }
  });

  it("should allow getting account numbers", () => {
    number.get({}, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path: "/account/numbers?api_key=some-key&api_secret=some-secret"
      })
    );
  });

  it("should allow getting account numbers without options", () => {
    number.get(emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path: "/account/numbers?api_key=some-key&api_secret=some-secret"
      })
    );
  });
  it("should allow searching available numbers", () => {
    number.search("GB", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path:
          "/number/search?api_key=some-key&api_secret=some-secret&country=GB"
      })
    );
  });

  it("should allow searching available numbers with a pattern", () => {
    number.search("GB", "222", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path:
          "/number/search?api_key=some-key&api_secret=some-secret&country=GB&pattern=222"
      })
    );
  });

  it("should allow searching available numbers with options", () => {
    number.search("GB", { pattern: "222" }, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path:
          "/number/search?api_key=some-key&api_secret=some-secret&country=GB&pattern=222"
      })
    );
  });

  it("should allow buying available numbers", () => {
    number.buy("GB", "1234", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path:
          "/number/buy?country=GB&msisdn=1234&api_key=some-key&api_secret=some-secret"
      })
    );
  });

  it("should allow cancelling available numbers", () => {
    number.cancel("GB", "1234", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path:
          "/number/cancel?country=GB&msisdn=1234&api_key=some-key&api_secret=some-secret"
      })
    );
  });

  it("should allow updating available numbers", () => {
    number.update("GB", "1234", {}, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        path:
          "/number/update?country=GB&msisdn=1234&api_key=some-key&api_secret=some-secret"
      })
    );
  });
});
