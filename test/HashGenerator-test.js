import HashGenerator from "../src/HashGenerator";
import expect from "expect.js";

describe("HashGenerator Object", function() {
  describe(".generate", function() {
    it("should throw an exception if method is not md5hash, md5, sha1, sha256, or sha512", function() {
      var generator = new HashGenerator();
      var generate = function() {
        generator.generate("random");
      };
      expect(generate).to.throwError();
    });

    it("should strip sig if present", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("md5hash", "secret", { sig: "signature" });

      expect(hash).to.be("5ebe2294ecd0e0f08eab7690d2a6ee69");
    });

    it("should generate a md5hash hash", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("md5hash", "secret", {});

      expect(hash).to.be("5ebe2294ecd0e0f08eab7690d2a6ee69");
    });

    it("should generate a hash from params", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("md5hash", "secret", { from: "NEXMO" });

      expect(hash).to.be("2cdd20a2a0f7270545a98b3ccb87ba51");
    });

    it("should generate a md5 hash", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("md5", "secret", {});

      expect(hash).to.be("5c8db03f04cec0f43bcb060023914190");
    });

    it("should generate a sha1 hash", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("sha1", "secret", {});

      expect(hash).to.be("25af6174a0fcecc4d346680a72b7ce644b9a88e8");
    });

    it("should generate a sha256 hash", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("sha256", "secret", {});

      expect(hash).to.be(
        "f9e66e179b6747ae54108f82f8ade8b3c25d76fd30afde6c395822c530196169"
      );
    });

    it("should generate a sha512 hash", function() {
      var generator = new HashGenerator();
      var hash = generator.generate("sha512", "secret", {});

      expect(hash).to.be(
        "b0e9650c5faf9cd8ae02276671545424104589b3656731ec193b25d01b07561c27637c2d4d68389d6cf5007a8632c26ec89ba80a01c77a6cdd389ec28db43901"
      );
    });
  });
});
