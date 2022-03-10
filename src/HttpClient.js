var https = require("https");
var http = require("http");
var request = require("request");
var querystring = require("query-string");
var URL = require("url").URL;

const isValidUrl = (s) => {
  if (!s || s === null) return false;

  try {
    if (s === "api.nexmo.com") return s;
    let o = new URL(s);
    return o.host;
  } catch (err) {
    return false;
  }
};

class HttpClient {
  constructor(options, credentials) {
    let hostOverride = isValidUrl(options.host);
    this.credentials = credentials;
    this.host = hostOverride ? hostOverride : `rest.nexmo.com`;
    this.port = options.port || 443;
    this.https = options.https || https;
    this.http = options.http || http;
    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    };
    this.logger = options.logger;
    this.timeout = options.timeout;
    this.requestLib = request;

    if (options.userAgent) {
      this.headers["User-Agent"] = options.userAgent;
    }
  }

  request(
    endpoint,
    method,
    callback,
    skipJsonParsing = false,
    customResponseParser
  ) {
    if (typeof method === "function") {
      callback = method;
      endpoint.method = endpoint.method || "GET";
    } else if (typeof method !== "undefined") {
      endpoint.method = method;
    }

    var options = {
      host: endpoint.host ? endpoint.host : this.host,
      port: this.port,
      path: endpoint.path,
      method: endpoint.method,
      headers: Object.assign({}, this.headers, endpoint.headers),
    };

    if (this.timeout !== undefined) {
      options.timeout = this.timeout;
    }

    // Allow existing headers to be overridden
    // Allow new headers to be added
    if (endpoint.headers) {
      Object.keys(endpoint.headers).forEach(function (key) {
        options.headers[key] = endpoint.headers[key];
      });
    }

    // the output here can returnn one of two options:
    // - Using `sig` & `timestamp` in the JSON body
    // - Using `sig` & `timestamp` in the query string

    if (this.credentials.signatureSecret && this.credentials.signatureMethod) {
      // you must first add a timestamp
      let params;
      let splitPath;
      let path;

      // determine if the response should be querystring or JSON body
      if (!endpoint.body) {
        // this branch is for query string
        splitPath = options.path.split(/\?(.+)/);
        path = splitPath[0];

        params = querystring.parse(splitPath[1]);
      } else {
        // this section is for JSON body
        params = JSON.parse(endpoint.body);
      }

      // add timestamp if not already present
      if (!params.timestamp) {
        params.timestamp = ((new Date().getTime() / 1000) | 0).toString();
      }

      // strip API Secret
      delete params.api_secret;

      let hash = this.credentials.generateSignature(params);
      params.sig = hash;

      if (!endpoint.body) {
        //this section is for querystring
        let query = "";

        // rebuild query
        Object.keys(params)
          .sort()
          .forEach((key) => {
            query += "&" + key + "=" + encodeURI(params[key]);
          });

        // replace the first & with ?
        query = query.replace(/&/i, "?");

        options.path = `${path}${query}`;
      } else {
        endpoint.body = JSON.stringify(params);
      }
    }

    this.logger.info("Request:", options, "\nBody:", endpoint.body);

    var request;

    if (options.port === 443) {
      request = this.https.request(options);
    } else {
      request = this.http.request(options);
    }

    request.end(endpoint.body);

    // Keep an array of String or Buffers,
    // depending on content type (binary or JSON) of response
    var responseData = [];

    request.on("response", (response) => {
      var isBinary =
        response.headers["content-type"] === "application/octet-stream";
      if (!isBinary) {
        response.setEncoding("utf8");
      }

      response.on("data", (chunk) => {
        responseData.push(chunk);
      });

      response.on("end", () => {
        this.logger.info("response ended:", response.statusCode);
        if (callback) {
          if (isBinary) {
            responseData = Buffer.concat(responseData);
          }

          this.__parseResponse(
            response,
            responseData,
            endpoint.method,
            callback,
            skipJsonParsing,
            customResponseParser
          );
        }
      });
      response.on("close", (e) => {
        if (e) {
          this.logger.error(
            "problem with API request detailed stacktrace below "
          );
          this.logger.error(e);
          callback(e);
        }
      });
    });
    request.on("error", (e) => {
      this.logger.error("problem with API request detailed stacktrace below ");
      this.logger.error(e);
      callback(e);
    });
  }

  __parseResponse(
    httpResponse,
    data,
    method,
    callback,
    skipJsonParsing,
    customResponseParser
  ) {
    const isArrayOrBuffer = data instanceof Array || data instanceof Buffer;
    if (!isArrayOrBuffer) {
      throw new Error("data should be of type Array or Buffer");
    }

    const status = httpResponse.statusCode;
    const headers = httpResponse.headers;

    let response = null;
    var error = null;

    try {
      if (status >= 500) {
        error = {
          message: "Server Error",
          statusCode: status,
        };
      } else if (
        httpResponse.headers["content-type"] === "application/octet-stream"
      ) {
        response = data;
      } else if (status === 429) {
        // 429 does not return a parsable body
        if (!headers["retry-after"]) {
          // retry based on allowed per second
          const retryAfterMillis = method === "POST" ? 1000 / 2 : 1000 / 5;
          headers["retry-after"] = retryAfterMillis;
        }
        error = {
          body: data.join(""),
        };
      } else if (status === 204) {
        response = null;
      } else if (status >= 400 || status < 200) {
        error = {
          body: JSON.parse(data.join("")),
          headers,
        };
      } else if (method !== "DELETE") {
        if (!!skipJsonParsing) {
          response = data.join("");
        } else {
          response = JSON.parse(data.join(""));
        }
      } else {
        response = data;
      }
    } catch (parseError) {
      this.logger.error(parseError);
      this.logger.error(
        "could not convert API response to JSON, above error is ignored and raw API response is returned to client"
      );
      this.logger.error("Raw Error message from API ");
      this.logger.error(`"${data}"`);

      error = {
        status: status,
        message: "The API response could not be parsed.",
        body: data.join(""),
        parseError: parseError,
      };
    }

    if (error) {
      error.statusCode = status;
      error.headers = headers;
    }

    if (typeof callback === "function") {
      if (typeof customResponseParser === "function") {
        // don't try to parse the response on errors
        if (response) {
          response = customResponseParser(response);
        }
      }
      callback(error, response);
    }
  }

  _addLimitedAccessMessageToErrors(callback, limitedAccessStatus) {
    return function (err, data) {
      if (err && err.status == limitedAccessStatus) {
        err._INFO_ =
          "This endpoint may need activating on your account. Please email support@nexmo.com for more information";
      }

      return callback(err, data);
    };
  }

  get(path, params, callback, useJwt = false, useBasicAuth = false) {
    if (!callback) {
      if (typeof params == "function") {
        callback = params;
        params = {};
      }
    }

    params = params || {};
    if (!useJwt && !useBasicAuth) {
      params["api_key"] = this.credentials.apiKey;
      params["api_secret"] = this.credentials.apiSecret;
    }

    path = path + "?" + querystring.stringify(params);

    const headers = {
      "Content-Type": "application/json",
    };
    if (useJwt) {
      headers["Authorization"] = `Bearer ${this.credentials.generateJwt()}`;
    }
    if (useBasicAuth) {
      headers["Authorization"] = `Basic ${Buffer.from(
        this.credentials.apiKey + ":" + this.credentials.apiSecret
      ).toString("base64")}`;
    }

    this.request(
      {
        path: path,
        headers,
      },
      "GET",
      callback
    );
  }

  delete(path, callback, useJwt, useBasicAuth) {
    let params = {};
    if (!useJwt && !useBasicAuth) {
      params["api_key"] = this.credentials.apiKey;
      params["api_secret"] = this.credentials.apiSecret;
    }

    let headers = {};

    if (useBasicAuth) {
      headers["Authorization"] = `Basic ${Buffer.from(
        this.credentials.apiKey + ":" + this.credentials.apiSecret
      ).toString("base64")}`;
    }
    path = path + "?" + querystring.stringify(params);

    this.request(
      {
        path: path,
        headers,
      },
      "DELETE",
      callback
    );
  }

  postFile(path, options, callback, useJwt) {
    let qs = {};
    if (!useJwt) {
      qs["api_key"] = this.credentials.apiKey;
      qs["api_secret"] = this.credentials.apiSecret;
    }

    if (Object.keys(qs).length) {
      let joinChar = "?";
      if (path.indexOf(joinChar) !== -1) {
        joinChar = "&";
      }
      path = path + joinChar + querystring.stringify(qs);
    }

    const file = options.file;
    delete options.file; // We don't send this as metadata

    const formData = {};

    if (file) {
      formData["filedata"] = {
        value: file,
        options: {
          filename: options.filename || null,
        },
      };
    }

    if (options.info) {
      formData.info = JSON.stringify(options.info);
    }

    if (options.url) {
      formData.url = options.url;
    }

    let protocol = this.port === 443 ? "https://" : "http://";

    this.requestLib.post(
      {
        url: protocol + this.host + path,
        formData: formData,
        headers: {
          Authorization: `Bearer ${this.credentials.generateJwt()}`,
        },
      },
      callback
    );
  }

  post(path, params, callback, useJwt) {
    let qs = {};
    if (!useJwt) {
      qs["api_key"] = this.credentials.apiKey;
      qs["api_secret"] = this.credentials.apiSecret;
    }

    let joinChar = "?";
    if (path.indexOf(joinChar) !== -1) {
      joinChar = "&";
    }

    path = path + joinChar + querystring.stringify(qs);

    this.request(
      {
        path: path,
        body: querystring.stringify(params),
      },
      "POST",
      callback
    );
  }

  postJson(path, params, callback, useJwt, useBasicAuth) {
    let qs = {};
    if (!useJwt && !useBasicAuth) {
      qs["api_key"] = this.credentials.apiKey;
      qs["api_secret"] = this.credentials.apiSecret;
    }

    let joinChar = "?";
    if (path.indexOf(joinChar) !== -1) {
      joinChar = "&";
    }

    path = path + joinChar + querystring.stringify(qs);

    let headers = {
      "Content-Type": "application/json",
    };
    if (useBasicAuth) {
      headers["Authorization"] = `Basic ${Buffer.from(
        this.credentials.apiKey + ":" + this.credentials.apiSecret
      ).toString("base64")}`;
    }

    this.request(
      {
        path: path,
        body: JSON.stringify(params),
        headers,
      },
      "POST",
      callback
    );
  }

  postUseQueryString(path, params, callback, useJwt) {
    params = params || {};
    if (!useJwt) {
      params["api_key"] = this.credentials.apiKey;
      params["api_secret"] = this.credentials.apiSecret;
    }

    path = path + "?" + querystring.stringify(params);
    this.request(
      {
        path: path,
      },
      "POST",
      callback
    );
  }
}

export default HttpClient;
