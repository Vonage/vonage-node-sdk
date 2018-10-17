import chai, { expect } from "chai";

import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import TalkResource from "../lib/TalkResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);
var creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
var emptyCallback = () => {};

describe("TalkResource", () => {
  var httpClientStub = null;
  var talk = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    talk = new TalkResource(creds, options);
  });

  it("should be able to start a talk", () => {
    const callId = "2342342-lkjhlkjh-32423";
    var params = {
      text: "Hello!"
    };
    talk.start(callId, params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: TalkResource.PATH.replace("{call_uuid}", callId),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 17
      }
    });
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should be able to start a talk with unicode characters", () => {
    const callId = "2342342-lkjhlkjh-32423";
    var params = {
      text: "Alô 😊!"
    };
    talk.start(callId, params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: TalkResource.PATH.replace("{call_uuid}", callId),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 21
      }
    });
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should be possible to stop an ongoing talk", () => {
    const callId = "2342342-lkjhlkjh-32423";
    talk.stop(callId, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "DELETE",
      body: undefined,
      path: TalkResource.PATH.replace("{call_uuid}", callId)
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });
});
