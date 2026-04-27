/**
 * Represents a Notify action in a Nexmo Call Control Object (NCCO). A Notify action is used to send a notification
 * to the specified event URLs with the provided payload.
 *
 * @typedef {Object} NotifyAction
 * @property {NCCOActions.NOTIFY} action - The action type, which should be set to 'notify'.
 * @property {Record} payload - The payload to be sent as part of the notification. It is a key-value pair object where the keys and values are both strings.
 * @property {Array.<string>} eventUrl - An array of event URLs to which the notification will be sent.
 * @property {string} [eventMethod] - (Optional) The HTTP method used for sending the notification to the event URLs. If not specified, the default HTTP method is used.
 */

export {};
