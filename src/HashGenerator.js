const crypto = require("crypto");

class HashGenerator {
  /**
   * Generate a Signature Hash.
   *
   * @param {String} method - the method to be used when creating the hash
   * @param {String} secret - the secret to be used when creating the hash
   * @param {Object} params - params to generate hash from
   *
   * @returns {String} the generated token
   */
  generate(method, secret, params) {
    params = params || {};
    var signedQuery = "";

    params = JSON.parse(JSON.stringify(params));

    if (params.sig) {
      delete params.sig;
    }

    Object.keys(params)
      .sort()
      .forEach(key => {
        // replace & and = with _
        signedQuery += "&" + key + "=" + params[key].replace(/\&|\=/g, "_");
      });

    var hash = "";

    switch (method) {
      case "md5hash":
        signedQuery += secret;
        hash = crypto
          .createHash("md5")
          .update(signedQuery)
          .digest("hex");
        break;
      case "md5":
      case "sha1":
      case "sha256":
      case "sha512":
        hash = crypto
          .createHmac(method, secret)
          .update(signedQuery)
          .digest("hex");
        break;

      default:
        throw `Unknown signature algorithm: ${method}. Expected: md5hash, md5, sha1, sha256, or sha512`;
    }

    return hash;
  }
}

module.exports = HashGenerator;
