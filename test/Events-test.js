import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

import ResourceTestHelper from "./ResourceTestHelper";

import Events from "../lib/Events";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

var creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: __dirname + "/private-test.key"
});
var emptyCallback = () => {};

describe("Events", () => {
  var httpClientStub = null;
  var events = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    events = new Events(creds, options);
  });

  it("should allow the creation of an event in a conversation", () => {
    const conversationId = "CON-eeefffggg-444555666";
    var params = {};
    events.create(conversationId, params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: `${Events.PATH.replace("{conversation_uuid}", conversationId)}`
    });
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should get a collection of Events", () => {
    const conversationId = "CON-eeefffggg-444555666";
    events.get(conversationId, {}, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${Events.PATH.replace("{conversation_uuid}", conversationId)}`
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should get a single event", () => {
    const conversationId = "CON-eeefffggg-444555666";
    const eventId = "1";
    events.get(conversationId, eventId, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${Events.PATH.replace(
        "{conversation_uuid}",
        conversationId
      )}/${eventId}`
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should delete a event", () => {
    const eventId = "1";
    const conversationId = "CON-eeefffggg-444555666";
    events.delete(conversationId, eventId, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "DELETE",
      body: undefined,
      path: `${Events.PATH.replace(
        "{conversation_uuid}",
        conversationId
      )}/${eventId}`
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });
});
