import Verify from "../lib/Verify";

import NexmoStub from "./NexmoStub";

const verifyAPIs = {
  verifyNumber: "request",
  checkVerifyRequest: "check",
  controlVerifyRequest: "control",
  searchVerifyRequest: "search"
};

describe("Verify Object", () => {
  it("should implement all v1 APIs", () =>
    NexmoStub.checkAllFunctionsAreDefined(verifyAPIs, Verify));
  it("should proxy the function call to the underlying `nexmo` object", () =>
    NexmoStub.checkAllFunctionsAreCalled(verifyAPIs, Verify));
});
