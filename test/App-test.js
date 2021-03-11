import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import App from "../lib/App";

import HttpClient from "../lib/HttpClient";
import Credentials from "../lib/Credentials";

import VonageStub from "./VonageStub";
import ResourceTestHelper from "./ResourceTestHelper";

chai.use(sinonChai);

var creds = Credentials.parse({
  apiKey: "someKey",
  apiSecret: "someSecret",
});
var emptyCallback = () => {};

var appAPIMapping = {
  getApplications: "get|{}",
  createApplication: "create",
  getApplication: "get|someAppId",
  updateApplication: "update",
  deleteApplication: "delete",
};

describe("applications", function () {
  it("should implement all v1 APIs", function () {
    console.log(App);
    VonageStub.checkAllFunctionsAreDefined(appAPIMapping, App);
  });
});

describe("applications.create", function () {
  var httpClientStub = null;
  var applications = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
    };
    applications = new App(creds, options);
  });
  it("should call the V2 API with V1 parameters", function () {
    applications.create(
      "testy",
      "voice",
      "example.com",
      "example.com",
      {},
      emptyCallback
    );

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {
        name: "testy",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      },
      {
        method: "POST",
        path: App.PATH,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      applications._convertApplicationResponse
    );
  });

  it("should call the V2 API with V2 parameters", function () {
    applications.create(
      {
        name: "testy",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      },
      emptyCallback
    );

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {
        name: "testy",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      },
      {
        method: "POST",
        path: App.PATH,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });

  it("should support host override", function () {
    let httpClientStub = sinon.createStubInstance(HttpClient);
    let options = {
      httpClient: httpClientStub,
      apiHost: "api.example.com",
    };
    applications = new App(creds, options);
    applications.create({}, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "POST",
        host: "api.example.com",
        path: App.PATH,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });
});

describe("applications.update", function () {
  var httpClientStub = null;
  var applications = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
    };
    applications = new App(creds, options);
  });
  it("should call the V2 API with V1 parameters", function () {
    applications.update(
      "app_id",
      "testy",
      "voice",
      "example.com",
      "example.com",
      {},
      emptyCallback
    );

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {
        name: "testy",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      },
      {
        method: "PUT",
        path: `${App.PATH}/app_id`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      applications._convertApplicationResponse
    );
  });

  it("should call the V2 API with V2 parameters", function () {
    applications.update(
      "app_id",
      {
        name: "testy",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      },
      emptyCallback
    );

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {
        name: "testy",
        capabilities: {
          voice: {
            webhooks: {
              answer_url: {
                address: "example.com",
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      },
      {
        method: "PUT",
        path: `${App.PATH}/app_id`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });

  it("should support host override", function () {
    let httpClientStub = sinon.createStubInstance(HttpClient);
    let options = {
      httpClient: httpClientStub,
      apiHost: "api.example.com",
    };
    applications = new App(creds, options);
    applications.update("app_id", {}, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "PUT",
        host: "api.example.com",
        path: `${App.PATH}/app_id`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });
});

describe("applications.get", function () {
  var httpClientStub = null;
  var applications = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
    };
    applications = new App(creds, options);
  });
  it("should call the V2 API for ID with response parser", function () {
    applications.get("app_id", emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "GET",
        path: `${App.PATH}/app_id`,
        body: undefined,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      applications._convertApplicationResponse
    );
  });

  it("should call the V2 API for filter with response parser", function () {
    applications.get({ some: "param" }, emptyCallback, true);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "GET",
        path: `${App.PATH}?some=param`,
        body: undefined,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });

  it("should call the V2 API with V2 flag", function () {
    applications.get("app_id", emptyCallback, true);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "GET",
        path: `${App.PATH}/app_id`,
        body: undefined,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });

  it("should support host override", function () {
    let httpClientStub = sinon.createStubInstance(HttpClient);
    let options = {
      httpClient: httpClientStub,
      apiHost: "api.example.com",
    };
    let applications = new App(creds, options);
    applications.get("app_id", emptyCallback, true);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "GET",
        host: "api.example.com",
        path: `${App.PATH}/app_id`,
        body: undefined,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback,
      emptyCallback,
      false,
      null
    );
  });
});

describe("applications.delete", function () {
  var httpClientStub = null;
  var applications = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub,
    };
    applications = new App(creds, options);
  });
  it("should call the V2 API", function () {
    applications.delete("app_id", emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "DELETE",
        path: `${App.PATH}/app_id`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });

  it("should allow host override", function () {
    let httpClientStub = sinon.createStubInstance(HttpClient);
    let options = {
      httpClient: httpClientStub,
      apiHost: "api.example.com",
    };
    let applications = new App(creds, options);
    applications.delete("app_id", emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(
      {},
      {
        method: "DELETE",
        host: "api.example.com",
        path: `${App.PATH}/app_id`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic ",
        },
      }
    );
    expect(httpClientStub.request).to.have.been.calledWith(
      sinon.match(expectedRequestArgs),
      emptyCallback
    );
  });
});

describe("applications._convertMethodSignature", function () {
  it("should convert method signature from V1 to V2", function () {
    var applications = new App();
    expect(
      JSON.stringify(
        applications._convertMethodSignature(
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
                http_method: "GET",
              },
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      })
    );
  });

  it("should convert messages method signature from V1 to V2", function () {
    var applications = new App();
    expect(
      JSON.stringify(
        applications._convertMethodSignature("app", "messages", "", "", {
          inbound_url: "example.com",
          status_url: "example.com",
        })
      )
    ).to.equal(
      JSON.stringify({
        name: "app",
        capabilities: {
          messages: {
            webhooks: {
              inbound_url: {
                address: "example.com",
                http_method: "POST",
              },
              status_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      })
    );
  });

  it("should convert voice method signature from V1 to V2", function () {
    var applications = new App();
    expect(
      JSON.stringify(
        applications._convertMethodSignature(
          "app",
          "rtc",
          "example.com",
          "example.com"
        )
      )
    ).to.equal(
      JSON.stringify({
        name: "app",
        capabilities: {
          rtc: {
            webhooks: {
              event_url: {
                address: "example.com",
                http_method: "POST",
              },
            },
          },
        },
      })
    );
  });

  it("should convert application response from V1 to V2", function () {
    var applications = new App();
    expect(
      JSON.stringify(
        applications._convertApplicationResponse({
          name: "app",
          capabilities: {
            voice: {
              webhooks: {
                answer_url: {
                  address: "https://example.com",
                  http_method: "GET",
                },
                event_url: {
                  address: "https://example.com",
                  http_method: "POST",
                },
              },
            },
          },
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
              http_method: "GET",
            },
            {
              endpoint_type: "event_url",
              endpoint: "https://example.com",
              http_method: "POST",
            },
          ],
        },
      })
    );
  });

  it("should convert application list response from V1 to V2", function () {
    var applications = new App();
    expect(
      JSON.stringify(
        applications._convertApplicationListResponse(
          applications._convertApplicationResponse
        )({
          _embedded: {
            applications: [
              {
                name: "app",
                capabilities: {
                  voice: {
                    webhooks: {
                      answer_url: {
                        address: "https://example.com",
                        http_method: "GET",
                      },
                      event_url: {
                        address: "https://example.com",
                        http_method: "POST",
                      },
                    },
                  },
                },
              },
            ],
          },
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
                    http_method: "GET",
                  },
                  {
                    endpoint_type: "event_url",
                    endpoint: "https://example.com",
                    http_method: "POST",
                  },
                ],
              },
            },
          ],
        },
      })
    );
  });
});
