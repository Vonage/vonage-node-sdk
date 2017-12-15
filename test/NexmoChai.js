"use strict";
import querystring from "querystring";

module.exports = function(chai, utils) {
  utils.addChainableMethod(chai.Assertion.prototype, "call", function() {});

  utils.addProperty(chai.Assertion.prototype, "get", function() {
    this._httpMethod = "GET";
  });

  utils.addProperty(chai.Assertion.prototype, "post", function() {
    this._httpMethod = "POST";
  });

  utils.addChainableMethod(chai.Assertion.prototype, "method", function(
    method
  ) {
    this._classMethod = method;
  });
  utils.addChainableMethod(chai.Assertion.prototype, "withParams", function() {
    this._params = Array.prototype.slice.call(arguments);
  });

  utils.addMethod(chai.Assertion.prototype, "url", function(url) {
    return new Promise(resolve => {
      const callback = (err, data) => {
        if (!this._httpClient.request.args) {
          throw new Error("This assertion should only be used on Sinon spies");
        }
        if (!this._httpClient.request.args[0]) {
          throw new Error(
            "Spy was never called; cannot access arguments to check URL"
          );
        }

        let args = this._httpClient.request.args[0];

        // If we set a HTTP method property, let's assert that the correct
        // one was used
        if (this._httpMethod) {
          let calledVerb = args[1];
          const verb = new chai.Assertion(calledVerb.toUpperCase());
          verb.assert(
            verb._obj === this._httpMethod,
            "expected HTTP verb #{this} to match '" + this._httpMethod + "'",
            "expected HTTP verb #{this} to not match '" + this._httpMethod + "'"
          );
        }

        // Next up, let's check that the path we called is what we expected
        let calledPath = args[0].path;

        // We strip api_key and api_secret out of `path` so that our tests
        // only look for specific parameters
        var qs = calledPath.split("?");
        var qsParts = querystring.parse(qs[1]);
        delete qsParts["api_key"];
        delete qsParts["api_secret"];

        calledPath = qs[0];
        if (Object.keys(qsParts).length) {
          calledPath += "?" + querystring.stringify(qsParts);
        }

        // Make our assertion
        const path = new chai.Assertion(calledPath);
        path.assert(
          path._obj === url,
          "expected url #{this} to match '" + url + "'",
          "expected url #{this} to not match '" + url + "'"
        );
        return resolve(data);
      }; // End of callback

      // Make sure we have parameters to pass to the method
      this._params = this._params || [];

      // Add in our callback which resolves the promise we returned
      this._params.push(callback);

      // Stub our HTTPClient call so that we can capture it
      this._httpClient = this._obj.options.rest || this._obj.options.api;
      this._httpClient.request.yields(null, {});

      let m = this._obj[this._classMethod];
      m.apply(this._obj, this._params);
    });
  });
};
