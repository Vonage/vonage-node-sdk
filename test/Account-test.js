import Account from "../lib/Account";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Account", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.account = new Account(TestUtils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  describe("checkBalance", function() {
    it("should call the correct endpoint", function() {
      return expect(this.account)
        .method("checkBalance")
        .to.get.url("/account/get-balance");
    });
  });

  describe("updatePassword", function() {
    it("should call the correct endpoint", function() {
      return expect(this.account)
        .method("updatePassword")
        .withParams("example_password")
        .to.post.to.url("/account/settings?newSecret=example_password");
    });
  });

  describe("updateSMSCallback", function() {
    it("should call the correct endpoint", function() {
      return expect(this.account)
        .method("updateSMSCallback")
        .withParams("http://example.com/sms_callback")
        .to.post.to.url(
          "/account/settings?moCallBackUrl=http%3A%2F%2Fexample.com%2Fsms_callback"
        );
    });
  });

  describe("updateDeliveryReceiptCallback", function() {
    it("should call the correct endpoint", function() {
      return expect(this.account)
        .method("updateDeliveryReceiptCallback")
        .withParams("http://example.com/dr_callback")
        .to.post.to.url(
          "/account/settings?drCallBackUrl=http%3A%2F%2Fexample.com%2Fdr_callback"
        );
    });
  });

  describe("topUp", function() {
    it("should call the correct endpoint", function() {
      return expect(this.account)
        .method("topUp")
        .withParams("ABC123")
        .to.post.to.url("/account/top-up?trx=ABC123");
    });

    it("returns data on a successful request", function(done) {
      const mockData = {
        // This is not accurate response as there are no examples in the docs
        // This test just shows that a successful response is passed through as expected
        success: true
      };

      this.httpClientStub.request.yields(null, mockData);
      this.account.topUp("trx-123", (err, data) => {
        expect(err).to.eql(null);
        expect(data).to.eql(mockData);
        done();
      });
    });

    it("returns an error on a failed request", function(done) {
      const mockData = {
        // This is not accurate response as there are no examples in the docs
        // This test just shows that a successful response is passed through as expected
        success: false
      };

      this.httpClientStub.request.yields(mockData, null);
      this.account.topUp("trx-123", (err, data) => {
        expect(err).to.eql(mockData);
        expect(data).to.eql(null);
        done();
      });
    });
  });
});
