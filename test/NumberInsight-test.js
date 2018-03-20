import NumberInsight from "../lib/NumberInsight";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("NumberInsight", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.numberInsight = new NumberInsight(TestUtils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  describe("#basic", function() {
    it("should call the correct endpoint", function() {
      return expect(this.numberInsight)
        .method("basic")
        .withParams("14155550100")
        .to.get.url("/ni/basic/json?number=14155550100");
    });
  });

  describe("#standard", function() {
    it("should call the correct endpoint", function() {
      return expect(this.numberInsight)
        .method("standard")
        .withParams("14155550100")
        .to.get.url("/ni/standard/json?number=14155550100");
    });
  });

  describe("#advanced", function() {
    it("should call the correct endpoint", function() {
      return expect(this.numberInsight)
        .method("advanced")
        .withParams("14155550100")
        .to.get.url("/ni/advanced/json?number=14155550100");
    });
  });

  describe("#advancedAsync", function() {
    it("should call the correct endpoint", function() {
      return expect(this.numberInsight)
        .method("advancedAsync")
        .withParams("14155550100", "https://example.com")
        .to.get.url(
          "/ni/advanced/async/json?number=14155550100&callback=https%3A%2F%2Fexample.com"
        );
    });
  });
});
