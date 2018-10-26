import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import fs from "fs";

import JwtGenerator from "../lib/JwtGenerator";

import Credentials from "../lib/Credentials";

chai.use(sinonChai);

describe("Credentials Object", function() {
  it("should be possible to construct a Credential object", () => {
    const cred = Credentials.parse("KEY", "SECRET");

    expect(cred).to.be.an.instanceof(Credentials);
  });

  it("should parse object literal into a Credential object", () => {
    const key = "KEY";
    const secret = "SECRET";
    const appId = "app-id";
    const privateKey = path.join(__dirname, "private-test.key");
    const obj = {
      apiKey: key,
      apiSecret: secret,
      applicationId: appId,
      privateKey: privateKey
    };
    const parsed = Credentials.parse(obj);

    expect(parsed).to.be.an.instanceof(Credentials);
    expect(parsed.apiKey).to.be.equal(key);
    expect(parsed.apiSecret).to.be.equal(secret);
    expect(parsed.applicationId).to.be.equal(appId);
    expect(parsed.privateKey).to.be.ok;
  });

  it("should throw an error when a privateKey is provided and the file does not exist", () => {
    const create = () => {
      return new Credentials("KEY", "SECRET", "./no-key-here.key");
    };
    expect(create).to.throw(Error);
  });

  it("should read a private key from a file into a Buffer accessible via Credentials.privateKey", () => {
    const cred = new Credentials(
      "KEY",
      "SECRET",
      path.join(__dirname, "private-test.key")
    );
    expect(cred.privateKey).to.be.an.instanceof(Buffer);
  });

  it("should turn a private key string into a Buffer accessible via Credentials.privateKey", () => {
    const key = fs.readFileSync(path.join(__dirname, "private-test.key"));
    const cred = new Credentials("KEY", "SECRET", key);
    expect(cred.privateKey).to.be.an.instanceof(Buffer);
  });

  it("should support passing a privateKey of type string", () => {
    const key = `-----BEGIN PRIVATE KEY-----
blah blah blah
-----END PRIVATE KEY-----`;
    const cred = new Credentials("KEY", "SECRET", key);
    expect(cred.privateKey).to.be.an.instanceof(Buffer);
  });

  it("should allow an applicationId to be provided upon construction", () => {
    const appId = "some_app_id";
    const cred = new Credentials(
      "KEY",
      "SECRET",
      path.join(__dirname, "private-test.key"),
      appId
    );
    expect(cred.applicationId).to.equal(appId);
  });

  it("should allow a JWT to be generated using supplied application ID", () => {
    const stub = sinon.createStubInstance(JwtGenerator);

    const cred = new Credentials(
      "KEY",
      "SECRET",
      path.join(__dirname, "private-test.key"),
      "app-id"
    );
    cred._setJwtGenerator(stub);

    cred.generateJwt();

    expect(stub.generate).to.be.calledWith(cred.privateKey, {
      application_id: cred.applicationId
    });
  });

  it("should allow a JWT to be generated using an alternative application ID", () => {
    const stub = sinon.createStubInstance(JwtGenerator);

    const cred = new Credentials(
      "KEY",
      "SECRET",
      path.join(__dirname, "private-test.key"),
      "app-id"
    );
    cred._setJwtGenerator(stub);

    const altAppId = "another-app-id";
    cred.generateJwt(altAppId);

    expect(stub.generate).to.be.calledWith(cred.privateKey, {
      application_id: altAppId
    });
  });

  it("should allow a JWT to be generated using an alternative private key", () => {
    const stub = sinon.createStubInstance(JwtGenerator);

    const cred = new Credentials(
      "KEY",
      "SECRET",
      path.join(__dirname, "private-test.key"),
      "app-id"
    );
    cred._setJwtGenerator(stub);

    const altAppId = "another-app-id";
    cred.generateJwt(altAppId, "ALTERNATIVE_KEY");

    expect(stub.generate).to.be.calledWith("ALTERNATIVE_KEY", {
      application_id: altAppId
    });
  });
});
