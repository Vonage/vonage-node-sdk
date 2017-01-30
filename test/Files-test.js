import File from '../lib/File';

import NexmoStub from './NexmoStub';

var fileAPIs = {
    'getFile': 'get'
};

describe('File Object', function() {

    it('should implement all v1 APIs', function() {
        NexmoStub.checkAllFunctionsAreDefined(fileAPIs, File);
    });

    it('should proxy the function call to the underlying `nexmo` object', function() {
        NexmoStub.checkAllFunctionsAreCalled(fileAPIs, File);
    });
});
