import SMS from '../lib/SMS';

import NexmoStub from './NexmoStub';

var smsAPIs = {
  'sendBinaryMessage': 'sendBinaryMessage',
  'sendWapPushMessage': 'sendWapPushMessage',
  'sendTextMessage': 'sendTextMessage',
  'shortcodeAlert': 'shortcodeAlert',
  'shortcode2FA': 'shortcode2FA',
  'shortcodeMarketing': 'shortcodeMarketing'
};

describe('SMS Object', function () {
  
  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(smsAPIs, SMS);
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(smsAPIs, SMS);
  });
  
});
