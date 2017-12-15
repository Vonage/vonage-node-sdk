import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger.js";

module.exports = {
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
