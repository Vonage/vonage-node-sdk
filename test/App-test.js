import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

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

  it("should convert method signature from V1 to V2", function() {
    var app = new App();
    expect(
      JSON.stringify(
        app._convertMethodSignature(
          "app",
          "voice",
          "example.com",
          "example.com"
        )
      )
    ).to.equal(
      JSON.stringify({
        name: "app",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET"
              },
              event_url: {
                address: "example.com",
                http_method: "POST"
              }
            }
          }
        }
      })
    );
  });

  it("should convert application response from V1 to V2", function() {
    var app = new App();
    expect(
      JSON.stringify(
        app._convertApplicationResponse({
          name: "app",
          capabilities: {
            voice: {
              webhooks: {
                answer_url: {
                  address: "https://example.com",
                  http_method: "GET"
                },
                event_url: {
                  address: "https://example.com",
                  http_method: "POST"
                }
              }
            }
          }
        })
      )
    ).to.equal(
      JSON.stringify({
        name: "app",
        voice: {
          webhooks: [
            {
              endpoint_type: "answer_url",
              endpoint: "https://example.com",
              http_method: "GET"
            },
            {
              endpoint_type: "event_url",
              endpoint: "https://example.com",
              http_method: "POST"
            }
          ]
        }
      })
    );
  });

  it("should convert application list response from V1 to V2", function() {
    var app = new App();
    expect(
      JSON.stringify(
        app._convertApplicationListResponse(app._convertApplicationResponse)({
          _embedded: {
            applications: [
              {
                name: "app",
                capabilities: {
                  voice: {
                    webhooks: {
                      answer_url: {
                        address: "https://example.com",
                        http_method: "GET"
                      },
                      event_url: {
                        address: "https://example.com",
                        http_method: "POST"
                      }
                    }
                  }
                }
              }
            ]
          }
        })
      )
    ).to.equal(
      JSON.stringify({
        _embedded: {
          applications: [
            {
              name: "app",
              voice: {
                webhooks: [
                  {
                    endpoint_type: "answer_url",
                    endpoint: "https://example.com",
                    http_method: "GET"
                  },
                  {
                    endpoint_type: "event_url",
                    endpoint: "https://example.com",
                    http_method: "POST"
                  }
                ]
              }
            }
          ]
        }
      })
    );
  });
});
