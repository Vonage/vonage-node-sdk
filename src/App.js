"use strict";

import nexmo from "./index";

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

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;
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
                http_method: "GET"
              },
              event_url: {
                address: eventUrl,
                http_method: "POST"
              }
            }
          }
        };
        break;
      case "messages":
        capability = {
          messages: {
            webhooks: {
              inbound_url: {
                address: options.inbound_url,
                http_method: "POST"
              },
              status_url: {
                address: options.status_url,
                http_method: "POST"
              }
            }
          }
        };
        break;
      case "rtc":
        capability = {
          rtc: {
            webhooks: {
              event_url: {
                address: eventUrl,
                http_method: "POST"
              }
            }
          }
        };
        break;
    }

    return {
      name: name,
      capabilities: capability
    };
  }

  /**
   * TODO: document
   */
  create(name, type, answerUrl, eventUrl, options, callback) {
    let params = {};

    if (arguments.length > 2) {
      params = JSON.stringify(
        this._convertMethodSignature(name, type, answerUrl, eventUrl, options)
      );
    } else {
      params = JSON.stringify(name);
    }

    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    var config = {
      host: "api.nexmo.com",
      path: App.PATH,
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`
      }
    };

    this.options.httpClient.request(config, callback);
  }

  /**
   * TODO: document
   */
  get(params, callback) {
    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    if (typeof params !== "object") {
      var config = {
        host: "api.nexmo.com",
        path: `${App.PATH}/${params}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(authorization).toString(
            "base64"
          )}`
        }
      };
    } else {
      var config = {
        host: "api.nexmo.com",
        path: App.PATH,
        method: "GET",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(authorization).toString(
            "base64"
          )}`
        }
      };
    }

    this.options.httpClient.request(config, callback);
  }

  /**
   * TODO: document
   */
  update(appId, name, type, answerUrl, eventUrl, options, callback) {
    let params = {};
    if (arguments.length > 3) {
      params = JSON.stringify(
        this._convertMethodSignature(name, type, answerUrl, eventUrl, options)
      );
    } else {
      params = JSON.stringify(name);
    }

    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    var config = {
      host: "api.nexmo.com",
      path: `${App.PATH}/${appId}`,
      method: "PUT",
      body: params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`
      }
    };

    this.options.httpClient.request(config, callback);
  }

  /**
   * TODO: document
   */
  delete(appId, callback) {
    const authorization = `${this.creds.apiKey}:${this.creds.apiSecret}`;

    var config = {
      host: "api.nexmo.com",
      path: `${App.PATH}/${appId}`,
      method: "DELETE",
      body: "{}",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(authorization).toString("base64")}`
      }
    };

    this.options.httpClient.request(config, callback);
  }
}

export default App;
