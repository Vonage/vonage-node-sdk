import App from '../lib/App';

import NexmoStub from './NexmoStub';

var appAPIMapping = {
  'getApplications':    'get',
  'createApplication':  'create',
  'getApplication':     'get|someAppId',
  'updateApplication':  'update',
  'deleteApplication':  'delete'
};

describe('App Object', function () {
  
  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(appAPIMapping, App);
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(appAPIMapping, App);
  });
  
});
