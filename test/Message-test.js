import Message from "../lib/Message";
import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger.js";

import ResourceTestHelper from "./ResourceTestHelper";

import sinon from "sinon";
import chai, { expect } from "chai";
import path from "path";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

var creds = Credentials.parse({
  apiKey: "some-key",
  apiSecret: "some-secret",
});
var emptyCallback = () => {};

describe("SMS", () => {
  var httpClientStub = null;
  var message = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      logger: {
        info: () => {},
      },
    };
    message = new Message(creds, options);
  });

  it("should throw if there is no message when sending an sms", () => {
    try {
      message.sendSms("1234", "1234", undefined);
    } catch (e) {
      expect(e.toString()).to.include("Error: Invalid Text Message");
    }
  });

  it("should throw if there is no body when sending a binary sms", () => {
    try {
      message.sendBinaryMessage(
        "1234",
        "1234",
        undefined,
        "ff",
        {},
        emptyCallback
      );
    } catch (e) {
      expect(e.toString()).to.include(
        "Error: Invalid Body value in Binary Message"
      );
    }
  });

  it("should throw if there is no udh when sending a binary sms", () => {
    try {
      message.sendBinaryMessage(
        "1234",
        "1234",
        "00",
        undefined,
        {},
        emptyCallback
      );
    } catch (e) {
      expect(e.toString()).to.include(
        "Error: Invalid udh value in Binary Message"
      );
    }
  });

  it("should throw if there is no title when sending a wap push message", () => {
    try {
      message.sendWapPushMessage(
        "1234",
        "1234",
        undefined,
        "url",
        "validity",
        {},
        emptyCallback
      );
    } catch (e) {
      expect(e.toString()).to.include(
        "Error: Invalid title in WAP Push message"
      );
    }
  });

  it("should throw if there is no url when sending a wap push message", () => {
    try {
      message.sendWapPushMessage(
        "1234",
        "1234",
        "title",
        undefined,
        "validity",
        {},
        emptyCallback
      );
    } catch (e) {
      expect(e.toString()).to.include("Error: Invalid url in WAP Push message");
    }
  });

  it("should allow sending an sms message", () => {
    message.sendSms("1234", "1234", "test", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/sms/json",
        body: '{"api_key":"some-key","api_secret":"some-secret","from":"1234","to":"1234","text":"test"}',
        headers: { "Content-Type": "application/json" },
      }),
      "POST"
    );
  });

  it("should allow host override when sending an sms message", () => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      restHost: "rest.example.com",
      logger: {
        info: () => {},
      },
    };
    let message = new Message(creds, options);
    message.sendSms("1234", "1234", "test", emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.example.com",
        path: "/sms/json",
        body: '{"api_key":"some-key","api_secret":"some-secret","from":"1234","to":"1234","text":"test"}',
        headers: { "Content-Type": "application/json" },
      }),
      "POST"
    );
  });

  it("should allow sending a binary sms message", () => {
    message.sendBinaryMessage("1234", "1234", "00", "ff", {}, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/sms/json",
        body: '{"api_key":"some-key","api_secret":"some-secret","from":"1234","to":"1234","type":"binary","body":"00","udh":"ff"}',
        headers: { "Content-Type": "application/json" },
      }),
      "POST"
    );
  });

  it("should allow host override when sending a binary sms message", () => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      restHost: "rest.example.com",
      logger: {
        info: () => {},
      },
    };
    let message = new Message(creds, options);
    message.sendBinaryMessage("1234", "1234", "00", "ff", {}, emptyCallback);

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.example.com",
        path: "/sms/json",
        body: '{"api_key":"some-key","api_secret":"some-secret","from":"1234","to":"1234","type":"binary","body":"00","udh":"ff"}',
        headers: { "Content-Type": "application/json" },
      }),
      "POST"
    );
  });

  it("should allow sending a wap push message", () => {
    message.sendWapPushMessage(
      "1234",
      "1234",
      "title",
      "url",
      "validity",
      {},
      emptyCallback
    );

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.nexmo.com",
        path: "/sms/json",
        body: '{"api_key":"some-key","api_secret":"some-secret","from":"1234","to":"1234","type":"wappush","title":"title","validity":"validity","url":"url"}',
        headers: { "Content-Type": "application/json" },
      }),
      "POST"
    );
  });

  it("should allow host override when sending a wap push message", () => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
      restHost: "rest.example.com",
      logger: {
        info: () => {},
      },
    };
    let message = new Message(creds, options);
    message.sendWapPushMessage(
      "1234",
      "1234",
      "title",
      "url",
      "validity",
      {},
      emptyCallback
    );

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match({
        host: "rest.example.com",
        path: "/sms/json",
        body: '{"api_key":"some-key","api_secret":"some-secret","from":"1234","to":"1234","type":"wappush","title":"title","validity":"validity","url":"url"}',
        headers: { "Content-Type": "application/json" },
      }),
      "POST"
    );
  });
});

