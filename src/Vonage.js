import fs from "fs";
import path from "path";
import requireModule from "require-module";

import Credentials from "./Credentials";
import JwtGenerator from "./JwtGenerator";
import HashGenerator from "./HashGenerator";
import Message from "./Message";
import Messages from "./Messages";
import Voice from "./Voice";
import Number from "./Number";
import Verify from "./Verify";
import NumberInsight from "./NumberInsight";
import App from "./App";
import Account from "./Account";
import CallsResource from "./CallsResource";
import FilesResource from "./FilesResource";
import Conversion from "./Conversion";
import Media from "./Media";
import Redact from "./Redact";
import Pricing from "./Pricing";
import HttpClient from "./HttpClient";
import NullLogger from "./NullLogger";
import ConsoleLogger from "./ConsoleLogger";

const jwtGeneratorInstance = new JwtGenerator();
const hashGeneratorInstance = new HashGenerator();

class Vonage {
  /**
   * @param {Credentials} credentials - Vonage API credentials
   * @param {string} credentials.apiKey - the Vonage API key
   * @param {string} credentials.apiSecret - the Vonage API secret
   * @param {Object} options - Additional options
   * @param {boolean} options.debug - `true` to turn on debug logging
   * @param {Object} options.logger - Set a custom logger.
   * @param {string} options.appendToUserAgent - A value to append to the user agent.
   *                    The value will be prefixed with a `/`
   */
  constructor(credentials, options = { debug: false }) {
    this.credentials = Credentials.parse(credentials);
    this.options = Object.assign({}, options);

    // If no logger has been supplied but debug has been set
    // default to using the ConsoleLogger
    if (!this.options.logger && this.options.debug) {
      this.options.logger = new ConsoleLogger();
    } else if (!this.options.logger) {
      // Swallow the logging
      this.options.logger = new NullLogger();
    }

    let userAgent = "@vonage/server-sdk/UNKNOWN node/UNKNOWN";
    try {
      var packageDetails = require(path.join(__dirname, "..", "package.json"));
      userAgent = `@vonage/server-sdk/${
        packageDetails.version
      } node/${process.version.replace("v", "")}`;
    } catch (e) {
      console.warn("Could not load package details");
    }
    this.options.userAgent = userAgent;
    if (this.options.appendToUserAgent) {
      this.options.userAgent += ` ${this.options.appendToUserAgent}`;
    }

    // This is legacy, everything should use rest or api going forward
    this.options.httpClient = new HttpClient(
      Object.assign(
        { host: this.options.restHost || "rest.nexmo.com" },
        this.options
      ),
      this.credentials
    );

    // We have two different hosts, so we use two different HttpClients
    this.options.api = new HttpClient(
      Object.assign(
        { host: this.options.apiHost || "api.nexmo.com" },
        this.options
      ),
      this.credentials
    );
    this.options.rest = new HttpClient(
      Object.assign(
        { host: this.options.restHost || "rest.nexmo.com" },
        this.options
      ),
      this.credentials
    );

    this.message = new Message(this.credentials, this.options);
    this.messages = new Messages(this.credentials, this.options);
    this.voice = new Voice(this.credentials, this.options);
    this.number = new Number(this.credentials, this.options);
    this.verify = new Verify(this.credentials, this.options);
    this.numberInsight = new NumberInsight(this.credentials, this.options);
    this.applications = new App(this.credentials, this.options);
    this.account = new Account(this.credentials, this.options);
    this.calls = new CallsResource(this.credentials, this.options);
    this.files = new FilesResource(this.credentials, this.options);
    this.conversion = new Conversion(this.credentials, this.options);
    this.media = new Media(this.credentials, this.options);
    this.redact = new Redact(this.credentials, this.options);
    this.pricing = new Pricing(this.credentials, this.options);

    const mapping = [
      { service: "video", client: "Video", package: "@vonage/video" },
    ];

    for (let i = 0; i < mapping.length; i++) {
      try {
        let packageName = mapping[i].package;
        const client = requireModule(packageName);
        this[mapping[i].service] = new client[mapping[i].client](
          this.credentials
        );
      } catch (err) {
        // do nothing, if we can't load the package assume it's just not there
      }
    }

    /**
     * @deprecated Please use vonage.applications
     */
    this.app = this.applications;
  }

  /**
   * Generate a JSON Web Token (JWT).
   *
   * The private key used upon Vonage instance construction will be used to sign
   * the JWT. The application_id you used upon Vonage instance creation will be
   * included in the claims for the JWT, however this can be overridden by passing
   * an application_id as part of the claims.
   *
   * @param {Object} claims - name/value pair claims to sign within the JWT
   *
   * @returns {String} the generated token
   */

  generateJwt(claims = {}) {
    if (claims.application_id === undefined) {
      claims.application_id = this.credentials.applicationId;
    }
    return Vonage.generateJwt(this.credentials.privateKey, claims);
  }

  /**
   * Generate a Signature Hash.
   *
   * @param {Object} params - params to generate hash from
   *
   * @returns {String} the generated token
   */
  generateSignature(params) {
    return this.credentials.generateSignature(params);
  }
}

/**
 * Generate a JSON Web Token (JWT).
 *
 * @param {String|Buffer} privateKey - the path to the private key certificate
 *          to be used when signing the claims.
 * @param {Object} claims - name/value pair claims to sign within the JWT
 *
 * @returns {String} the generated token
 */
Vonage.generateJwt = (privateKey, claims) => {
  if (!(privateKey instanceof Buffer)) {
    if (!fs.existsSync(privateKey)) {
      throw new Error(`File "${privateKey}" not found.`);
    } else {
      privateKey = fs.readFileSync(privateKey);
    }
  }
  return jwtGeneratorInstance.generate(privateKey, claims);
};

/**
 * Generate a Signature Hash.
 *
 * @param {String} method - the method to be used when creating the hash
 * @param {String} secret - the secret to be used when creating the hash
 * @param {Object} params - params to generate hash from
 *
 * @returns {String} the generated token
 */
Vonage.generateSignature = (method, secret, params) => {
  return hashGeneratorInstance.generate(method, secret, params);
};

export default Vonage;
