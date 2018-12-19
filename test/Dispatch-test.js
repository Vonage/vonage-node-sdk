import Dispatch from "../lib/Dispatch";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

const workflow1 = {
  to: { type: "viber_service_msg", number: "1234567890" },
  from: { type: "viber_service_msg", number: "9876543210" },
  message: {
    content: {
      type: "text",
      text: "Hello World"
    },
    viber_service_msg: {
      ttl: 60
    }
  }
};

const workflow2 = {
  to: { type: "sms", number: "1234567890" },
  from: { type: "sms", number: "9876543210" },
  message: {
    content: {
      type: "text",
      text: "Fallback to SMS from Viber"
    }
  }
};

describe("Dispatch", function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.dispatch = new Dispatch(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe("create", function() {
    it("should call the correct endpoint", function() {
      return expect(this.dispatch)
        .method("create")
        .withParams("failover", [
          {
            to: { type: "sms", number: "1234567890" },
            from: { type: "sms", number: "9876543210" },
            message: {
              content: {
                type: "text",
                text: "Hello World"
              },
              viber_service_msg: {
                ttl: 60
              }
            }
          }
        ])
        .to.post.to.url(Dispatch.PATH);
    });

    it("formats the outgoing request correctly)", function(done) {
      const template = "failover";

      const postMock = this.sandbox.mock(this.httpClientStub);
      postMock
        .expects("post")
        .once()
        .withArgs(Dispatch.PATH, {
          template: template,
          workflow: [workflow1, workflow2]
        })
        .yields(null, []);

      this.dispatch.create("failover", [workflow1, workflow2], () => {
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

      this.dispatch.create("failover", [workflow1, workflow2], () => {
        postMock.verify();
        done();
      });
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

      this.dispatch.create(
        "failover",
        [workflow1, workflow2],
        () => {
          postMock.verify();
          done();
        },
        { useBasicAuth: true }
      );
    });
  });
});
