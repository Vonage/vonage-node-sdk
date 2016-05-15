import SMS from '../lib/SMS';

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
    NexmoStub.checkAllFunctionsAreDefined(smsAPIs, SMS);
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(smsAPIs, SMS);
  });
  
});
