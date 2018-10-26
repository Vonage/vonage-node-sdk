import Voice from "../lib/Voice";

import NexmoStub from "./NexmoStub";

const voiceAPIs = {
  sendTTSMessage: "sendTTSMessage",
  sendTTSPromptWithCapture: "sendTTSPromptWithCapture",
  sendTTSPromptWithConfirm: "sendTTSPromptWithConfirm",
  call: "call"
};

describe("Voice Object", () => {
  it("should implement all v1 APIs", () =>
    NexmoStub.checkAllFunctionsAreDefined(voiceAPIs, Voice));
  it("should proxy the function call to the underlying `nexmo` object", () =>
    NexmoStub.checkAllFunctionsAreCalled(voiceAPIs, Voice));
});
