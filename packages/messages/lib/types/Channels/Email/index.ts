import { HTMLEmailParams } from './HTMLEmailParams.js';
import { TextEmailParams } from './TextEmailParams.js';
import { Channels } from '../../../enums/index.js';

export * from './ContentEmailParams.js';
export * from './EmailParams.js';
export * from './EmailSettings.js';
export * from './HTMLEmailParams.js';
export * from './TextEmailParams.js';

/**
 * Represents a union type that can be any of the MMS-specific message parameters.
 *
 * @group Email
 * @category Parameters
 */
export type AnyEmailParams =
  | HTMLEmailParams
  | TextEmailParams;

/**
 * Represents a union type that includes the 'channel' property set to 'email'
 * along with any of the Email-specific message parameters.
 *
 * @group Email
 */
export type AnyEmailChannel = {
  /**
   * The channel through which the message will be sent, which is 'email' for Email.
   */
  channel: Channels.EMAIL | string;
} & AnyEmailParams;
