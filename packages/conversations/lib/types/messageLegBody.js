/**
 * @typedef {Object} LegState
 * @property {LegStatus} status - Status of the message leg
 * @property {boolean} [succssful] - If the leg is successful
 * @property {ReasonCode} [reason] - Reason code of the message leg
 */

/**
 * @typedef {Object} MessageLegBody
 * @property {string} legId - Id of the message leg
 * @property {CallDirection} direction - Call direction of the message leg
 * @property {Channels  status: CallStatus} type - Channel type of the message leg Call status of the message leg
 * @property {LegState} state - State of the message leg
 */

export {};
