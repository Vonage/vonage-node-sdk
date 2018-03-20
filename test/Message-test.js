import Message from "../lib/Message";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Message", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.message = new Message(TestUtils.getCredentials(), {
      rest: this.httpClientStub
    });
  });

  describe("#sendSMS", function() {
    it("should call the correct endpoint (no options)", function() {
      return expect(this.message)
        .method("sendSms")
        .withParams("14155550100", "14155550105", "Hello World")
        .to.post.url(
          "/sms/json?from=14155550100&to=14155550105&text=Hello%20World"
        );
    });

    it("should call the correct endpoint (with options)", function() {
      return expect(this.message)
        .method("sendSms")
        .withParams("14155550100", "14155550105", "Hello World", {
          type: "unicode"
        })
        .to.post.url(
          "/sms/json?type=unicode&from=14155550100&to=14155550105&text=Hello%20World"
        );
    });
  });

  describe("#sendBinaryMessage", function() {
    it("should call the correct endpoint", function() {
      return expect(this.message)
        .method("sendBinaryMessage")
        .withParams(
          "14155550100",
          "14155550105",
          "BinaryMessageHere",
          "udhHere"
        )
        .to.post.url(
          "/sms/json?from=14155550100&to=14155550105&body=BinaryMessageHere&udh=udhHere&type=binary"
        );
    });
  });

  describe("#sendWapPushMessage", function() {
    it("should call the correct endpoint (default validity)", function() {
      return expect(this.message)
        .method("sendWapPushMessage")
        .withParams(
          "14155550100",
          "14155550105",
          "Push Title",
          "https://example.com"
        )
        .to.post.url(
          "/sms/json?from=14155550100&to=14155550105&title=Push%20Title&validity=86400000&url=https%3A%2F%2Fexample.com&type=wappush"
        );
    });

    it("should call the correct endpoint (explicit validity)", function() {
      return expect(this.message)
        .method("sendWapPushMessage")
        .withParams(
          "14155550100",
          "14155550105",
          "Push Title",
          "https://example.com",
          300000
        )
        .to.post.url(
          "/sms/json?from=14155550100&to=14155550105&title=Push%20Title&validity=300000&url=https%3A%2F%2Fexample.com&type=wappush"
        );
    });
  });

  describe("#shortcodeAlert", function() {
    it("should call the correct endpoint", function() {
      return expect(this.message)
        .method("shortcodeAlert")
        .withParams("14155550100", { TODO: "FIXME" }, {})
        .to.post.url("/sc/us/alert/json?TODO=FIXME&to=14155550100");
    });
  });

  describe("#shortcode2FA", function() {
    it("should call the correct endpoint", function() {
      return expect(this.message)
        .method("shortcode2FA")
        .withParams("14155550100", { TODO: "FIXME" }, {})
        .to.post.url("/sc/us/2fa/json?TODO=FIXME&to=14155550100");
    });
  });

  describe("#shortcodeMarketing", function() {
    it("should call the correct endpoint", function() {
      return expect(this.message)
        .method("shortcodeMarketing")
        .withParams("14155550100", { TODO: "FIXME" }, {})
        .to.post.url("/sc/us/marketing/json?TODO=FIXME&to=14155550100");
    });
  });

  describe("#search", function() {
    it("should call the correct endpoint (single)", function() {
      return expect(this.message)
        .method("search")
        .withParams("0D00000068264896")
        .to.get.url("/search/message?id=0D00000068264896");
    });

    it("should call the correct endpoint (multiple)", function() {
      return expect(this.message)
        .method("search")
        .withParams([1, 2])
        .to.get.url("/search/messages?ids=1&ids=2");
    });
  });

  describe("#searchRejections", function() {
    it("should call the correct endpoint (multiple)", function() {
      return expect(this.message)
        .method("searchRejections")
        .withParams("INVALID", "2020-01-01")
        .to.get.url("/search/rejections?to=INVALID&date=2020-01-01");
    });
  });
});
