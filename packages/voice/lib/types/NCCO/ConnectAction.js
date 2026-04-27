/**
 * Represents a Nexmo Call Control Object (NCCO) action for connecting a call to one or more endpoints.
 * The `ConnectAction` defines the behavior of the call when connecting.
 *
 * @typedef {Object} ConnectAction
 * @property {NCCOActions.CONNECT} action - The type of action, which is "connect" for connecting a call.
 * @property {Array.<string>} [eventUrl] - An array of URLs to webhook endpoints that will receive events related to this action.
 * @property {ConnectEventType} [eventType] - The event type to be sent to the event URL(s). Possible values include: - "synchronous" (default): Events are sent synchronously.
 * @property {string} [from] - The caller's identity that will be displayed to the callee.
 * @property {Array} endpoint - An array of `CallEndpoint` objects representing the endpoints to connect the call to.
 * @property {boolean} [randomFromNumber] - When `true`, a random caller ID number will be generated and used as the `from` number. This can help with privacy and security by masking the original caller's number.
 * @property {number} [timeout] - The maximum time (in seconds) that the platform should wait for an answer from the endpoint. If no answer is received within this time, the call may be treated as unanswered.
 * @property {number} [limit] - The maximum number of times this action should be executed. If set, the action will only be executed up to the specified limit.
 * @property {MachineDetection} [machineDetection] - The behavior of machine detection when connecting the call. Possible values include: - "continue" (default): Continue connecting the call even if a machine is detected. - "hangup": Hang up the call if a machine is detected.
 * @property {string} [eventMethod] - The HTTP method to use when making requests to the `eventUrl`. Default is "POST".
 * @property {string} [ringbackTone] - The URL to a ringback tone to play to the caller while waiting for the call to connect. It's usually a URL to an audio file that serves as a ringtone.
 */

export {};
