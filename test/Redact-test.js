import Redact from "../lib/Redact";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Redact", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.redact = new Redact(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  afterEach(function() {
    this.httpClientStub.request.restore();
  });

  describe("#transaction", function() {
    it("should work with no optional fields", function() {
      return expect(this.redact)
        .method("transaction")
        .withParams("ABC123", "voice")
        .to.post.withJsonBody({ id: "ABC123", product: "voice" })
        .to.url(`${Redact.PATH}/transaction`);
    });

    it("should pass through optional fields", function() {
      return expect(this.redact)
        .method("transaction")
        .withParams("ABC123", "voice", { type: "outbound" })
        .to.post.withJsonBody({
          id: "ABC123",
          product: "voice",
          type: "outbound"
        })
        .to.url(`${Redact.PATH}/transaction`);
    });
  });
});
