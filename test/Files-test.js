import FilesResource from '../lib/FilesResource';

import NexmoStub from './NexmoStub';

var fileAPIs = {
    'getFile': 'get'
};

describe('FilesResource Object', function() {

    it('should implement all v1 APIs', function() {
        NexmoStub.checkAllFunctionsAreDefined(fileAPIs, FilesResource);
    });

    it('should proxy the function call to the underlying `nexmo` object', function() {
        NexmoStub.checkAllFunctionsAreCalled(fileAPIs, FilesResource);
    });
});
