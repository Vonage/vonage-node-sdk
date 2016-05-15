import App from '../lib/App';

import NexmoStub from './NexmoStub';

var appAPIs = [
  'getApplications',
  'createApplication',
  'getApplication',
  'updateApplication',
  'deleteApplication'
];

describe('App Object', function () {
  
  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(appAPIs, App);
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(appAPIs, App);
  });
  
});
