import nexmo from "./index";

import Utils from "./Utils";

/**
 * Provides access to the `events` resource.
 */
class Events {
  /**
   * The path to the `events` resource.
   */
  static get PATH() {
    return "/beta/conversations/{conversation_uuid}/events";
  }

  /**
   * Creates a new Events instance.
   *
   * @param {Credentials} creds - Credentials used when interacting with the Nexmo API.
   * @param {Object} options - additional options for the class.
   */
  constructor(creds, options) {
    this.creds = creds;
    this.options = options;

    this._nexmo = this.options.nexmoOverride || nexmo;
  }

  /**
   * Creates an event in a conversation.
   *
   * @param {string} conversationId - The unique identifier for the conversation
   * @param {Object} params - Parameters used when adding an event to the conversation. See https://developer.nexmo.com/api/conversation#createEvent for more information.
   * @param {function} callback - function to be called when the request completes.
   */
  create(conversationId, params, callback) {
    params = JSON.stringify(params);

    var config = {
      host: "api.nexmo.com",
      path: Events.PATH.replace("{conversation_uuid}", conversationId),
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
   * Get an existing event.
   *
   * @param {string} conversationId - The unique identifier for the conversation
   * @param {string|object} query - The unique identifier for the event to retrieve
   *               or a set of filter parameters for the query. For more information
   *               see https://developer.nexmo.com/api/conversation#getEvents
   * @param {function} callback - function to be called when the request completes.
   */

  get(conversationId, query, callback) {
    var config = {
      host: "api.nexmo.com",
      path: Utils.createPathWithQuery(
        Events.PATH.replace("{conversation_uuid}", conversationId),
        query
      ),
      method: "GET",
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };
    this.options.httpClient.request(config, callback);
  }

  /**
   * Deleta an existing event.
   *
   * @param {string} conversationId- The unique identifier for the conversation to delete the event from.
   * @param {string} eventId - The unique identifier for the event to delete.
   * @param {function} callback - function to be called when the request completes.
   */
  delete(conversationId, eventId, callback) {
    var config = {
      host: "api.nexmo.com",
      path: `${Events.PATH.replace(
        "{conversation_uuid}",
        conversationId
      )}/${eventId}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.creds.generateJwt()}`
      }
    };

    this.options.httpClient.request(config, callback);
  }
}

export default Events;
