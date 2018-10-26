import chai, { expect } from "chai";

import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import DtmfResource from "../lib/DtmfResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);

const creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
const emptyCallback = () => {};

describe("DtmfResource", () => {
  let httpClientStub = null;
  let dtmf = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    const options = {
      httpClient: httpClientStub
    };
    dtmf = new DtmfResource(creds, options);
  });

  it("should be able to send DTMF to a call", () => {
    const callId = "2342342-lkjhlkjh-32423";
    const params = {
      digits: [1, 2, 3, 4]
    };
    dtmf.send(callId, params, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: DtmfResource.PATH.replace("{call_uuid}", callId),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 20
      }
    });
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });
});
