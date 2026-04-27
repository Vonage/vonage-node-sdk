/**
 * Represents common fields for defining an outbound call, including the caller (from) and recipient (to) endpoints,
 * along with additional call parameters.
 *
 * @typedef {Object} CommonOutboundCall
 * @property {Array} to - An array of recipient endpoints for the call.
 * @property {MachineDetectionBehavior} [machineDetection] - Specifies the behavior for machine detection during the call.
 * @property {AdvancedMachineDetection} [advancedMachineDetection] - Advanced machine detection settings for the call.
 * @property {number} [lengthTimer] - The length of time to wait for call answer, in seconds.
 * @property {number} [ringingTimer] - The length of time to wait for the call to ring before considering it unanswered, in seconds.
 * @property {Array.<string>} [eventUrl] - An array of URLs to notify with call events.
 * @property {HttpMethod} [eventMethod] - The HTTP method to use when sending events to the specified event URLs.
 */

export {};
