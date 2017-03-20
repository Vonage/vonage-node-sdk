var https = require('https');
var http = require('http');

class HttpClient {
  constructor(options) {
    this.port = 443 || options.port;
    this.https = options.https || https;
    this.http =  options.http || http;
    this.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    };
    this.logger = options.logger;

    if(options.userAgent) {
      this.headers['User-Agent'] = options.userAgent;
    }
  }

  request(endpoint, method, callback) {
    if (typeof method == 'function') {
        callback = method;
        endpoint.method = endpoint.method || 'GET';
    }
    else if (typeof method !== 'undefined') {
      	endpoint.method = method;
    }

    if (endpoint.method == 'POST' || endpoint.method == 'DELETE') {
        // TODO: verify the following fix is required
        // Fix broken due ot 411 Content-Length error now sent by Nexmo API
        // PL 2016-Sept-6 - commented out Content-Length 0
        // headers['Content-Length'] = 0;
    }
    var options = {
        host: endpoint.host?endpoint.host:'rest.nexmo.com',
        port: this.port,
        path: endpoint.path,
        method: endpoint.method,
        headers: this.headers
    };

    // Allow existing headers to be overridden
    // Allow new headers to be added
    if(endpoint.headers) {
      Object.keys(endpoint.headers).forEach(function(key) {
        options.headers[key] = endpoint.headers[key];
      });
    }

    this.logger.info('Request:', options, '\nBody:', endpoint.body);
    var request;

    if (options.port == 443) {
        request = this.https.request(options);
    } else {
        request = http.request(options);
    }

    request.end(endpoint.body);

    // Keep an array of String or Buffers,
    // depending on content type (binary or JSON) of response
    var responseData = [];

    request.on('response', (response) => {
        var isBinary = response.headers['content-type'] === 'application/octet-stream';
        if (!isBinary) { response.setEncoding('utf8'); }

        response.on('data', (chunk) => {
          responseData.push(chunk);
        });

        response.on('end', () => {
            this.logger.info('response ended:', response.statusCode);
            if (callback) {
              if (isBinary) { responseData = Buffer.concat(responseData); }

              this.__parseResponse(
                response,
                responseData,
                method,
                callback
              );
            }
        })
        response.on('close', (e) => {
            this.logger.error('problem with API request detailed stacktrace below ');
            this.logger.error(e);
            callback(e);
        });
    });
    request.on('error', (e) => {
        this.logger.error('problem with API request detailed stacktrace below ');
        this.logger.error(e);
        callback(e);
    });

  }

  __parseResponse(httpResponse, data, method, callback) {
    const isArrayOrBuffer = (data instanceof Array || data instanceof Buffer);
    if(!isArrayOrBuffer) {
      throw new Error('data should be of type Array or Buffer');
    }

    const status = httpResponse.statusCode;

    let response = null;
    var error = null;

    try {
      if (status >= 500) {
        error = { message: 'Server Error: '+status };
      } else if (httpResponse.headers['content-type'] === 'application/octet-stream') {
        response = data;
      } else if (status === 429) {
        error = {statusCode: 429};
      } else if (status >= 400 || status < 200) {
        error = JSON.parse(data.join(''));
      } else if(method !== 'DELETE') {
        response = JSON.parse(data.join(''));
      } else {
        response = data;
      }
    } catch (parseError) {
      this.logger.error(parseError);
      this.logger.error('could not convert API response to JSON, above error is ignored and raw API response is returned to client');
      this.logger.error('Raw Error message from API ');
      this.logger.error(`"${data}"`);

      error = {
        statusCode: status,
        message: "The API response could not be parsed.",
        data: data,
        parseError: parseError
      };
    }

    callback(error, response);
  }
}

export default HttpClient;
