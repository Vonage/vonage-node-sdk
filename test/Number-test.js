import Number from "../lib/Number";

import NexmoStub from "./NexmoStub";

const numberAPIs = {
  getPricing: "getPricing",
  getPhonePricing: "getPhonePricing",
  getNumbers: "get",
  searchNumbers: "search",
  buyNumber: "buy",
  cancelNumber: "cancel",
  updateNumber: "update"
};

describe("Number Object", () => {
  it("should implement all v1 APIs", () =>
    NexmoStub.checkAllFunctionsAreDefined(numberAPIs, Number));
  it("should proxy the function call to the underlying `nexmo` object", () =>
    NexmoStub.checkAllFunctionsAreCalled(numberAPIs, Number));
});
