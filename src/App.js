"use strict";

import Utils from "./Utils";

class App {
  /**
   * Provides access to the `applications` version 2 endpoint.
   */
  static get PATH() {
    return "/v2/applications";
  }
  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Addition App options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;
  }

  _convertMethodSignature(name, type, answerUrl, eventUrl, options) {
    let capability = {};
    switch (type) {
      case "voice":
        capability = {
          voice: {
            webhooks: {
              answer_url: {
                address: answerUrl,
                http_method: "GET",
              },
              event_url: {
                address: eventUrl,
                http_method: "POST",
              },
            },
          },
        };
        break;
      case "messages":
        capability = {
          messages: {
            webhooks: {
              inbound_url: {
                address: options.inbound_url,
                http_method: "POST",
              },
              status_url: {
                address: options.status_url,
                http_method: "POST",
              },
            },
          },
        };
        break;
      case "rtc":
        capability = {
          rtc: {
            webhooks: {
              event_url: {
                address: eventUrl,
                http_method: "POST",
              },
            },
          },
        };
        break;
    }

    return {
      name: name,
      capabilities: capability,
    };
  }

  _convertApplicationResponse(application) {
    for (let capability in application.capabilities) {
      application[capability] = {
        webhooks: [],
      };
      for (let webhook in application.capabilities[capability].webhooks) {
        application[capability].webhooks.push({
          endpoint_type: webhook,
          endpoint:
            application.capabilities[capability].webhooks[webhook].address,
          http_method:
            application.capabilities[capability].webhooks[webhook].http_method,
        });
      }
    }

    delete application.capabilities;
    return application;
  }

  _convertApplicationListResponse(applicationResponseHandler) {
    return (response) => {
      response.count = response.total_items;
      response.page_index = response.page;
      for (let i in response._embedded.applications) {
        response._embedded.applications[i] = applicationResponseHandler(
          response._embedded.applications[i]
        );
      }

      return response;
    };
  }

  /**
   * TODO: document
   */
  create(name, type, answerUrl, eventUrl, options, callback) {
    let params = {};
    let responseParser = null;

    if (arguments.length > 2) {
      params = JSON.stringify(
        this._convertMethodSignature(name, type, answerUrl, eventUrl, options)
      );
      responseParser = this._convertApplicationResponse;
    } else {
      params = JSON.stringify(name);
      callback = type;
    }

    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    var config = {
      host: this.options.apiHost || "api.nexmo.com",
      path: App.PATH,
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`,
      },
    };

    this.options.httpClient.request(
      config,
      callback,
      callback,
      false,
      responseParser
    );
  }

  /**
   * TODO: document
   */
  get(params, callback, v2 = false) {
    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;
    let responseParser = null;

    if (typeof params !== "object") {
      responseParser = this._convertApplicationResponse;
    } else {
      responseParser = this._convertApplicationListResponse(
        this._convertApplicationResponse
      );
    }

    if (v2) {
      responseParser = null;
    }

    var config = {
      host: this.options.apiHost || "api.nexmo.com",
      path: Utils.createPathWithQuery(App.PATH, params),
      method: "GET",
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`,
      },
    };

    this.options.httpClient.request(
      config,
      callback,
      callback,
      false,
      responseParser
    );
  }

  /**
   * TODO: document
   */
  update(appId, name, type, answerUrl, eventUrl, options, callback) {
    let params = {};
    let responseParser = null;
    if (arguments.length > 3) {
      params = JSON.stringify(
        this._convertMethodSignature(name, type, answerUrl, eventUrl, options)
      );
      responseParser = this._convertApplicationResponse;
    } else {
      params = JSON.stringify(name);
      callback = type;
    }

    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    var config = {
      host: this.options.apiHost || "api.nexmo.com",
      path: `${App.PATH}/${appId}`,
      method: "PUT",
      body: params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`,
      },
    };

    this.options.httpClient.request(
      config,
      callback,
      callback,
      false,
      responseParser
    );
  }

  /**
   * TODO: document
   */
  delete(appId, callback) {
    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    var config = {
      host: this.options.apiHost || "api.nexmo.com",
      path: `${App.PATH}/${appId}`,
      method: "DELETE",
      body: "{}",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`,
      },
    };

    this.options.httpClient.request(config, callback);
  }
}

export default App;
