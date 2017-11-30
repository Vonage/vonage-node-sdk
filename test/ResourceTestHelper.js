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
      var expected = ResourceTestHelper.getRequestArgs(
        params,
        requestOverrides
      );

      // We strip api_key and api_secret out of `path` so that our tests
      // only look for specific parameters
      var qs = actual.path.split("?");
      var qsParts = querystring.parse(qs[1]);
      delete qsParts["api_key"];
      delete qsParts["api_secret"];
      if (Object.keys(qsParts).length) {
        actual.path = qs[0] + "?" + querystring.stringify(qsParts);
      }

      var match =
        expected.host === actual.host &&
        expected.path === actual.path &&
        expected.method === actual.method &&
        expected.body === actual.body &&
        expected.headers["Content-Type"] === actual.headers["Content-Type"];

      // Some requests don't use the auth header, so only check if it's set
      if (actual.headers["Authorization"]) {
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
