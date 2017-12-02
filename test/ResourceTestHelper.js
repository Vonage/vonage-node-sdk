import querystring from "querystring";

class ResourceTestHelper {
  static getRequestArgs(params, overrides = {}) {
    var callsArgs = {
      host: overrides.host || "api.nexmo.com",
      path: overrides.path || "/v1/calls",
      method: overrides.method || "POST",
      body: overrides.hasOwnProperty("body")
        ? overrides.body
        : JSON.stringify(params),
      headers: overrides.headers || {
        "Content-Type": "application/json",
        Authorization: "Bearer "
      }
    };

    // Removed undefined properties
    Object.keys(callsArgs).forEach(function(key) {
      if (callsArgs[key] === undefined) {
        delete callsArgs[key];
      }
    });

    return callsArgs;
  }

  static requestArgsMatch(params, requestOverrides) {
    return function(actual) {
      var expected;
      if (requestOverrides) {
        expected = ResourceTestHelper.getRequestArgs(params, requestOverrides);
      } else {
        expected = params;
      }

      // We strip api_key and api_secret out of `path` so that our tests
      // only look for specific parameters
      var qs = actual.path.split("?");
      var qsParts = querystring.parse(qs[1]);
      delete qsParts["api_key"];
      delete qsParts["api_secret"];
      if (Object.keys(qsParts).length) {
        actual.path = qs[0] + "?" + querystring.stringify(qsParts);
      }

      var match = true;

      // Check response parameters
      ["host", "path", "method", "body"].forEach(function(k) {
        if (expected[k]) {
          match = match && expected[k] == actual[k];
        }
      });

      // Also check for any headers that we're expecting
      expected.headers = expected.headers || {};
      Object.keys(expected.headers).forEach(function(k) {
        // We have a special check for authorization
        if (k === "Authorization") {
          return true;
        }
        match = match && expected.headers[k] === actual.headers[k];
      });

      // For Authorization we only check the beginning as JWTs are
      // dynamically created
      if (expected.headers["Authorization"]) {
        match =
          match &&
          actual.headers["Authorization"].indexOf(
            expected.headers["Authorization"]
          ) === 0;
      }

      return match;
    };
  }
}

export default ResourceTestHelper;
