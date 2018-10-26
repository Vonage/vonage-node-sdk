import NumberInsight from "../lib/NumberInsight";

import NexmoStub from "./NexmoStub";

const numberInsightAPIs = {
  numberInsightAdvancedAsync: 'get|{"level":"advancedAsync"}',
  numberInsightAdvanced: 'get|{"level":"advancedSync"}',
  numberInsightStandard: 'get|{"level":"standard"}',
  numberInsightBasic: 'get|{"level":"basic"}'
};

describe("NumberInsight Object", function() {
  it("should implement all v1 APIs", () =>
    NexmoStub.checkAllFunctionsAreDefined(numberInsightAPIs, NumberInsight));
  it("should proxy the function call to the underlying `nexmo` object", () =>
    NexmoStub.checkAllFunctionsAreCalled(numberInsightAPIs, NumberInsight));
});
