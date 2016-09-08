var https = require('https');
var http = require('http');

var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
};

class HttpClient {
  constructor(options) {
    this.port = 443 || options.port;
    this.https = options.https || https;
    this.http =  options.http || http;
    this.headers = headers;
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
    else {
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

    this.logger.info(options);
    var request;

    if (options.port == 443) {
        request = this.https.request(options);
    } else {
        request = http.request(options);
    }
    
    request.end(endpoint.body);
    
    var responseReturn = '';
    request.on('response', (response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            responseReturn += chunk;
        });
        response.on('end', () => {
            this.logger.info('response ended');
            if (callback) {
                var retJson = responseReturn;
                var err = null;
                if (method !== 'DELETE') {
                  try {
	                    retJson = JSON.parse(responseReturn);
	                } catch (parsererr) {
	                    // ignore parser error for now and send raw response to client
	                    this.logger.error(parsererr);
	                    this.logger.error('could not convert API response to JSON, above error is ignored and raw API response is returned to client');
						          this.logger.error('Raw Error message from API ');
						          this.logger.error(responseReturn);
	                    err = parsererr;
	                }
                }
                callback(err, retJson);
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
}

export default HttpClient;
