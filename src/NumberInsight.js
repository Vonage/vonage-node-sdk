"use strict";

import Utils from "./Utils";

class NumberInsight {
  static get PATH() {
    return "/ni/{type}/json";
  }

  static get ERROR_MESSAGES() {
    return {
      numberInsightAdvancedValidation:
        "Missing Mandatory fields (number and/or callback url)",
      numberInsightValidation: "Missing Mandatory field - number",
      numberInsightPatternFailure:
        "Number can contain digits and may include any or all of the following: white space, -,+, (, )."
    };
  }
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
   *                 Tells the Vonage platform to make callbacks as soon as an
   *                 individual piece of information is retrieved.
   */
  get(options, callback) {
    var level = options.level;
    // remove 'level' as it's a library-only parameter
    delete options.level;

    if (level === "advanced" || level === "advancedAsync") {
      if (level === "advanced") {
        console.warn(
          'DEPRECATION WARNING: Number Insight Advanced with a level of "advanced" will be synchronous in v2.0+. Consider using the level "advancedAsync" to keep using the async option.'
        );
      }
      this._numberInsightAsync(options, callback);
    } else if (level === "advancedSync") {
      this._numberInsightCommon("advanced", options, callback);
    } else if (level === "standard") {
      this._numberInsightCommon("standard", options, callback);
    } else {
      this._numberInsightCommon("basic", options, callback);
    }
  }

  _numberInsightAsync(inputParams, callback) {
    if (!inputParams.number || !inputParams.callback) {
      Utils.sendError(
        callback,
        new Error(NumberInsight.ERROR_MESSAGES.numberInsightAdvancedValidation)
      );
    } else {
      inputParams["api_key"] = this.creds.apiKey;
      inputParams["api_secret"] = this.creds.apiSecret;
      this.options.httpClient.request(
        {
          host: this.options.apiHost || "api.nexmo.com",
          path: Utils.createPathWithQuery(
            `${NumberInsight.PATH.replace("{type}", "advanced/async")}`,
            inputParams
          )
        },
        callback
      );
    }
  }

  _numberInsightCommon(type, inputParams, callback) {
    if (this._validateNumber(inputParams, callback)) {
      var inputObj;
      if (typeof inputParams !== "object") {
        inputObj = {
          number: inputParams
        };
      } else {
        inputObj = inputParams;
      }
      inputObj["api_key"] = this.creds.apiKey;
      inputObj["api_secret"] = this.creds.apiSecret;
      this.options.httpClient.request(
        {
          host: this.options.apiHost || "api.nexmo.com",
          path: Utils.createPathWithQuery(
            `${NumberInsight.PATH.replace("{type}", type)}`,
            inputObj
          )
        },
        callback
      );
    }
  }

  _validateNumber(inputParams, callback) {
    var numberPattern = new RegExp("^[0-9 +()-]*$");

    if (typeof inputParams === "object" && !inputParams.number) {
      Utils.sendError(
        callback,
        new Error(NumberInsight.ERROR_MESSAGES.numberInsightValidation)
      );
    } else if (
      typeof inputParams === "object" &&
      !numberPattern.test(inputParams.number)
    ) {
      Utils.sendError(
        callback,
        new Error(NumberInsight.ERROR_MESSAGES.numberInsightPatternFailure)
      );
    } else if (
      typeof inputParams !== "object" &&
      (!inputParams || !numberPattern.test(inputParams))
    ) {
      Utils.sendError(
        callback,
        new Error(NumberInsight.ERROR_MESSAGES.numberInsightPatternFailure)
      );
    }
    return true;
  }
}

export default NumberInsight;
