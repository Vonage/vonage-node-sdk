import Voice from '../lib/Voice';
import expect from 'expect.js'

import NexmoStub from './NexmoStub';

var voiceAPIs = [
  'sendTTSMessage',
  'sendTTSPromptWithCapture',
  'sendTTSPromptWithConfirm',
  'call'  
];

describe('Voice Object', function () {
  
  it('should implement all v1 APIs', function() {
    voiceAPIs.forEach(function(functionName) {
      expect(Voice.prototype[functionName]).to.be.a('function');
    });
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    voiceAPIs.forEach(function(functionName) {
      var stub = NexmoStub.create(voiceAPIs);
      var voice = new Voice({key:'test', secret:'test'}, {nexmoOverride: stub});
      
      voice[functionName]();
      
      expect( stub.hasBeenCalled(functionName) ).to.be(true);
    });
  });
  
});
