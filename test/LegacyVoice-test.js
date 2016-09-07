import LegacyVoice from '../lib/LegacyVoice';

import NexmoStub from './NexmoStub';

var voiceAPIs = {
  'sendTTSMessage': 'sendTTSMessage',
  'sendTTSPromptWithCapture': 'sendTTSPromptWithCapture',
  'sendTTSPromptWithConfirm': 'sendTTSPromptWithConfirm',
  'call': 'call'  
};

describe('LegacyVoice Object', function () {
  
  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(voiceAPIs, LegacyVoice);
  });

  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(voiceAPIs, LegacyVoice);
  });
  
});
