import Account from "../lib/Account";

import NexmoStub from "./NexmoStub";

import sinon from "sinon";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import nexmoChai from "./NexmoChai";
import utils from "./NexmoUtils";
chai.use(sinonChai);
chai.use(nexmoChai);

describe("Account", function() {
  beforeEach(function() {
    this.httpClientStub = utils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.account = new Account(utils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  describe("checkBalance", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      this.account.checkBalance(() => {
        expect(this.httpClientStub.request).to.have.match.url(
          "/account/get-balance"
        );
        done();
      });
    });
  });

  describe("updatePassword", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      this.account.updatePassword("example_password", () => {
        expect(this.httpClientStub.request).to.have.match.url(
          "/account/settings?newSecret=example_password"
        );
        done();
      });
    });
  });

  describe("updateSMSCallback", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      this.account.updateSMSCallback("http://example.com/sms_callback", () => {
        expect(this.httpClientStub.request).to.have.match.url(
          "/account/settings?moCallBackUrl=http%3A%2F%2Fexample.com%2Fsms_callback"
        );
        done();
      });
    });
  });

  describe("updateDeliveryReceiptCallback", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      this.account.updateDeliveryReceiptCallback(
        "http://example.com/dr_callback",
        () => {
          expect(this.httpClientStub.request).to.have.match.url(
            "/account/settings?drCallBackUrl=http%3A%2F%2Fexample.com%2Fdr_callback"
          );
          done();
        }
      );
    });
  });

  describe("topUp", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      this.account.topUp("ABC123", () => {
        expect(this.httpClientStub.request).to.have.match.url(
          "/account/top-up?trx=ABC123"
        );
        done();
      });
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
