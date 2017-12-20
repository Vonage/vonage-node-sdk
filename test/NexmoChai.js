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

  utils.addProperty(chai.Assertion.prototype, "postFile", function() {
    this._httpMethod = "POST";
    this._isMultipartPost = true;
  });

  utils.addProperty(chai.Assertion.prototype, "put", function() {
    this._httpMethod = "PUT";
  });

  utils.addProperty(chai.Assertion.prototype, "delete", function() {
    this._httpMethod = "DELETE";
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
    let spy;

    return new Promise(resolve => {
      const callback = (err, data) => {
        if (!spy.args) {
          throw new Error("This assertion should only be used on Sinon spies");
        }
        if (!spy.args[0]) {
          throw new Error(
            "Spy was never called; cannot access arguments to check URL"
          );
        }

        let args = spy.args[0];

        const isFilePost = args[0].formData ? true : false;

        // If we set a HTTP method property, let's assert that the correct
        // one was used
        if (this._httpMethod) {
          let calledVerb = args[1];

          // It may be a file POST
          if (isFilePost) {
            calledVerb = "POST";
          }

          const verb = new chai.Assertion(calledVerb.toUpperCase());
          verb.assert(
            verb._obj === this._httpMethod,
            "expected HTTP verb #{this} to match '" + this._httpMethod + "'",
            "expected HTTP verb #{this} to not match '" + this._httpMethod + "'"
          );
        }

        // If we were expecting a multipart post, make sure we got one
        if (this._multipartPost) {
          const classMethod = new chai.Assertion(this._classMethod);
          classMethod.assert(
            classMethod._obj === "postFile",
            "expected HTTPClient method called #{this} to match '" +
              this._httpMethod +
              "'",
            "expected HTTPClient method called #{this} to not match '" +
              this._httpMethod +
              "'"
          );
        }

        // Next up, let's check that the path we called is what we expected
        let calledPath = args[0].path;
        if (isFilePost) {
          calledPath = args[0].url.split("nexmo.com")[1];
        }

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
        // Next up, let's check that the path we called is what we expected
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

      if (this._isMultipartPost) {
        spy = this._httpClient.requestLib.post;
      } else {
        spy = this._httpClient.request;
      }

      spy.yields(null, {});

      let m = this._obj[this._classMethod];
      m.apply(this._obj, this._params);
    });
  });
};
