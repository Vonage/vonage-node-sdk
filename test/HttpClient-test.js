import sinon from 'sinon';
import expectjs from 'expect.js';

import HttpClient from '../lib/HttpClient';
import NullLogger from '../lib/NullLogger';

var expect = require('sinon-expect').enhance(expectjs, sinon, 'was');

var logger = new NullLogger();
var fakeHttp = {
  request: function() {}
};
var fakeRequest = {
  end: function() {},
  on: function() {}
};

var defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json'
};

var client = null;

describe('HttpClient Object', function() {

  afterEach(function() {
    fakeHttp.request.restore();
  });

  it('should support requests over https', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: 'api.nexmo.com',
        method: 'GET',
        path: '/api',
        port: 443
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      https: fakeHttp,
      port: 443,
      logger: logger
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/api'
    }, 'GET', {
      some: 'data'
    });
  });

  it('should support requests over http', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: 'api.nexmo.com',
        method: 'GET',
        path: '/api',
        port: 80
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      http: fakeHttp,
      port: 80,
      logger: logger
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/api'
    }, 'GET', {
      some: 'data'
    });
  });

  it('should be possible to set the host', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: 'rest.nexmo.com',
        method: 'GET',
        path: '/api',
        port: 80
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      http: fakeHttp,
      port: 80,
      logger: logger
    });

    client.request({
      host: 'rest.nexmo.com',
      path: '/api'
    }, 'GET', {
      some: 'data'
    });
  });

  it('should be possible to set the path', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: 'api.nexmo.com',
        method: 'GET',
        path: '/some_path',
        port: 80
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      http: fakeHttp,
      port: 80,
      logger: logger
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/some_path'
    }, 'GET', {
      some: 'data'
    });
  });

  it('should be possible to set the method', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: 'api.nexmo.com',
        method: 'POST',
        path: '/api',
        port: 443
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      https: fakeHttp,
      logger: logger
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/api'
    }, 'POST', {
      some: 'data'
    });
  });

  it('should not override the method when method and callback are undefined', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: 'api.nexmo.com',
        method: 'POST',
        path: '/api',
        port: 443
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      https: fakeHttp,
      logger: logger
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/api',
      method: 'POST'
    });
  });

  it('should log requests', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request').returns(fakeRequest);

    var logged = false;
    var testLogger = {
      info: function() {
        logged = true;
      }
    };
    var client = new HttpClient({
      https: fakeHttp,
      logger: testLogger
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/api'
    }, 'GET', {
      some: 'data'
    });

    expect(logged).to.be(true);
  });

  it('should allow User-Agent header to be set via options', function() {
    var expectedUserAgent = 'nexmo-node/1.0.0/v4.4.7';

    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'User-Agent': expectedUserAgent
        },
        host: 'api.nexmo.com',
        method: 'POST',
        path: '/api',
        port: 443
      })
      .returns(fakeRequest);

    var client = new HttpClient({
      https: fakeHttp,
      logger: logger,
      userAgent: expectedUserAgent
    });

    client.request({
      host: 'api.nexmo.com',
      path: '/api'
    }, 'POST', {
      some: 'data'
    });
  });
});

describe('parseResponse', function() {

  beforeEach(function(){
    client = new HttpClient({
      https: fakeHttp,
      logger: logger
    });
  });

  it ('should parse a 500+ status code as an error', function() {
    var callback = sinon.spy();
    const headers = {'content-type' : 'application/json'};
    const response = {statusCode: 504, headers: headers};
    client.__parseResponse(response, [''], 'GET', callback);
    expect(callback).was.calledWith({ message: 'Server Error', statusCode: 504, headers: headers }, null);
  });

  it ('should parse a 400-499 status code as a JSON error', function() {
    var callback = sinon.spy();
    const headers = {'content-type' : 'application/json'};
    const response = {statusCode: 404, headers: headers};
    client.__parseResponse(response, ['{ "error" : "error" }'], 'GET', callback);
    expect(callback).was.calledWith({ statusCode: 404, body: { 'error' : 'error' }, headers: headers}, null);
  });

  it ('should parse a 200-299 status code as a JSON object', function() {
    var callback = sinon.spy();
    const response = {statusCode: 201, headers: {'content-type' : 'application/json'}};
    client.__parseResponse(response, ['{ "data" : "data" }'], 'GET', callback);
    expect(callback).was.calledWith(null, { 'data' : 'data' });
  });

  it ('should not try and parse successful DELETE request to JSON', function() {
    var callback = sinon.spy();
    const response = {statusCode: 201, headers: {'content-type' : 'application/json'}};
    client.__parseResponse(response, [''], 'DELETE', callback);
    expect(callback).was.calledWith(null, ['']);
  });

  it ('should catch invalid json and expose the data in the error', function() {
    var callback = sinon.spy();
    const response = {statusCode: 201, headers: {'content-type' : 'application/json'}};
    const data = 'not_json';
    client.__parseResponse(response, [data], 'GET', callback);
    expect(callback).was.calledWith(sinon.match({
      message: 'The API response could not be parsed.',
      body: data,
      statusCode: 201
    }), null);
  });

  it ('should parse binary data', function() {
    var callback = sinon.spy();
    var data = new Buffer('data');
    const response = {statusCode: 200, headers: {'content-type' : 'application/octet-stream'}};
    client.__parseResponse(response, data, 'GET', callback);
    expect(callback).was.calledWith(null, data);
  });

  it ('should set a default retry-after of 200 for a GET with a 429 response', function() {
    var callback = sinon.spy();
    const headers = {};
    const response = {statusCode: 429, headers: headers};
    client.__parseResponse(response, [''], 'GET', callback);
    expect(callback).was.calledWith({ statusCode: 429, body: '', headers: {'retry-after': 200}}, null);
  });

  it ('should set a default retry-after of 500 for a POST with a 429 response', function() {
    var callback = sinon.spy();
    const headers = {};
    const response = {statusCode: 429, headers: headers};
    client.__parseResponse(response, [''], 'POST', callback);
    expect(callback).was.calledWith({ statusCode: 429, body: '', headers: {'retry-after': 500}}, null);
  });

  it ('should use the server returned retry-after header with a 429 response', function() {
    var callback = sinon.spy();
    const headers = {'retry-after': 400};
    const response = {statusCode: 429, headers: headers};
    client.__parseResponse(response, [''], 'GET', callback);
    expect(callback).was.calledWith({ statusCode: 429, body: '', headers: {'retry-after': 400}}, null);
  });

});
