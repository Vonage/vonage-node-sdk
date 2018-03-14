"use strict";

import nexmo from "./index";

/**
 * Provides access to the `users` endpoint.
 */
class Users {
  static get PATH() {
    return "/beta/users";
  }

  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Additional Users options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;
  }

  /**
   * Create a new user.
   *
   * @param {Object} params - Parameters used when creating the user. See https://ea.developer.nexmo.com/api/conversation#create-a-user for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  create(params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: Users.PATH,
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }

  /**
   * Get an existing user.
   *
   * @param {string|object} query - The unique identifier for the user to retrieve
   *               or a set of filter parameters for the query. For more information
   *               see https://ea.developer.nexmo.com/api/conversation#retrieve-all-users
   * @param {function} callback - function to be called when the request completes.
   */
  get(query, callback) {
    this._nexmo.getWithQuery(
      Users.PATH,
      query,
      this.creds,
      this.options,
      callback
    );
  }

  /**
   * Get an conversations for an existing user.
   *
   * @param {string} [userId] - The unique identifier for the user to retrieve conversations for
   * @param {function} callback - function to be called when the request completes.
   */
  getConversations(userId, callback) {
    this._nexmo.getWithQuery(
      `${Users.PATH}/${userId}/conversations`,
      {},
      this.creds,
      this.options,
      callback
    );
  }

  /**
   * Update an existing user.
   *
   * @param {string} [userId] - The unique identifier for the user to update.
   * @param {Object} params - Parameters used when updating the conversation.
   * @param {function} callback - function to be called when the request completes.
   */
  update(userId, params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: `${Users.PATH}/${userId}`,
      method: "PUT",
      body: params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };

    this.options.httpClient.request(config, callback);
  }

  /**
   * Deleta an existing user.
   *
   * @param {string} [userId] - The unique identifier for the user to delete.
   * @param {function} callback - function to be called when the request completes.
   */
  delete(userId, callback) {
    var config = {
      host: "api.nexmo.com",
      path: `${Users.PATH}/${userId}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };

    this.options.httpClient.request(config, callback);
  }
}

export default Users;
