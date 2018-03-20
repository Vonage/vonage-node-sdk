"use strict";

class NumberInsight {
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition NumberInsight options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
  }

  /**
   * Get insight on the provided number.
   *
   * @param {Object} options - The options for Number Insight
   * @param {string} options.level - the level of insight: 'basic', 'standard'
   *                 or 'advanced'.
   *                 If no `level` value is provided, or an unrecognised value
   *                 is used, 'basic' level insight will be used.
   * @param {string} options.number - the phone number to retrieve insight on
   * @param {string} options.country - 'basic' and 'standard' only.
   *                 An ISO 3166 Alpha 2 country code
   *                 https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   * @param {string} options. ip - 'advanced' only.
   *                 The IP address in IPv4 notation of the endpoint the
   *                 user connected from.
   * @param {Array}  options.features - 'advanced' only.
   *                 An Array detailing the information you want for this phone
   *                 number. Possible Array elements are:
   *                 - type: number is one of the following: mobile, landline,
   *                          landline_premium or unknown phone number.
   *                 - valid: number exists.
   *                 - reachable: is number available now.
   *                 - carrier: the MCCMNC for the carrier number is registered
   *                             with. This is either: <ISO country code>-FIXED
   *                             or <ISO country code>-PREMIUM.
   *                 - ported: if the user has changed carrier for number.
   *                 - roaming: the subscriber is outside their home network
   *
   * @param {string} options.callback - 'advanced' only.
   *                 The callback to be called when the API call completes.
   * @param {Number} options.callback_timeout - 'advanced' only.
   *                 The maximum wait until the Number Insight Return Parameters
   *                 are sent to callback. This is a value between 1000 - 30000ms
   *                 inclusive. The default is 30000 ms.
   * @param {string} options.callback_method - 'advanced' only.
   *                 The HTTP method used to send the Number Insight Return
   *                 Parameters to callback. Must be GET or POST. The default
   *                 value is GET.
   * @param {string} options.client_ref - 'advanced' only.
   *                 A 40 character reference string returned in the Number
   *                 Insight Return Parameters. This may be useful for your
   *                 internal reports.
   * @param {string} options['include-intermediate-callbacks'] - 'advanced' only.
   *                 Tells the Nexmo platform to make callbacks as soon as an
   *                 individual piece of information is retrieved.
   */
  get(options, callback) {
    var level = options.level;
    // remove 'level' as it's a library-only parameter
    delete options.level;

    if (level === "advanced") {
      return this.advanced(options, callback);
    } else if (level === "advancedAync") {
      return this.advancedAsync(options, callback);
    } else if (level === "standard") {
      return this.standard(options, callback);
    } else if (level === "basic") {
      return this.basic(options, callback);
    }

    throw new Error("Unknown insight type: " + level);
  }

  _fetchInsights(type, number, callback) {
    if (typeof number !== "object") {
      number = { number };
    }

    if (!number.number) {
      return callback("Missing Mandatory field - number");
    }

    let numberPattern = new RegExp("^[0-9 +()-]*$");
    if (!numberPattern.test(number.number)) {
      return callback(
        "Number can contain digits and may include any or all of the following: white space, -,+, (, )."
      );
    }

    return this.options.rest.get(`/ni/${type}/json`, number, callback);
  }

  basic(number, callback) {
    return this._fetchInsights("basic", number, callback);
  }

  standard(number, callback) {
    return this._fetchInsights("standard", number, callback);
  }

  advanced(number, callback) {
    return this._fetchInsights("advanced", number, callback);
  }

  advancedAsync(options, url, callback) {
    // They've passed two strings instead of an object
    // for the first parameter, so build the object ourselves
    if (typeof url === "string") {
      options = { number: options, callback: url };
    }

    if (!options.number || !options.callback) {
      return callback("Missing Mandatory fields (number and/or callback)");
    }

    return this.options.rest.get(`/ni/advanced/async/json`, options, callback);
  }
}

export default NumberInsight;
