/**
 * Represents a union type that can be any of the specific channel message
 * parameters or configurations, including Messenger, MMS, Viber, WhatsApp, or SMS.
 *
 * @typedef {Object} AnyChannel
 */

/**
 * @typedef {Object} MessageWithFailover
 */

export * from './Messenger/';
export * from './MMS/';
export * from './Viber/';
export * from './WhatsApp/';
export * from './SMSParams';
export * from './RCS/';

/**
 * Represents a union type that can be any of the specific channel message
 * parameters or configurations, including Messenger, MMS, Viber, WhatsApp, or SMS.
 */
export {};
