"use strict";

var ERROR_MESSAGES = {
  applicationName: "Invalid argument: name",
  applicationType: "Invalid argument: type",
  applicationAnswerUrl: "Invalid argument: answerUrl",
  applicationEventUrl: "Invalid argument: eventUrl",
  applicationId: "Invalid argument: appId",
  optionsNotAnObject:
    "Options parameter should be a dictionary. Check the docs for valid properties for options"
};

class App {
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

  static get PATH() {
    return "/v1/applications";
  }
  /**
   * TODO: document
   */
  create(name, type, answerUrl, eventUrl, options, callback) {
    if (!name || name.length < 1) {
      return callback(new Error(ERROR_MESSAGES.applicationName));
    }
    if (!type) {
      return callback(new Error(ERROR_MESSAGES.applicationType));
    }
    if (!answerUrl) {
      return callback(new Error(ERROR_MESSAGES.applicationAnswerUrl));
    }
    if (!eventUrl) {
      return callback(new Error(ERROR_MESSAGES.applicationEventUrl));
    }

    if (typeof options === "function") {
      callback = options;
      options = {};
    }

    return this.options.api.postUseQueryString(
      App.PATH,
      { ...options, name, type, answer_url: answerUrl, event_url: eventUrl },
      callback
    );
  }

  /**
   * TODO: document
   */
  get(appId, callback) {
    if (!appId || appId.length < 36) {
      return callback(new Error(ERROR_MESSAGES.applicationId));
    }

    return this.options.api.get(App.PATH + "/" + appId, {}, callback);
  }

  /**
   * TODO: document
   */
  search(options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }

    if (typeof options !== "object") {
      return callback(new Error(ERROR_MESSAGES.optionsNotAnObject));
    }

    return this.options.api.get(App.PATH, options, callback);
  }
  /**
   * TODO: document
   */
  update(name, type, answerUrl, eventUrl, options, callback) {
    if (!name || name.length < 1) {
      return callback(new Error(ERROR_MESSAGES.applicationName));
    }
    if (!type) {
      return callback(new Error(ERROR_MESSAGES.applicationType));
    }
    if (!answerUrl) {
      return callback(new Error(ERROR_MESSAGES.applicationAnswerUrl));
    }
    if (!eventUrl) {
      return callback(new Error(ERROR_MESSAGES.applicationEventUrl));
    }

    if (typeof options === "function") {
      callback = options;
      options = {};
    }

    return this.options.api.putUseQueryString(
      App.PATH,
      { ...options, name, type, answer_url: answerUrl, event_url: eventUrl },
      callback
    );
  }

  /**
   * TODO: document
   */
  delete(appId, callback) {
    if (!appId || appId.length < 36) {
      return callback(new Error(ERROR_MESSAGES.applicationId));
    }

    return this.options.api.delete(App.PATH + "/" + appId, callback);
  }
}

export default App;
