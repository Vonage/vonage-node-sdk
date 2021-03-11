"use strict";

import fs from "fs";
import querystring from "querystring";

class Redact {
  static get PATH() {
    return "/v1/redact";
  }

  constructor(credentials, options) {
    this.creds = credentials;
    this.options = options;
  }

  transaction(id, product, opts, callback) {
    if (typeof callback === "undefined" && typeof opts === "function") {
      callback = opts;
      opts = {};
    }

    opts = opts || {};

    return this.options.api.postJson(
      `${Redact.PATH}/transaction`,
      { id, product, ...opts },
      function(err, response, body) {
        if (err) {
          return callback(err);
        }

        return callback(null, body);
      }
    );
  }
}

export default Redact;
