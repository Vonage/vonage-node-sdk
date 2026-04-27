/**
 * Represents a union type that can be any of the Messenger-specific message
 * parameters or MessengerType.
 *
 * @typedef {Object} AnyMessengerParams
 */

/**
 * Represents a union type that includes the 'channel' property set to 'messenger'
 * along with any of the Messenger-specific message parameters or MessengerType.
 *
 * @typedef {Object} AnyMessengerChannel
 * @property {Channels.MESSENGER | string} channel - The channel through which the message will be sent, which is 'messenger' for Messenger.
 */

export * from './MessengerAudioParams.js';
export * from './MessengerFileParams.js';
export * from './MessengerImageParams.js';
export * from './MessengerParams.js';
export * from './MessengerTextParams.js';
export * from './MessengerType.js';
export * from './MessengerVideoParams.js';

/**
 * Represents a union type that can be any of the Messenger-specific message
 * parameters or MessengerType.
 *
 * @group Messenger
 * @category Parameters
 */

/**
 * Represents a union type that includes the 'channel' property set to 'messenger'
 * along with any of the Messenger-specific message parameters or MessengerType.
 */
export {};
