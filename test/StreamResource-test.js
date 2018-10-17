import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import StreamResource from "../lib/StreamResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);

var creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
var emptyCallback = () => {};

describe("StreamResource", () => {
  var httpClientStub = null;
  var stream = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    stream = new StreamResource(creds, options);
  });

  it("should allow a stream to be started", () => {
    const callId = "2342342-lkjhlkjh-32423";
    var params = {
      stream_url: "https://example.com/▶tést.mp3" // eslint-disable-line camelcase
    }; // eslint-disable-line camelcase
    stream.start(callId, params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
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

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
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
