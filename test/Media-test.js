import Media from "../lib/Media";
import os from "os";
import { expect, sinon, TestUtils } from "./NexmoTestUtils";

describe("Media", function() {
  beforeEach(function() {
    this.httpClientStub = TestUtils.getHttpClient();
    sinon.stub(this.httpClientStub, "request");
    sinon.stub(this.httpClientStub.requestLib, "post");
    this.media = new Media(TestUtils.getCredentials(), {
      api: this.httpClientStub
    });
  });

  afterEach(function() {
    this.httpClientStub.request.restore();
    this.httpClientStub.requestLib.post.restore();
  });

  describe("#search", function() {
    it("should default to no parameters", function() {
      return expect(this.media)
        .method("search")
        .to.get.url(Media.PATH);
    });

    it("should pass through supplied parameters", function() {
      return expect(this.media)
        .method("search")
        .withParams({ order: "ascending", page_size: 11 })
        .to.get.url(`${Media.PATH}?order=ascending&page_size=11`);
    });
  });

  describe("#download", function() {
    it("should call the correct URL", function() {
      return expect(this.media)
        .method("download")
        .withParams("ABC123")
        .to.get.url(`${Media.PATH}/ABC123`);
    });
  });

  describe("#get", function() {
    it("should call the correct URL", function() {
      return expect(this.media)
        .method("get")
        .withParams("ABC123")
        .to.get.url(`${Media.PATH}/ABC123/info`);
    });
  });

  describe("#delete", function() {
    it("should call the correct URL", function() {
      return expect(this.media)
        .method("delete")
        .withParams("ABC123")
        .to.delete.url(`${Media.PATH}/ABC123`);
    });
  });

  describe("#upload", function() {
    // @TODO Add assertions for POST body
    // @TODO Add mocks for request
    it("should call the correct URL (file provided)", function() {
      const file = os.type() === "Windows_NT" ? "\\\\.\\NUL" : "/dev/null";
      return expect(this.media)
        .method("upload")
        .withParams({ file })
        .to.postFile.to.url("/v3/media");
    });

    it("should call the correct URL (url provided)", function() {
      return expect(this.media)
        .method("upload")
        .withParams({ url: "http://example.com" })
        .to.postFile.to.url("/v3/media");
    });
  });

  describe("#update", function() {
    it("should call the correct URL", function() {
      return expect(this.media)
        .method("update")
        .withParams("ABC123", { public_item: true })
        .to.put.to.url("/v3/media/ABC123/info");
    });
  });
});
