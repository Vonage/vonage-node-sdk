import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger.js";

import sinon from "sinon";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import nexmoChai from "./NexmoChai";
chai.use(sinonChai);
chai.use(nexmoChai);

const TestUtils = {
  getCredentials: function() {
    return Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret"
    });
  },
  getHttpClient: function() {
    const httpClient = new HttpClient(
      {
        logger: new NullLogger()
      },
      this.getCredentials()
    );

    return httpClient;
  }
};

export { TestUtils, expect, sinon };
