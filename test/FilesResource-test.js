import chai, { expect } from "chai";
import path from "path";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import ResourceTestHelper from "./ResourceTestHelper";

import FilesResource from "../lib/FilesResource";
import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

chai.use(sinonChai);

var creds = Credentials.parse({
  applicationId: "some-id",
  privateKey: path.join(__dirname, "private-test.key")
});
var emptyCallback = () => {};

describe("FileResource", () => {
  var httpClientStub = null;
  var files = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    files = new FilesResource(creds, options);
  });

  it("should get a single file using a file ID", () => {
    const fileId = "2342342-lkjhlkjh-32423";
    files.get(fileId, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${FilesResource.PATH}/${fileId}`,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: "Bearer "
      }
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should get a single file using a file URL", () => {
    const fileId = "2342342-lkjhlkjh-32423";
    const fileUrl = `https://rest.nexmo.com/api/v1/files/${fileId}`;
    files.get(fileUrl, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: "GET",
      body: undefined,
      path: `${FilesResource.PATH}/${fileId}`,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: "Bearer "
      }
    });

    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });
});
