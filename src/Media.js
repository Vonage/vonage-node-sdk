"use strict";

import nexmo from "./index";
import fs from "fs";
import querystring from "querystring";

class Media {
  static get PATH() {
    return "/v3/media";
  }

  constructor(credentials, options) {
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

  upload(opts, callback) {
    opts = opts || {};
    if (!opts.file && !opts.url) {
      throw new Error(
        "You must provide either 'file' or 'url' to upload a file"
      );
    }

    if (opts.file) {
      opts.file = fs.createReadStream(opts.file);
    }
    return this.options.api.postFile(
      Media.PATH,
      opts,
      function(err, response, body) {
        if (err) {
          return callback(err);
        }

        let location = "";
        if (response && response.headers) {
          location = response.headers.location;
        }

        return callback(null, location);
      },
      true
    );
  }

  search(options, callback) {
    if (typeof options == "function" && !callback) {
      callback = options;
      options = {};
    }

    options = options || {};

    return this._makeRequest("GET", Media.PATH, options, {}, callback);
  }

  // If If-Modified-Since header is provided and the data hasn't changed, the
  // user will receive an empty body in the callback, NOT an error
  download(id, headers, callback) {
    if (!callback && typeof headers == "function") {
      callback = headers;
      headers = {};
    }

    return this._makeRequest(
      "GET",
      `${Media.PATH}/${id}`,
      {},
      headers,
      callback,
      true
    );
  }

  delete(id, callback) {
    return this._makeRequest("DELETE", `${Media.PATH}/${id}`, {}, {}, callback);
  }

  get(id, callback) {
    return this._makeRequest(
      "GET",
      `${Media.PATH}/${id}/info`,
      {},
      {},
      callback
    );
  }

  update(id, opts, callback) {
    return this._makeRequest(
      "PUT",
      `${Media.PATH}/${id}/info`,
      opts,
      {},
      callback
    );
  }

  _makeRequest(verb, path, options, headers, callback, skipJsonParsing) {
    headers = Object.assign(
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      },
      headers
    );

    let req = {};
    if (verb.toUpperCase() === "GET") {
      if (Object.keys(options).length) {
        path = path + "?" + querystring.stringify(options);
      }
    } else {
      req["body"] = JSON.stringify(options);
    }

    req["path"] = path;
    req["headers"] = headers;

    return this.options.api.request(req, verb, callback, skipJsonParsing);
  }
}

export default Media;
