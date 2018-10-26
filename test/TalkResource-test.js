import chai, { expect } from "chai";

import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import TalkResource from "../lib/TalkResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);
let creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
let emptyCallback = () => {};

describe("TalkResource", () => {
  let httpClientStub = null;
  let talk = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    let options = {
      httpClient: httpClientStub
    };
    talk = new TalkResource(creds, options);
  });

  it("should be able to start a talk", () => {
    const callId = "2342342-lkjhlkjh-32423";
    let params = {
      text: "Hello!"
    };
    talk.start(callId, params, emptyCallback);

    let expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
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
    let params = {
      text: "Alô 😊!"
    };
    talk.start(callId, params, emptyCallback);

    let expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
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

    let expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
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
