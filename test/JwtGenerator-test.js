import JwtGenerator from "../src/JwtGenerator";
import path from "path";
import fs from "fs";
import expect from "expect.js";
import jwt from "jsonwebtoken";

describe("JwtGenerator Object", function() {
  describe(".generate", function() {
    it("should throw an exception if the cert is not a Buffer", function() {
      var generator = new JwtGenerator();
      var generate = function() {
        generator.generate("blah blah");
      };
      expect(generate).to.throwError();
    });

    it("should throw an exception if the claims is not a Object", function() {
      var generator = new JwtGenerator();
      var generate = function() {
        generator.generate("blah blah", "application_id");
      };
      expect(generate).to.throwError();
    });

    it("should generate a JWT", function() {
      var testPrivateKey = fs.readFileSync(
        path.join(__dirname, "private-test.key")
      );

      var generator = new JwtGenerator();
      var token = generator.generate(testPrivateKey, {
        application_id: "app-id",
        iat: new Date(2016, 9, 5).getTime() / 1000
      });

      expect(token).to.be.a("string");
    });

    it("should add jti and iat claims by default", function() {
      var testPrivateKey = fs.readFileSync(
        path.join(__dirname, "private-test.key")
      );
      var testPublicKey = fs.readFileSync(
        path.join(__dirname, "public-test.key")
      );

      var generator = new JwtGenerator();
      var token = generator.generate(testPrivateKey);

      var decoded = jwt.verify(token, testPublicKey, { algorithms: ["RS256"] });

      expect(decoded.jti).to.be.ok();
      expect(decoded.iat).to.be.ok();
    });

    it("should be possible to add additional claims", function() {
      var testPrivateKey = fs.readFileSync(
        path.join(__dirname, "private-test.key")
      );
      var testPublicKey = fs.readFileSync(
        path.join(__dirname, "public-test.key")
      );

      var generator = new JwtGenerator();
      var appId = "app-id";
      var randomValue = Math.random();
      var token = generator.generate(testPrivateKey, {
        application_id: appId,
        random: randomValue
      });

      var decoded = jwt.verify(token, testPublicKey, { algorithms: ["RS256"] });

      expect(decoded.application_id).to.be(appId);
      expect(decoded.random).to.be(randomValue);
    });
  });
});
