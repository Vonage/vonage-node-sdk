import Number from "../lib/Number";

import { expect, sinon, TestUtils } from "./VonageTestUtils";

describe("Number _pricing", function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.number = new Number(TestUtils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  it("should call the correct endpoint for getPricing", function() {
    return expect(this.number)
      .method("getPricing")
      .withParams("sms", "GB")
      .to.get.url("/account/get-pricing/outbound/sms?country=GB");
  });

  it("should call the correct endpoint for getPhonePricing", function() {
    return expect(this.number)
      .method("getPhonePricing")
      .withParams("sms", "442038659460")
      .to.get.url("/account/get-phone-pricing/outbound/sms?phone=442038659460");
  });
});
