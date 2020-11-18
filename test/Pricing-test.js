import Pricing from "../lib/Pricing";
import { expect, sinon, TestUtils } from "./VonageTestUtils";

//
describe("Pricing", function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.pricing = new Pricing(TestUtils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe("get", function() {
    it("should call the correct endpoint", function() {
      return expect(this.pricing)
        .method("get")
        .withParams("sms", "GB")
        .to.get.url("/account/get-pricing/outbound/sms?country=GB");
    });
  });

  describe("getPrefix", function() {
    it("should call the correct endpoint", function() {
      return expect(this.pricing)
        .method("getPrefix")
        .withParams("sms", "44")
        .to.get.url("/account/get-prefix-pricing/outbound/sms?prefix=44");
    });
  });

  describe("getFull", function() {
    it("should call the correct endpoint", function() {
      return expect(this.pricing)
        .method("getFull")
        .withParams("sms")
        .to.get.url("/account/get-full-pricing/outbound/sms");
    });
  });

  describe("getPhone", function() {
    it("should call the correct endpoint", function() {
      return expect(this.pricing)
        .method("getPhone")
        .withParams("sms", "442038659460")
        .to.get.url(
          "/account/get-phone-pricing/outbound/sms?phone=442038659460"
        );
    });
  });
});
