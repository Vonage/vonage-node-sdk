import Utils from "../src/Utils";
import expect from "expect.js";

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
});
