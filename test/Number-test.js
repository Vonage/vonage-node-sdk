import Number from "../lib/Number";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Number", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.number = new Number(TestUtils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  describe("#get", function() {
    it("should call the correct endpoint (no options)", function() {
      return expect(this.number)
        .method("get")
        .to.get.url("/account/numbers");
    });

    it("should call the correct endpoint (with options)", function() {
      return expect(this.number)
        .method("get")
        .withParams({ pattern: "4420" })
        .to.get.url("/account/numbers?pattern=4420");
    });
  });

  describe("#getPricing", function() {
    it("should call the correct endpoint", function() {
      return expect(this.number)
        .method("getPricing")
        .withParams("US")
        .to.get.url("/account/get-pricing/outbound?country=US");
    });
  });

  describe("#getPhonePricing", function() {
    it("should call the correct endpoint", function() {
      return expect(this.number)
        .method("getPhonePricing")
        .withParams("sms", "14155550100")
        .to.get.url(
          "/account/get-phone-pricing/outbound/sms/myKey/mySecret/14155550100"
        );
    });
  });

  describe("#search", function() {
    it("should call the correct endpoint (country only)", function() {
      return expect(this.number)
        .method("search")
        .withParams("US")
        .to.get.url("/account/numbers?country=US");
    });

    it("should call the correct endpoint (string pattern)", function() {
      return expect(this.number)
        .method("search")
        .withParams("US", "4420")
        .to.get.url("/account/numbers?pattern=4420&country=US");
    });

    it("should call the correct endpoint (string object)", function() {
      return expect(this.number)
        .method("search")
        .withParams("US", { pattern: "4420", search_pattern: "1" })
        .to.get.url(
          "/account/numbers?pattern=4420&search_pattern=1&country=US"
        );
    });
  });

  describe("#buy", function() {
    it("should call the correct endpoint", function() {
      return expect(this.number)
        .method("buy")
        .withParams("US", "14155550100")
        .to.post.url("/number/buy");
    });
  });

  describe("#cancel", function() {
    it("should call the correct endpoint", function() {
      return expect(this.number)
        .method("cancel")
        .withParams("US", "14155550100")
        .to.post.url("/number/cancel");
    });
  });

  describe("#update", function() {
    it("should call the correct endpoint", function() {
      return expect(this.number)
        .method("update")
        .withParams("US", "14155550100", { moHttpUrl: "https://example.com" })
        .to.post.url("/number/update");
    });
  });
});
