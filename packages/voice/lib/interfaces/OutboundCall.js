import debug from 'debug';
/**
 * Represents an outbound call configuration.
 *
 * @typedef {Object} OutboundCall
 * @property {Array.<CallEndpoint>} to - The call's destination(s).
 * @property {PhoneEndpointObject} [from] - The caller's phone number or endpoint.
 * @property {boolean} [randomFromNumber] - Indicates whether to use a random caller's phone number.
 * @property {Array.<string>} [eventUrl] - URLs to receive call events.
 * @property {string} [eventMethod] - The HTTP method used to send events to the event URLs.
 * @property {boolean} [machineDetection] - Whether machine detection should be enabled for the call. @deprecated Machine detection behavior should be set separately using `machineDetection` property.
 * @property {number} [lengthTimer] - The length of time to wait for a call answer, in seconds.
 * @property {number} [ringingTimer] - The length of time to ring before assuming a no-answer, in seconds.
 */

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the OutboundCall type'
);

/**
 * Represents an outbound call configuration.
 * @deprecated This interface is deprecated. Please update to use the OutboundCall type.
 */
