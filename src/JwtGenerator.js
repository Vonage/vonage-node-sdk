import uuid from "uuid";
import jwt from "jsonwebtoken";

class JwtGenerator {
  /**
   * Generate a JSON Web Token (JWT).
   *
   * @param {Buffer} cert - the private key certificate to be used when signing
   * the claims.
   * @param {Object} claims - additional claims to include within the generated
   * JWT.
   *
   * @returns {String} the generated token
   */
  generate(cert, claims = {}) {
    if (!(cert instanceof Buffer)) {
      throw new Error("cert must be of type Buffer");
    }
    if (typeof claims !== "object") {
      throw new Error("claims must be of type object");
    }

    var toSign = {
      iat: claims.issuedAt || parseInt(Date.now() / 1000, 10),
      jti: claims.jti || uuid.v1()
    };
    Object.keys(claims).forEach(key => {
      toSign[key] = claims[key];
    });

    var token = jwt.sign(toSign, cert, { algorithm: "RS256" });
    return token;
  }
}

module.exports = JwtGenerator;
