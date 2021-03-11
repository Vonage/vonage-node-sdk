import Number from "../lib/Number";

import VonageStub from "./VonageStub";

import { expect, sinon, TestUtils } from "./VonageTestUtils";

var numberAPIs = {
  getNumbers: "get",
  searchNumbers: "search",
  buyNumber: "buy",
  cancelNumber: "cancel",
  updateNumber: "update",
};

var pricingAPIs = {
  get: "getPricing",
  getPhone: "getPhonePricing",
};

describe("Number Object", function () {
  it("should implement all v1 APIs", function () {
    VonageStub.checkAllFunctionsAreDefined(numberAPIs, Number);
  });

  it("should implement legacy pricing APIs", function () {
    VonageStub.checkAllFunctionsAreDefined(pricingAPIs, Number);
  });

  it("should proxy the function call to the underlying `vonage` object", function () {
    VonageStub.checkAllFunctionsAreCalled(numberAPIs, Number);
  });
});

describe("Number _pricing", function () {
  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.number = new Number(TestUtils.getCredentials(), {
      rest: this.httpClientStub,
    });
  });

  afterEach(function () {
    this.sandbox.restore();
  });

  it("should call the correct endpoint for getPricing", function () {
    return expect(this.number)
      .method("getPricing")
      .withParams("sms", "GB")
      .to.get.url("/account/get-pricing/outbound/sms?country=GB");
  });

  it("should call the correct endpoint for getPhonePricing", function () {
    return expect(this.number)
      .method("getPhonePricing")
      .withParams("sms", "442038659460")
      .to.get.url("/account/get-phone-pricing/outbound/sms?phone=442038659460");
  });
});
