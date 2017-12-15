"use strict";
import querystring from "querystring";

module.exports = function(chai, utils) {
  utils.addChainableMethod(chai.Assertion.prototype, "match", function() {});

  utils.addMethod(chai.Assertion.prototype, "url", function(url) {
    if (!this._obj.args) {
      throw new Error("This assertion should only be used on Sinon spies");
    }
    if (!this._obj.args[0]) {
      throw new Error(
        "Spy was never called; cannot access arguments to check URL"
      );
    }

    let calledPath = this._obj.args[0][0].path;

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

    const path = new chai.Assertion(calledPath);
    path.assert(
      path._obj === url,
      "expected url #{this} to match '" + url + "'",
      "expected url #{this} to not match '" + url + "'"
    );
  });
};
