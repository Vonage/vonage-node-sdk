import Voice from '../lib/Voice';

import NexmoStub from './NexmoStub';

var voiceAPIs = {
  'sendTTSMessage': 'sendTTSMessage',
  'sendTTSPromptWithCapture': 'sendTTSPromptWithCapture',
  'sendTTSPromptWithConfirm': 'sendTTSPromptWithConfirm',
  'call': 'call'
};

describe('Voice Object', function() {

  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(voiceAPIs, Voice);
  });

  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(voiceAPIs, Voice);
  });

});
