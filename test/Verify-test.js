import Verify from "../lib/Verify";
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
  apiSecret: "some-secret",
});
var emptyCallback = () => {};

describe("Verify", () => {
  var httpClientStub = null;
  var verify = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      logger: {
        info: () => {},
      },
    };
    verify = new Verify(creds, options);
  });

  it("should throw if there is no params for request", () => {
    try {
      verify.request({});
    } catch (e) {
      expect(e.toString()).to.include(
        "Missing Mandatory fields (number and/or brand)"
      );
    }
  });

  it("should throw if there is no params for check", () => {
    try {
      verify.check({});
    } catch (e) {
      expect(e.toString()).to.include(
        "Missing Mandatory fields (request_id and/or code)"
      );
    }
  });

  it("should throw if there is no params for control", () => {
    try {
      verify.control({});
    } catch (e) {
      expect(e.toString()).to.include(
        "Missing Mandatory fields (request_id and/or cmd-command)"
      );
    }
  });

  it("should throw if there is no params for search", () => {
    try {
      verify.search();
    } catch (e) {
      expect(e.toString()).to.include(
        "Missing Mandatory fields (request_id or request_ids)"
      );
    }
  });

  it("should allow sending a verify request", () => {
    verify.request({ number: "123", brand: "acme" }, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/json?number=123&brand=acme&api_key=some-key&api_secret=some-secret",
      })
    );
  });

  it("should allow sending a psd2verify request", () => {
    verify.psd2(
      { number: "123", payee: "acme", amount: "amount" },
      emptyCallback
    );

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/psd2/json?number=123&payee=acme&amount=amount&api_key=some-key&api_secret=some-secret",
      })
    );
  });

  it("should allow checking a verify request", () => {
    verify.check({ request_id: "123", code: "1234" }, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/check/json?request_id=123&code=1234&api_key=some-key&api_secret=some-secret",
      })
    );
  });

  it("should allow controlling a verify request", () => {
    verify.control({ request_id: "123", cmd: "test" }, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/control/json?request_id=123&cmd=test&api_key=some-key&api_secret=some-secret",
      })
    );
  });

  it("should allow searching by id for a verify request", () => {
    verify.search("123", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/search/json?request_id=123&api_key=some-key&api_secret=some-secret",
      })
    );
  });

  it("should allow searching by single id array for a verify request", () => {
    verify.search(["123"], emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/search/json?request_id=123&api_key=some-key&api_secret=some-secret",
      })
    );
  });

  it("should allow searching by ids for a verify request", () => {
    verify.search(["123", "456"], emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "api.nexmo.com",
        path:
          "/verify/search/json?request_ids=123&request_ids=456&api_key=some-key&api_secret=some-secret",
      })
    );
  });
});
