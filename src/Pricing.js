"use strict";

import Utils from "./Utils";

class Pricing {
  static get PATH() {
    return "/account/{endpoint}/outbound/{type}";
  }

  constructor(credentials, options) {
    this.creds = credentials;
    this.options = options;
  }

  get(type, country, callback) {
    return this.options.rest.get(
      Pricing.PATH.replace("{endpoint}", "get-pricing").replace("{type}", type),
      { country },
      callback
    );
  }

  getFull(type, callback) {
    return this.options.rest.get(
      Pricing.PATH.replace("{endpoint}", "get-full-pricing").replace(
        "{type}",
        type
      ),
      callback
    );
  }

  getPrefix(type, prefix, callback) {
    return this.options.rest.get(
      Pricing.PATH.replace("{endpoint}", "get-prefix-pricing").replace(
        "{type}",
        type
      ),
      { prefix },
      callback
    );
  }

  getPhone(type, phone, callback) {
    return this.options.rest.get(
      Pricing.PATH.replace("{endpoint}", "get-phone-pricing").replace(
        "{type}",
        type
      ),
      { phone },
      callback
    );
  }
}

export default Pricing;
