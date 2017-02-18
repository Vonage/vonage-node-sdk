import Verify from '../lib/Verify';

import NexmoStub from './NexmoStub';

var verifyAPIs = {
  'verifyNumber': 'request',
  'checkVerifyRequest': 'check',
  'controlVerifyRequest': 'control',
  'searchVerifyRequest': 'search'
};

describe('Verify Object', function() {

  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(verifyAPIs, Verify);
  });

  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(verifyAPIs, Verify);
  });

});
