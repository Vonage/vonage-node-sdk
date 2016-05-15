import SMS from '../lib/SMS';
import expect from 'expect.js'

import NexmoStub from './NexmoStub';

var smsAPIs = [
  'sendBinaryMessage',
  'sendWapPushMessage',
  'sendTextMessage',
  'sendMessage',
  'shortcodeAlert',
  'shortcode2FA',
  'shortcodeMarketing'
];

describe('SMS Object', function () {
  
  it('should implement all v1 APIs', function() {
    smsAPIs.forEach(function(functionName) {
      expect(SMS.prototype[functionName]).to.be.a('function');
    });
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    smsAPIs.forEach(function(functionName) {
      var stub = NexmoStub.create(smsAPIs);
      var sms = new SMS({key:'test', secret:'test'}, {nexmoOverride: stub});
      
      sms[functionName]();
      
      expect( stub.hasBeenCalled(functionName) ).to.be(true);
    });
  });
  
});
