import Message from "../lib/Message";
import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger.js";

import NexmoStub from "./NexmoStub";
import ResourceTestHelper from "./ResourceTestHelper";

import sinon from "sinon";
import chai, { expect } from "chai";

var smsAPIs = {
  sendBinaryMessage: "sendBinaryMessage",
  sendWapPushMessage: "sendWapPushMessage",
  sendTextMessage: "sendSms",
  shortcodeAlert: "shortcodeAlert",
  shortcode2FA: "shortcode2FA",
  shortcodeMarketing: "shortcodeMarketing"
};

describe("Message Object", function() {
  it("should implement all v1 APIs", function() {
    NexmoStub.checkAllFunctionsAreDefined(smsAPIs, Message);
  });

  it("should proxy the function call to the underlying `nexmo` object", function() {
    NexmoStub.checkAllFunctionsAreCalled(smsAPIs, Message);
  });
});

describe("Message", function() {
  beforeEach(function() {
    var creds = Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret"
    });

    this.httpClientStub = sinon.createStubInstance(HttpClient);

    var options = {
      rest: this.httpClientStub
    };

    this.message = new Message(creds, options);
  });

  describe("#search", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, { a: "b" });

      var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
        host: "rest.nexmo.com",
        path: "/search/message?id=0D00000068264896",
        method: "GET",
        body: "",
        headers: {
          "Content-Type": "application/json"
        }
      });

      this.message.search(
        "0D00000068264896",
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
        "message-id": "0D00000068264896",
        "account-id": "abc123",
        network: "23430",
        from: "TestTest",
        to: "442079460000",
        body: "Hello",
        price: "0.03330000",
        "date-received": "2017-11-24 15:09:30",
        "final-status": "DELIVRD",
        "date-closed": "2017-11-24 15:09:45",
        latency: 14806,
        type: "MT"
      };

      this.httpClientStub.request.yields(null, mockData);
      this.message.search("0D00000068264896", function(err, data) {
        expect(err).to.eql(null);
        expect(data).to.eql(mockData);
        done();
      });
    });

    it("returns an error when the connection fails", function(done) {
      const mockError = {
        body: {
          "error-code": "401",
          "error-code-label": "authentication failed"
        },
        headers: {
          "content-type": "application/json;charset=UTF-8",
          date: "Thu, 30 Nov 2017 14:41:50 GMT",
          server: "nginx",
          "strict-transport-security": "max-age=31536000; includeSubdomains",
          "x-frame-options": "deny",
          "x-nexmo-trace-id": "91f401d459aa5050af280aee53288135",
          "x-xss-protection": "1; mode=block;",
          "content-length": "63",
          connection: "close"
        },
        statusCode: 401
      };

      this.httpClientStub.request.yields(mockError, null);
      this.message.search("0D00000068264896", function(err, data) {
        expect(err).to.eql(mockError);
        expect(data).to.eql(null);
        done();
      });
    });
  });
});
