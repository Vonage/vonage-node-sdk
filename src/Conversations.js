"use strict";

import nexmo from "./index";

import Members from "./Members";

/**
 * Provides access to the `conversations` endpoint.
 */
class Conversations {
  static get PATH() {
    return "/beta/conversations";
  }

  /**
   * @param {Credentials} credentials
   *    credentials to be used when interacting with the API.
   * @param {Object} options
   *    Additional Conversations options.
   */
  constructor(credentials, options = {}) {
    this.creds = credentials;
    this.options = options;

    /**
     * @type Members
     */
    this.members = new Members(this.creds, this.options);

    // Used to facilitate testing of the call to the underlying object
    this._nexmo = this.options.nexmoOverride || nexmo;
  }

  /**
   * Create a new conversation.
   *
   * @param {Object} params - Parameters used when creating the conversation. See https://ea.developer.nexmo.com/api/conversation#create-a-conversation for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  create(params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: Conversations.PATH,
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
   * Get an existing conversation.
   *
   * @param {string|object} query - The unique identifier for the conversation to retrieve
   *               or a set of filter parameters for the query. For more information
   *               see https://ea.developer.nexmo.com/api/conversation#retrieve-a-conversation
   * @param {function} callback - function to be called when the request completes.
   */
  get(query, callback) {
    this._nexmo.getWithQuery(
      Conversations.PATH,
      query,
      this.creds,
      this.options,
      callback
    );
  }

  /**
   * Update an existing conversation.
   *
   * @param {string} [conversationId] - The unique identifier for the conversation to update.
   * @param {Object} params - Parameters used when updating the conversation.
   * @param {function} callback - function to be called when the request completes.
   */
  update(conversationId, params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: `${Conversations.PATH}/${conversationId}`,
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
   * Deleta an existing conversation.
   *
   * @param {string} [conversationId] - The unique identifier for the conversation to delete.
   * @param {function} callback - function to be called when the request completes.
   */
  delete(conversationId, callback) {
    var config = {
      host: "api.nexmo.com",
      path: `${Conversations.PATH}/${conversationId}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };

    this.options.httpClient.request(config, callback);
  }
}

export default Conversations;
