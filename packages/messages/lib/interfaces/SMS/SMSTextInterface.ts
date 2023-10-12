import { MessageTextInterface } from '../MessageTextInterface';

/**
 * Represents an interface for defining SMS channel text messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface SMSTextInterface extends MessageTextInterface {
  /**
   * The channel for SMS, which is always 'sms'.
   */
  channel: 'sms';
}
