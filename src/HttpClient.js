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
    this.log = options.log || function() {};
    this.headers = headers;
    
    if(options.userAgent) {
      this.headers['User-Agent'] = options.userAgent;
    }
  }
  
  request(endpoint, method, callback) {
    if (typeof method == 'function') {
        callback = method;
        method = 'GET';
    }
    if (method == 'POST' || method == 'DELETE') {
        // TODO: verify the following fix is required
        // Fix broken due ot 411 Content-Length error now sent by Nexmo API
        // PL 2016-Sept-6 - commented out Content-Length 0
        // headers['Content-Length'] = 0;
    }
    var options = {
        host: endpoint.host?endpoint.host:'rest.nexmo.com',
        port: this.port,
        path: endpoint.path,
        method: method,
        headers: this.headers
    };
    this.log(options);
    var request;
  	if (true) { // set to false to verify the request without sending the actual request
        if (options.port == 443) {
            request = this.https.request(options);
        } else {
            request = http.request(options);
        }
  	    request.end();
  	    var responseReturn = '';
  	    request.on('response', (response) => {
  	        response.setEncoding('utf8');
  	        response.on('data', (chunk) => {
  	            responseReturn += chunk;
  	        });
  	        response.on('end', () => {
  	            this.log('response ended');
  	            if (callback) {
  	                var retJson = responseReturn;
  	                var err = null;
                    if (method !== 'DELETE') {
                      try {
    	                    retJson = JSON.parse(responseReturn);
    	                } catch (parsererr) {
    	                    // ignore parser error for now and send raw response to client
    	                    this.log(parsererr);
    	                    this.log('could not convert API response to JSON, above error is ignored and raw API response is returned to client');
    						          this.log('Raw Error message from API ');
    						          this.log(responseReturn);
    	                    err = parsererr;
    	                }
                    }
                    callback(err, retJson);
  	            }
  	        })
  	        response.on('close', (e) => {
  	            this.log('problem with API request detailed stacktrace below ');
  	            this.log(e);
  	            callback(e);
  	        });
  	    });
  	    request.on('error', (e) => {
  	        this.log('problem with API request detailed stacktrace below ');
  	        this.log(e);
  	        callback(e);
  	    });
  	}
  }
}

module.exports = HttpClient;
