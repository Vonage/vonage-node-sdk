import App from "../lib/App";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("App", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    this.app = new App(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  describe("#get", function() {
    it("should call the correct endpoint", function() {
      return expect(this.app)
        .method("get")
        .withParams("db860df6c9bc9dadb7c592c0faac14ba192a")
        .to.get.url("/v1/applications/db860df6c9bc9dadb7c592c0faac14ba192a");
    });
  });

  describe("#delete", function() {
    it("should call the correct endpoint", function() {
      return expect(this.app)
        .method("delete")
        .withParams("db860df6c9bc9dadb7c592c0faac14ba192a")
        .to.delete.url("/v1/applications/db860df6c9bc9dadb7c592c0faac14ba192a");
    });
  });

  describe("#search", function() {
    it("should call the correct endpoint", function() {
      return expect(this.app)
        .method("search")
        .withParams({ type: "voice" })
        .to.get.url("/v1/applications?type=voice");
    });
  });

  describe("#create", function() {
    it("should call the correct endpoint", function() {
      return expect(this.app)
        .method("create")
        .withParams(
          "My App",
          "voice",
          "https://example.com/answer",
          "https://example.com/event",
          {}
        )
        .to.post.url(
          "/v1/applications?name=My%20App&type=voice&answer_url=https%3A%2F%2Fexample.com%2Fanswer&event_url=https%3A%2F%2Fexample.com%2Fevent"
        );
    });
  });

  describe("#update", function() {
    it("should call the correct endpoint", function() {
      return expect(this.app)
        .method("update")
        .withParams(
          "Updated App",
          "voice",
          "https://example.com/answer",
          "https://example.com/event",
          {}
        )
        .to.put.url(
          "/v1/applications?name=Updated%20App&type=voice&answer_url=https%3A%2F%2Fexample.com%2Fanswer&event_url=https%3A%2F%2Fexample.com%2Fevent"
        );
    });
  });
});
