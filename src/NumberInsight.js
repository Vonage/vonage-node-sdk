"use strict";

import nexmo from "./index";

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

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;

    this._nexmo.initialize(
      this.creds.apiKey,
      this.creds.apiSecret,
      this.options
    );
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

    if (level === "advanced" || level === "advancedAsync") {
      if (level === "advanced") {
        console.warn(
          'DEPRECATION WARNING: Number Insight Advanced with a level of "advanced" will be synchronous in v2.0+. Consider using the level "advancedAsync" to keep using the async option.'
        );
      }
      this._nexmo.numberInsightAdvancedAsync.apply(this._nexmo, arguments);
    } else if (level === "advancedSync") {
      this._nexmo.numberInsightAdvanced.apply(this._nexmo, arguments);
    } else if (level === "standard") {
      this._nexmo.numberInsightStandard.apply(this._nexmo, arguments);
    } else {
      this._nexmo.numberInsightBasic.apply(this._nexmo, arguments);
    }
  }
}

export default NumberInsight;
