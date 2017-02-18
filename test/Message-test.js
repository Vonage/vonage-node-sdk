import Message from '../lib/Message';

import NexmoStub from './NexmoStub';

var smsAPIs = {
  'sendBinaryMessage': 'sendBinaryMessage',
  'sendWapPushMessage': 'sendWapPushMessage',
  'sendTextMessage': 'sendSms',
  'shortcodeAlert': 'shortcodeAlert',
  'shortcode2FA': 'shortcode2FA',
  'shortcodeMarketing': 'shortcodeMarketing'
};

describe('Message Object', function() {

  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(smsAPIs, Message);
  });

  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(smsAPIs, Message);
  });

});
