import sinon from "sinon";

import nexmo from "../lib/index";
import App from "../lib/App";

import NexmoStub from "./NexmoStub";

var appAPIMapping = {
  getApplications: "get|{}",
  createApplication: "create",
  getApplication: "get|someAppId",
  updateApplication: "update",
  deleteApplication: "delete"
};

describe("App Object", function() {
  it("should implement all v1 APIs", function() {
    NexmoStub.checkAllFunctionsAreDefined(appAPIMapping, App);
  });
});
