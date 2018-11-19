import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import CallsResource from "../lib/CallsResource";
import StreamResource from "../lib/StreamResource";
import TalkResource from "../lib/TalkResource";
import DtmfResource from "../lib/DtmfResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);

var creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
var emptyCallback = () => {};

describe("CallsResource", () => {
  var httpClientStub = null;
  var calls = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    calls = new CallsResource(creds, options);
  });

  it("should allow a call to be created", () => {
    var params = {
      to: {
        type: "websocket",
        uri: "wss://example.com/socket",
        "content-type": "audio/l16;rate=16000",
        headers: {
          "utf-8": "✅"
        }
      }
    };
    calls.create(params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 124
      }
    });
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should throw an error if no query is provided", () => {
    var expectThrow = function() {
      calls.get();
    };

    expect(expectThrow).to.throw(Error);
  });

  it("should get a collection of calls", () => {
    calls.get({}, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${CallsResource.PATH}`
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should get a single of call using a call ID", () => {
    const callId = "2342342-lkjhlkjh-32423";
    calls.get(callId, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${CallsResource.PATH}/${callId}`
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should get a allow calls to be queried by filter", () => {
    calls.get(
      {
        status: "answered"
      },
      emptyCallback
    );

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${CallsResource.PATH}?status=answered`
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should allow a call to be updated", () => {
    const callId = "2342342-lkjhlkjh-32423";
    var params = {
      action: "hangup",
      destination: {
        type: "ncco",
        url: ["http://exémple.com/ncco.json"]
      }
    };
    calls.update(callId, params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      method: "PUT",
      path: `${CallsResource.PATH}/${callId}`,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": 89
      }
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should expose a stream property", () => {
    expect(calls.stream).to.be.an.instanceOf(StreamResource);
  });

  it("should expose a talk property", () => {
    expect(calls.talk).to.be.an.instanceOf(TalkResource);
  });

  it("should expose a dtmf property", () => {
    expect(calls.dtmf).to.be.an.instanceOf(DtmfResource);
  });
});