describe("Message", function () {
  beforeEach(function () {
    var creds = Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret",
    });

    this.httpClientStub = new HttpClient(
      {
        logger: new NullLogger(),
      },
      creds
    );

    sinon.stub(this.httpClientStub, "request");

    var options = {
      rest: this.httpClientStub,
    };

    this.message = new Message(creds, options);
  });

  describe("#search", function () {
    it("should call the correct endpoint (single)", function (done) {
      this.httpClientStub.request.yields(null, {});

      var expectedRequestArgs = ResourceTestHelper.requestArgsMatch({
        path: "/search/message?id=0D00000068264896",
      });

      this.message.search(
        "0D00000068264896",
        function (err, data) {
          expect(this.httpClientStub.request).to.have.been.calledWith(
            sinon.match(expectedRequestArgs)
          );

          done();
        }.bind(this)
      );
    });

    it("should call the correct endpoint (multiple)", function (done) {
      this.httpClientStub.request.yields(null, {});

      var expectedRequestArgs = ResourceTestHelper.requestArgsMatch({
        path: "/search/messages?ids=1&ids=2",
      });

      this.message.search(
        [1, 2],
        function (err, data) {
          expect(this.httpClientStub.request).to.have.been.calledWith(
            sinon.match(expectedRequestArgs)
          );

          done();
        }.bind(this)
      );
    });

    it("returns data on a successful request (single)", function (done) {
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
        type: "MT",
      };

      this.httpClientStub.request.yields(null, mockData);
      this.message.search("0D00000068264896", function (err, data) {
        expect(err).to.eql(null);
        expect(data).to.eql(mockData);
        done();
      });
    });

    it("returns data on a successful request (multiple)", function (done) {
      const mockData = {
        count: 1,
        items: [
          {
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
            type: "MT",
          },
        ],
      };

      this.httpClientStub.request.yields(null, mockData);
      this.message.search(["0D00000068264896"], function (err, data) {
        expect(err).to.eql(null);
        expect(data).to.eql(mockData);
        done();
      });
    });

    it("returns an error when the connection fails", function (done) {
      const mockError = {
        body: {
          "error-code": "401",
          "error-code-label": "authentication failed",
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
          connection: "close",
        },
        statusCode: 401,
      };

      this.httpClientStub.request.yields(mockError, null);
      this.message.search("0D00000068264896", function (err, data) {
        expect(err).to.eql(mockError);
        expect(data).to.eql(null);
        done();
      });
    });
  });

  describe("#searchRejections", function () {
    it("should call the correct endpoint (multiple)", function (done) {
      this.httpClientStub.request.yields(null, {});

      var expectedRequestArgs = ResourceTestHelper.requestArgsMatch({
        path: "/search/rejections?date=2020-01-01&to=INVALID",
        headers: { "Content-Type": "application/json" },
      });

      this.message.searchRejections(
        "INVALID",
        "2020-01-01",
        function (err, data) {
          expect(this.httpClientStub.request).to.have.been.calledWith(
            sinon.match(expectedRequestArgs)
          );

          done();
        }.bind(this)
      );
    });

    it("returns data on a successful request", function (done) {
      const mockData = {
        count: 1,
        items: [
          {
            "account-id": "API_KEY",
            from: "447700900000",
            to: "INVALID",
            "date-received": "2020-01-01 12:00:00",
            "error-code": "3",
            "error-code-label": "to address is not numeric",
          },
        ],
      };

      this.httpClientStub.request.yields(null, mockData);
      this.message.search("0D00000068264896", function (err, data) {
        expect(err).to.eql(null);
        expect(data).to.eql(mockData);
        done();
      });
    });

    it("returns an error when invalid parameters are provided", function (done) {
      const mockError = {
        body: { "error-code": "400", "error-code-label": "wrong parameters" },
        headers: {
          "content-disposition": 'attachment; filename="api.txt"',
          "content-type": "application/json;charset=UTF-8",
          date: "Thu, 14 Dec 2017 11:40:08 GMT",
          server: "nginx",
          "strict-transport-security": "max-age=31536000; includeSubdomains",
          "x-frame-options": "deny",
          "x-nexmo-trace-id": "38ad97a406aa8cc104cecf21feaf7da3",
          "x-xss-protection": "1; mode=block;",
          "content-length": "58",
          connection: "close",
        },
        statusCode: 400,
      };

      this.httpClientStub.request.yields(mockError, null);
      this.message.searchRejections("123456", null, function (err, data) {
        expect(err).to.eql(mockError);
        expect(data).to.eql(null);
        done();
      });
    });
  });
});
