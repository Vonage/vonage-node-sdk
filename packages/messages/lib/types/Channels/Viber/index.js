/**
 * Represents a union type that can be any of the Viber-specific message
 * parameters or configurations.
 *
 * @typedef {Object} AnyViberParams
 */

/**
 * Represents a union type that includes the 'channel' property set to 'viber'
 * along with any of the Viber-specific message parameters or configurations.
 *
 * @typedef {Object} AnyViberChannel
 * @property {Channels.VIBER | string} channel - The channel through which the message will be sent, which is 'viber' for Viber.
 */

export * from './ViberAction.js';
export * from './ViberActionParams.js';
export * from './ViberFileParams.js';
export * from './ViberImageParams.js';
export * from './ViberService.js';
export * from './ViberTextParams.js';
export * from './ViberVideoParams.js';

/**
 * Represents a union type that can be any of the Viber-specific message
 * parameters or configurations.
 *
 * @group Viber
 * @category Parameters
 */

/**
 * Represents a union type that includes the 'channel' property set to 'viber'
 * along with any of the Viber-specific message parameters or configurations.
 *
 * @group Viber
 */export {};
