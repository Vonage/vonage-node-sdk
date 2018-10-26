import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import StreamResource from "../lib/StreamResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);

let creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
let emptyCallback = () => {};

describe("StreamResource", () => {
  let httpClientStub = null;
  let stream = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    let options = {
      httpClient: httpClientStub
    };
    stream = new StreamResource(creds, options);
  });

  it("should allow a stream to be started", () => {
    const callId = "2342342-lkjhlkjh-32423";
    let params = {
      stream_url: "https://example.com/▶tést.mp3" // eslint-disable-line camelcase
    }; // eslint-disable-line camelcase
    stream.start(callId, params, emptyCallback);

    let expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: StreamResource.PATH.replace("{call_uuid}", callId),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 49
      }
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should be possible to stop a stream", () => {
    const callId = "2342342-lkjhlkjh-32423";
    stream.stop(callId, emptyCallback);

    let expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "DELETE",
      body: undefined,
      path: StreamResource.PATH.replace("{call_uuid}", callId)
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });
});
