import Verify from "../lib/Verify";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Verify", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.verify = new Verify(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  describe("#request", function() {
    it("should call the correct endpoint", function() {
      return expect(this.verify)
        .method("request")
        .withParams({ number: "14155550100", brand: "Testing" })
        .to.post.url("/verify/json?number=14155550100&brand=Testing");
    });
  });

  describe("#check", function() {
    it("should call the correct endpoint", function() {
      return expect(this.verify)
        .method("check")
        .withParams({ request_id: "REQ999", code: "1928" })
        .to.post.url("/verify/check/json?request_id=REQ999&code=1928");
    });
  });

  describe("#control", function() {
    it("should call the correct endpoint", function() {
      return expect(this.verify)
        .method("control")
        .withParams({ number: "14155550100", cmd: "skip" })
        .to.post.url("/verify/control/json?number=14155550100&cmd=skip");
    });
  });

  describe("#search", function() {
    it("should call the correct endpoint (single ID)", function() {
      return expect(this.verify)
        .method("search")
        .withParams("ABC123")
        .to.post.url("/verify/search/json?request_id=ABC123");
    });

    it("should call the correct endpoint (single ID in list)", function() {
      return expect(this.verify)
        .method("search")
        .withParams(["ABC123"])
        .to.post.url("/verify/search/json?request_id=ABC123");
    });

    it("should call the correct endpoint (list)", function() {
      return expect(this.verify)
        .method("search")
        .withParams(["ABC123", "DEF456"])
        .to.post.url(
          "/verify/search/json?request_ids=ABC123&request_ids=DEF456"
        );
    });
  });
});
