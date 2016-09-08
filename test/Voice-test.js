import chai, { expect } from 'chai';
import sinon            from 'sinon';
import sinonChai        from 'sinon-chai';

chai.use(sinonChai);

import Credentials from '../lib/Credentials';
import Voice from '../lib/Voice';
import HttpClient from '../lib/HttpClient';

var creds = Credentials.parse({
  applicationId: 'some-id',
  privateKey: __dirname + '/private-test.key'
});

describe('Voice', () => {
  
  describe('.call', () => {
    
    var callParams = {
      to: [{
        type: 'phone',
        number: '555555'
      }],
      from: {
        type: 'phone',
        number: '555666'
      },
      answer_url: ['https://example.com']
    }
    var callback = () => {};
    var voice;
    var httpClientStub;
    
    beforeEach( () => {
      httpClientStub = sinon.createStubInstance(HttpClient);
      
      voice = new Voice(creds, {
        httpClient: httpClientStub
      });
    });
    
    var expectedArgs = {
      host:'api.nexmo.com',
      path:'/beta/calls',
      method: 'POST',
      body: JSON.stringify(callParams),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '
      }
    };
  
    it('should make the call to be to the correct host', () => {
      voice.call(callParams, callback);
      expect(httpClientStub.request)
        .to.have.been.calledWith(
          sinon.match.has('host', expectedArgs.host),
          callback
        );
    });
    
    it('should make the call to be to the correct path', () => {
      voice.call(callParams, callback);
      expect(httpClientStub.request)
        .to.have.been.calledWith(
          sinon.match.has('path', expectedArgs.path),
          callback
        );
    });
    
    it('should make the call to with the correct body', () => {
      voice.call(callParams, callback);
      expect(httpClientStub.request)
        .to.have.been.calledWith(
          sinon.match.has('body', expectedArgs.body),
          callback
        );
    });
    
    var expectedHeaders = function(val) {
      var match = val.headers['Content-Type'] === expectedArgs.headers['Content-Type'] &&
                  val.headers['Authorization'].indexOf(expectedArgs.headers['Authorization'] == 0);
      return match;
    };
    
    it('should make the call to with headers', () => {
      voice.call(callParams, callback);
      expect(httpClientStub.request)
        .to.have.been.calledWith(
          sinon.match(expectedHeaders, 'expectedHeaders'),
          callback
        );
    });
    
  });
  
});
      
