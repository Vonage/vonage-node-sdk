import Channel from "../lib/Channel";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

//
describe("Channel", function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.channel = new Channel(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe("send", function() {
    it("should call the correct endpoint", function() {
      return expect(this.channel)
        .method("send")
        .withParams(
          { type: "sms", number: "1234567890" },
          { type: "sms", number: "9876543210" },
          { type: "text", text: "Hello World" }
        )
        .to.post.to.url(Channel.PATH);
    });

    it("formats the outgoing request correctly)", function(done) {
      const to = { type: "sms", number: "1234567890" };
      const from = { type: "sms", number: "9876543210" };
      const message = {
        content: { type: "text", text: "Hello World" },
        viber_service_msg: { ttl: 60 }
      };

      const postMock = this.sandbox.mock(this.httpClientStub);
      postMock
        .expects("post")
        .once()
        .withArgs(Channel.PATH, {
          from: from,
          to: to,
          message: message
        })
        .yields(null, []);

      this.channel.send(to, from, message, () => {
        postMock.verify();
        done();
      });
    });

    it("uses JWT auth by default", function(done) {
      const postMock = this.sandbox.mock(this.httpClientStub);
      postMock
        .expects("post")
        .once()
        .withArgs(
          sinon.match.any,
          sinon.match.any,
          sinon.match.any,
          true,
          undefined
        )
        .yields(null, []);

      this.channel.send(
        { type: "sms", number: "1234567890" },
        { type: "sms", number: "9876543210" },
        { type: "text", text: "Hello World" },
        () => {
          postMock.verify();
          done();
        }
      );
    });

    it("uses basicAuth auth if option supplied", function(done) {
      const postMock = this.sandbox.mock(this.httpClientStub);
      postMock
        .expects("post")
        .once()
        .withArgs(
          sinon.match.any,
          sinon.match.any,
          sinon.match.any,
          false,
          true
        )
        .yields(null, []);

      this.channel.send(
        { type: "sms", number: "1234567890" },
        { type: "sms", number: "9876543210" },
        { type: "text", text: "Hello World" },
        () => {
          postMock.verify();
          done();
        },
        { useBasicAuth: true }
      );
    });
  });
});
