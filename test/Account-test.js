import Account from "../lib/Account";
import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger.js";

import ResourceTestHelper from "./ResourceTestHelper";
import NexmoStub from "./NexmoStub";

import sinon from "sinon";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

var accountAPIs = {
  checkBalance: "checkBalance",
  changePassword: "updatePassword",
  changeMoCallbackUrl: "updateSMSCallback",
  changeDrCallbackUrl: "updateDeliveryReceiptCallback"
};

describe("Account Object", function() {
  it("should implement all v1 APIs", function() {
    NexmoStub.checkAllFunctionsAreDefined(accountAPIs, Account);
  });

  it("should proxy the function call to the underlying `nexmo` object", function() {
    NexmoStub.checkAllFunctionsAreCalled(accountAPIs, Account);
  });
});

describe("Account", function() {
  beforeEach(function() {
    var creds = Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret"
    });

    this.httpClientStub = new HttpClient(
      {
        logger: new NullLogger()
      },
      creds
    );

    sinon.stub(this.httpClientStub, "request");

    var options = {
      rest: this.httpClientStub
    };

    this.account = new Account(creds, options);
  });

  describe("topUp", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      var expectedRequestArgs = ResourceTestHelper.requestArgsMatch({
        path: "/account/top-up?trx=ABC123"
      });

      this.account.topUp(
        "ABC123",
        function(err, data) {
          expect(this.httpClientStub.request).to.have.been.calledWith(
            sinon.match(expectedRequestArgs)
          );

          done();
        }.bind(this)
      );
    });

    it("returns data on a successful request", function(done) {
      const mockData = {
        // This is not accurate response as there are no examples in the docs
        // This test just shows that a successful response is passed through as expected
        success: true
      };

      this.httpClientStub.request.yields(null, mockData);
      this.account.topUp("trx-123", function(err, data) {
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
      this.account.topUp("trx-123", function(err, data) {
        expect(err).to.eql(mockData);
        expect(data).to.eql(null);
        done();
      });
    });
  });
});
