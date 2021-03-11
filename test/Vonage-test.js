import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import path from "path";
import fs from "fs";

import Vonage from "../lib/Vonage";
import CallsResource from "../lib/CallsResource";

chai.use(sinonChai);

describe("Vonage definition", () => {
  describe(".generateJwt", () => {
    it("should expose a generateJwt function", () => {
      expect(Vonage.generateJwt).to.be.a("function");
    });

    it("should throw an exception if privateKey file does not exist", () => {
      var create = function () {
        Vonage.generateJwt("./no-key-here.key");
      };
      expect(create).to.throw(Error);
    });

    it("should create a JWT with a private key (file path) [static]", () => {
      var token = Vonage.generateJwt(path.join(__dirname, "private-test.key"));
      expect(token).to.be.a("string");
    });

    it("should create a JWT with a private key (Buffer) [static]", () => {
      var fileBuffer = fs.readFileSync(
        path.join(__dirname, "private-test.key")
      );
      var token = Vonage.generateJwt(fileBuffer);
      expect(token).to.be.a("string");
    });
  });

  describe(".generateSignature", () => {
    it("should expose a generateSignature function", () => {
      expect(Vonage.generateSignature).to.be.a("function");
    });

    it("should create a hash", () => {
      var hash = Vonage.generateSignature("md5hash", "secret", {});
      expect(hash).to.be.a("string");
    });
  });
});

describe("Vonage Object instance", function () {
  it("should expose a credentials object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.credentials).to.be.a("object");
  });

  it("should expose a message object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.message).to.be.a("object");
  });

  it("should expose a voice object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.voice).to.be.a("object");
  });

  it("should expose a number object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.number).to.be.a("object");
  });

  it("should expose a verify object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.verify).to.be.a("object");
  });

  it("should expose a numberInsight object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.numberInsight).to.be.a("object");
  });

  it("should expose an app object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.app).to.be.a("object");
  });

  it("should expose applications object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.applications).to.be.a("object");
  });

  it("should alias apps to applications object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.applications).to.equal(vonage.app);
  });

  it("should expose a account object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.account).to.be.a("object");
  });

  it("should expose a calls object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.calls).to.be.an.instanceOf(CallsResource);
  });

  it("should expose a files object", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.files).to.be.a("object");
  });

  it("should allow options to be passed and remain unchanged", function () {
    var localOptions = {
      appendToUserAgent: "EXT",
      debug: true,
    };

    let passedOptions = Object.assign({}, localOptions);

    let vonage = new Vonage(
      {
        apiKey: "test",
        apiSecret: "test",
      },
      passedOptions
    );

    expect(localOptions).to.eql(passedOptions);
    expect(vonage.options.userAgent).to.match(/.*EXT/);
  });

  it("should have debug turned off by default", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.options.debug).to.be.false;
  });

  it("should allow a custom logger to be set", function () {
    var logger = {
      info: function () {},
      error: function () {},
      warn: function () {},
    };
    var vonage = new Vonage(
      {
        apiKey: "test",
        apiSecret: "test",
      },
      {
        logger: logger,
      }
    );
    expect(vonage.options.logger).to.equal(logger);
  });

  it("should allow a debug option to be set", function () {
    var vonage = new Vonage(
      {
        apiKey: "test",
        apiSecret: "test",
      },
      {
        debug: true,
      }
    );
    expect(vonage.options.debug).to.be.true;
  });

  it("should have a default user agent in the form LIBRARY-NAME/LIBRARY-VERSION/LANGUAGE-VERSION", function () {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
    });
    expect(vonage.options.userAgent).to.match(
      /^@vonage\/server-sdk\/[\d|\w\-\d.]* node\/[\d.]*$/
    );
  });

  it("should append to the user agent when a appendToUserAgent option is passed", function () {
    var options = {
      appendToUserAgent: "vonage-cli/1.0.0",
    };
    var vonage = new Vonage(
      {
        apiKey: "test",
        apiSecret: "test",
      },
      options
    );
    expect(vonage.options.userAgent).to.match(
      /@vonage\/server-sdk\/[\d|\w\-\d.]* node\/[\d.]* vonage-cli\/1\.0\.0/
    );
  });

  it("should allow api host change", function () {
    var options = {
      apiHost: "some.host.com",
    };
    var vonage = new Vonage(
      {
        apiKey: "test",
        apiSecret: "test",
      },
      options
    );
    expect(vonage.options.apiHost).to.equal("some.host.com");
  });

  it("should allow rest host change", function () {
    var options = {
      restHost: "some.host.com",
    };
    var vonage = new Vonage(
      {
        apiKey: "test",
        apiSecret: "test",
      },
      options
    );
    expect(vonage.options.restHost).to.equal("some.host.com");
  });

  it("should create a JWT", () => {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
      privateKey: path.join(__dirname, "private-test.key"),
      application_id: "app-id",
    });
    var token = vonage.generateJwt();
    expect(token).to.be.a("string");
  });

  it("should create a hash", () => {
    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
      signatureSecret: "secret",
      signatureMethod: "md5hash",
    });
    var hash = vonage.generateSignature({});
    expect(hash).to.be.a("string");
  });

  it("should create same JWT as static function", () => {
    var iat = parseInt(Date.now() / 1000, 10);
    var jti = "some_jti";
    var appId = "app_id";
    var privateKey = path.join(__dirname, "private-test.key");

    var expectedJwt = Vonage.generateJwt(privateKey, {
      application_id: appId,
      iat: iat,
      jti: jti,
    });

    var vonage = new Vonage({
      apiKey: "test",
      apiSecret: "test",
      privateKey: privateKey,
      applicationId: appId,
    });
    var token = vonage.generateJwt({ iat: iat, jti: jti });
    expect(token).to.equal(expectedJwt);
  });
});
