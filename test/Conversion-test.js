import Conversion from "../lib/Conversion";
import Credentials from "../lib/Credentials";
import HttpClient from "../lib/HttpClient";
import NullLogger from "../lib/ConsoleLogger";

import ResourceTestHelper from "./ResourceTestHelper";
import sinon from "sinon";
import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
chai.use(sinonChai);

describe("Conversion", function() {
  beforeEach(function() {
    var creds = Credentials.parse({
      apiKey: "myKey",
      apiSecret: "mySecret"
    });

    this.httpClientStub = new HttpClient(
      {
        logger: new NullLogger()
      },
      creds
    );

    sinon.stub(this.httpClientStub, "request");

    var options = {
      api: this.httpClientStub
    };

    this.conversion = new Conversion(creds, options);
  });

  describe("#submit", function() {
    it("should call the correct endpoint", function(done) {
      this.httpClientStub.request.yields(null, {});

      var expectedRequestArgs = ResourceTestHelper.requestArgsMatch({
        path:
          "/conversions/foo?message-id=1234&delivered=1&timestamp=1513254618"
      });

      this.conversion.submit(
        "foo",
        "1234",
        1,
        1513254618,
        function(err, data) {
          expect(this.httpClientStub.request).to.have.been.calledWith(
            sinon.match(expectedRequestArgs)
          );

          done();
        }.bind(this)
      );
    });

    it("returns a friendly error when not enabled", function(done) {
      const mockError = {
        status: 402
      };

      this.httpClientStub.request.yields(mockError, null);
      this.conversion.sms("1234", 1, 1234567890, function(err, data) {
        expect(err._INFO_).to.eql(
          "This endpoint may need activating on your account. Please email support@nexmo.com for more information"
        );
        expect(data).to.eql(null);
        done();
      });
    });
  });

  describe("#voice", function() {
    it("calls the correct endpoint for voice", function() {
      const submitStub = sinon.stub(this.conversion, "submit");
      this.conversion.voice("1234", 1, 1513254618);
      expect(submitStub).to.have.been.calledWith(
        "voice",
        "1234",
        1,
        1513254618
      );
      submitStub.restore();
    });
  });

  describe("#sms", function() {
    it("calls the correct endpoint for sms", function() {
      const submitStub = sinon.stub(this.conversion, "submit");
      this.conversion.sms("1234", 1, 1513254618);
      expect(submitStub).to.have.been.calledWith("sms", "1234", 1, 1513254618);
      submitStub.restore();
    });
  });
});
