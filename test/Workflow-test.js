import Workflow from "../lib/Workflow";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Workflow", function() {
  beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
    this.httpClientStub = TestUtils.getHttpClient();
    this.sandbox.stub(this.httpClientStub, "request");
    this.workflow = new Workflow(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe("create", function() {
    it("should call the correct endpoint", function() {
      return expect(this.workflow)
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
        .to.post.to.url(Workflow.PATH);
    });

    it("formats the outgoing request correctly)", function(done) {
      const template = "failover";
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

      const postMock = this.sandbox.mock(this.httpClientStub);
      postMock
        .expects("post")
        .once()
        .withArgs(Workflow.PATH, {
          template: template,
          workflow: [workflow1, workflow2]
        })
        .yields(null, []);

      this.workflow.create("failover", [workflow1, workflow2], () => {
        postMock.verify();
        done();
      });
    });
  });
});
