import Account from '../lib/Account';

import NexmoStub from './NexmoStub';

var accountAPIs = {
  'checkBalance': 'checkBalance',
  'changePassword': 'updatePassword',
  'changeMoCallbackUrl': 'updateSMSCallback',
  'changeDrCallbackUrl': 'updateDeliveryReceiptCallback'
};

describe('Account Object', function() {

  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(accountAPIs, Account);
  });

  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(accountAPIs, Account);
  });

});
