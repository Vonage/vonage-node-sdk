/**
 * Represents a union type that can be any of the MMS-specific message parameters.
 *
 * @typedef {Object} AnyMMSParams
 */

/**
 * Represents a union type that includes the 'channel' property set to 'mms'
 * along with any of the MMS-specific message parameters.
 *
 * @typedef {Object} AnyMMSChannel
 * @property {Channels.MMS | string} channel - The channel through which the message will be sent, which is 'mms' for MMS.
 */

export * from './MMSAudioParams.js';
export * from './MMSImageParams.js';
export * from './MMSVcardParams.js';
export * from './MMSVideoParams.js';

/**
 * Represents a union type that can be any of the MMS-specific message parameters.
 *
 * @group MMS
 * @category Parameters
 */

/**
 * Represents a union type that includes the 'channel' property set to 'mms'
 * along with any of the MMS-specific message parameters.
 *
 * @group MMS
 */export {};
