import chai, { expect } from 'chai';
import sinon            from 'sinon';
import sinonChai        from 'sinon-chai';

chai.use(sinonChai);

import querystring from 'querystring';

import CallsResource from '../lib/CallsResource';
import HttpClient from '../lib/HttpClient';
import Credentials from '../lib/Credentials';

var creds = Credentials.parse({
  applicationId: 'some-id',
  privateKey: __dirname + '/private-test.key'
});
var emptyCallback = () => {};

function getRequestArgs(params, overrides = {}) {
  var callsArgs = {
    host: overrides.host       || 'api.nexmo.com',
    path: overrides.path       || '/beta/calls',
    method: overrides.method   || 'POST',
    body: overrides.hasOwnProperty('body')? overrides.body : JSON.stringify(params),
    headers: overrides.headers || {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
    }
  };
  
  // Removed undefined properties
  Object.keys(callsArgs).forEach(function(key) {
    if(callsArgs[key] === undefined) {
      delete callsArgs[key];
    }
  })
  
  return callsArgs;
}

function requestArgsMatch(params, requestOverrides) {
  return function(actual) {
    var expected = getRequestArgs(params, requestOverrides);
    
    var match = (
      expected.host === actual.host &&
      expected.path === actual.path &&
      expected.method === actual.method &&
      expected.body === actual.body &&
      expected.headers['Content-Type'] === actual.headers['Content-Type'] &&
      actual.headers['Authorization'].indexOf(expected.headers['Authorization']) == 0
    );
    return match;
  }
}

describe('CallsResource', () => {
  
  var httpClientStub = null;
  var calls = null;
  
  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    calls = new CallsResource(creds, options);
  })
  
  it('should allow a call to be created', () => {
    var params = {};
    calls.create(params, emptyCallback);
    
    var expectedRequestArgs = requestArgsMatch(params);
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });
  
  it('should get a collection of calls', () => {
    calls.get(emptyCallback);
    
    var expectedRequestArgs = requestArgsMatch(null, {
      method: 'GET',
      body: undefined,
      path: `${CallsResource.PATH}`
    });
    
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });
  
  it('should get a single of call using a call ID', () => {
    const callId = '2342342-lkjhlkjh-32423';
    calls.get(callId, emptyCallback);
    
    var expectedRequestArgs = requestArgsMatch(null, {
      method: 'GET',
      body: undefined,
      path: `${CallsResource.PATH}/${callId}`
    });
    
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });
  

  it('should allow a call to be updated', () => {
    const callId = '2342342-lkjhlkjh-32423';
    var params = {action: 'hangup'};
    calls.update(callId, params, emptyCallback);
    
    var expectedRequestArgs = requestArgsMatch(params, {
      method: 'PUT',
      path: `${CallsResource.PATH}/${callId}`
    });
    
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });
  
});
