import sinon from 'sinon';
import expect from 'expect.js';

import https from 'https';
import http from 'http';

import HttpClient from '../lib/HttpClient';

var fakeHttp = {request: function() {}};
var fakeRequest = {
  end: function(){},
  on: function(){}
};

var defaultHeaders = {
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json"
};

describe('HttpClient Object', function () {
  
  afterEach(function() {
    fakeHttp.request.restore();
  });
  
  it('should support requests over https', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: "api.nexmo.com",
        method: "GET",
        path: "/api",
        port: 443
      })
      .returns(fakeRequest);
    
    var client = new HttpClient({https:fakeHttp, port:443});
    
    client.request({host:'api.nexmo.com', path: '/api'}, 'GET', {some: 'data'});
  });
  
  it('should support requests over http', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: "api.nexmo.com",
        method: "GET",
        path: "/api",
        port: 80
      })
      .returns(fakeRequest);
    
    var client = new HttpClient({http:fakeHttp, port:80});
    
    client.request({host:'api.nexmo.com', path: '/api'}, 'GET', {some: 'data'});
  });
  
  it('should be possible to set the host', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: "rest.nexmo.com",
        method: "GET",
        path: "/api",
        port: 80
      })
      .returns(fakeRequest);
    
    var client = new HttpClient({http:fakeHttp, port:80});
    
    client.request({host:'rest.nexmo.com', path: '/api'}, 'GET', {some: 'data'});
  });
  
  it('should be possible to set the path', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: "api.nexmo.com",
        method: "GET",
        path: "/some_path",
        port: 80
      })
      .returns(fakeRequest);
    
    var client = new HttpClient({http:fakeHttp, port:80});
    
    client.request({host:'api.nexmo.com', path: '/some_path'}, 'GET', {some: 'data'});
  });
  
  it('should be possible to set the method', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers: defaultHeaders,
        host: "api.nexmo.com",
        method: "POST",
        path: "/api",
        port: 443
      })
      .returns(fakeRequest);
    
    var client = new HttpClient({https:fakeHttp});
    
    client.request({host:'api.nexmo.com', path: '/api'}, 'POST', {some: 'data'});
  });
  
  it('should log requests', function() {
    var mock = sinon.mock(fakeHttp);
    mock.expects('request').returns(fakeRequest);
    
    var logged = false;
    var log = function() {
      logged = true;
    }
    var client = new HttpClient({https:fakeHttp, log:log});
    
    client.request({host:'api.nexmo.com', path: '/api'}, 'GET', {some: 'data'});
    
    expect(logged).to.be(true);
  });
  
  it('should allow User-Agent header to be set via options', function() {
    var expectedUserAgent = 'nexmo-node/1.0.0/v4.4.7';
    
    var mock = sinon.mock(fakeHttp);
    mock.expects('request')
      .once()
      .withArgs({
        headers:{
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json",
          "User-Agent": expectedUserAgent
        },
        host: "api.nexmo.com",
        method: "POST",
        path: "/api",
        port: 443
      })
      .returns(fakeRequest);
    
    var client = new HttpClient({https:fakeHttp, userAgent: expectedUserAgent});
    
    client.request({host:'api.nexmo.com', path: '/api'}, 'POST', {some: 'data'});
  });

});
