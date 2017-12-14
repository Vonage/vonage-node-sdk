var https = require("https");
var http = require("http");
var querystring = require("querystring");

class HttpClient {
  constructor(options, credentials) {
    this.credentials = credentials;
    this.host = options.host || "rest.nexmo.com";
    this.port = options.port || 443;
    this.https = options.https || https;
    this.http = options.http || http;
    this.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    };
    this.logger = options.logger;

    if (options.userAgent) {
      this.headers["User-Agent"] = options.userAgent;
    }
  }

  request(endpoint, method, callback) {
    if (typeof method === "function") {
      callback = method;
      endpoint.method = endpoint.method || "GET";
    } else if (typeof method !== "undefined") {
      endpoint.method = method;
    }

    if (endpoint.method === "POST" || endpoint.method === "DELETE") {
      // TODO: verify the following fix is required
      // Fix broken due ot 411 Content-Length error now sent by Nexmo API
      // PL 2016-Sept-6 - commented out Content-Length 0
      // headers['Content-Length'] = 0;
    }
    var options = {
      host: endpoint.host ? endpoint.host : this.host,
      port: this.port,
      path: endpoint.path,
      method: endpoint.method,
      headers: Object.assign({}, this.headers)
    };

    // Allow existing headers to be overridden
    // Allow new headers to be added
    if (endpoint.headers) {
      Object.keys(endpoint.headers).forEach(function(key) {
        options.headers[key] = endpoint.headers[key];
      });
    }

    this.logger.info("Request:", options, "\nBody:", endpoint.body);
    var request;

    if (options.port === 443) {
      request = this.https.request(options);
    } else {
      request = http.request(options);
    }

    request.end(endpoint.body);

    // Keep an array of String or Buffers,
    // depending on content type (binary or JSON) of response
    var responseData = [];

    request.on("response", response => {
      var isBinary =
        response.headers["content-type"] === "application/octet-stream";
      if (!isBinary) {
        response.setEncoding("utf8");
      }

      response.on("data", chunk => {
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
            callback
          );
        }
      });
      response.on("close", e => {
        this.logger.error(
          "problem with API request detailed stacktrace below "
        );
        this.logger.error(e);
        callback(e);
      });
    });
    request.on("error", e => {
      this.logger.error("problem with API request detailed stacktrace below ");
      this.logger.error(e);
      callback(e);
    });
  }

  __parseResponse(httpResponse, data, method, callback) {
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
        error = { message: "Server Error", statusCode: status };
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
        error = { body: data.join("") };
      } else if (status === 204) {
        response = null;
      } else if (status >= 400 || status < 200) {
        error = { body: JSON.parse(data.join("")), headers };
      } else if (method !== "DELETE") {
        response = JSON.parse(data.join(""));
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
        parseError: parseError
      };
    }

    if (error) {
      error.statusCode = status;
      error.headers = headers;
    }

    if (typeof callback === "function") {
      callback(error, response);
    }
  }

  _addLimitedAccessMessageToErrors(callback, limitedAccessStatus) {
    return function(err, data) {
      if (err && err.status == limitedAccessStatus) {
        err._INFO_ =
          "This endpoint may need activating on your account. Please email support@nexmo.com for more information";
      }

      return callback(err, data);
    };
  }

  get(path, params, callback) {
    if (!callback) {
      if (typeof params == "function") {
        callback = params;
        params = {};
      }
    }

    params = params || {};
    params["api_key"] = this.credentials.apiKey;
    params["api_secret"] = this.credentials.apiSecret;

    path = path + "?" + querystring.stringify(params);

    this.request({ path: path }, "GET", callback);
  }

  post(path, params, callback) {
    let qs = {
      api_key: this.credentials.apiKey,
      api_secret: this.credentials.apiSecret
    };

    let joinChar = "?";
    if (path.indexOf(joinChar) !== -1) {
      joinChar = "&";
    }

    path = path + joinChar + querystring.stringify(qs);

    this.request(
      { path: path, body: querystring.stringify(params) },
      "POST",
      callback
    );
  }

  postUseQueryString(path, params, callback) {
    params = params || {};
    params["api_key"] = this.credentials.apiKey;
    params["api_secret"] = this.credentials.apiSecret;

    path = path + "?" + querystring.stringify(params);

    this.request({ path: path }, "POST", callback);
  }
}

export default HttpClient;
