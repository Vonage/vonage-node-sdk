import NumberInsight from '../lib/NumberInsight';

import NexmoStub from './NexmoStub';

var numberInsightAPIs = {
  'numberInsight': 'get|{"level":"advanced"}',
  'numberInsightBasic': 'get|{"level":"basic"}',
  'numberInsightStandard': 'get|{"level":"standard"}'
};

describe('NumberInsight Object', function () {
  
  it('should implement all v1 APIs', function() {
    NexmoStub.checkAllFunctionsAreDefined(numberInsightAPIs, NumberInsight);
  });
  
  it('should proxy the function call to the underlying `nexmo` object', function() {
    NexmoStub.checkAllFunctionsAreCalled(numberInsightAPIs, NumberInsight);
  });
  
});
