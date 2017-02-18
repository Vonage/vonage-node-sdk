class ResourceTestHelper {

  static getRequestArgs(params, overrides = {}) {
    var callsArgs = {
      host: overrides.host || 'api.nexmo.com',
      path: overrides.path || '/v1/calls',
      method: overrides.method || 'POST',
      body: overrides.hasOwnProperty('body') ? overrides.body : JSON.stringify(params),
      headers: overrides.headers || {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
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
      var expected = ResourceTestHelper.getRequestArgs(params, requestOverrides);

      var match = (
        expected.host === actual.host &&
        expected.path === actual.path &&
        expected.method === actual.method &&
        expected.body === actual.body &&
        expected.headers['Content-Type'] === actual.headers['Content-Type'] &&
        actual.headers['Authorization'].indexOf(expected.headers['Authorization']) == 0
      );
      return match;
    };
  }
}

export default ResourceTestHelper;
