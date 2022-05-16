import Utils from "../src/Utils";
import expect from "expect.js";
import sinon from "sinon";

describe("Utils", () => {
  describe(".createPathWithQuery", () => {
    it("should throw error if query isn't present", () => {
      expect(Utils.createPathWithQuery).to.throwError();
    });

    it("should return path if query is string", () => {
      expect(Utils.createPathWithQuery("some", "thing")).to.equal("some/thing");
    });

    it("should return path if query is empty object", () => {
      expect(Utils.createPathWithQuery("some", {})).to.equal("some");
    });

    it("should return path with query if query is an object", () => {
      expect(
        Utils.createPathWithQuery("some", { things: "neverChange" })
      ).to.equal("some?things=neverChange");
    });
  });

  describe(".getQuery", () => {
    it("should return query from path", () => {
      expect(
        JSON.stringify(Utils.getQuery("some/path/with?some=query"))
      ).to.equal('{"some":"query"}');
    });
  });

  describe(".sendError", () => {
    it("should throw error", () => {
      expect(Utils.sendError).to.throwError();
    });

    it("should throw call the callback", () => {
      let callback = sinon.spy();
      Utils.sendError(callback);
      expect(callback.calledWith(undefined, undefined));
    });
  });

  describe(".clone", () => {
    it("should clone object", () => {
      expect(JSON.stringify(Utils.clone({}))).to.equal("{}");
    });
  });
});
