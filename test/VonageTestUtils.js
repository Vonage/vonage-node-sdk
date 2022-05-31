import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger.js";

import sinon from "sinon";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import vonageChai from "./VonageChai";
chai.use(sinonChai);
chai.use(vonageChai);

const TestUtils = {
  getCredentials: function () {
    var creds = Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret",
    });

    // Overwrite JWT generation for tests
    creds.generateJwt = function () {
      return "ThisIsAJWT";
    };

    return creds;
  },

  getApplicationCredentials: function () {
    var creds = Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret",
      applicationId: "8f484040-1cf1-4c0e-8b5a-ee47d15a3bec",
      privateKey: __dirname + "/private-test.key",
    });

    // Overwrite JWT generation for tests
    creds.generateJwt = function () {
      return "ThisIsAJWT";
    };

    return creds;
  },

  getHttpClient: function () {
    const httpClient = new HttpClient(
      {
        logger: new NullLogger(),
      },
      this.getCredentials()
    );

    return httpClient;
  },
};

export { TestUtils, expect, sinon };
