import { MessageParamsText } from '../MessageParamsText';
import { Channels } from '../../enums';

/**
 * Represents the parameters for sending an SMS message.
 *
 * This type is an alias for `MessageParamsText` and is used when creating an SMS message.
 *
 * @group SMS
 * @category Parameters
 */
export type SMSParams = {
  channel: Channels.SMS | string;

  /**
   * The duration in seconds the delivery of an SMS will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum
   * effective value depends on the operator and is typically 24 - 48 hours.
   * We recommend this value should be kept at its default or at least 30 minutes.
   */
  ttl?: number;

  sms?: SMSExtraParams;
} & MessageParamsText;

export type SMSExtraParams = {
  /**
   * The encoding type to use for the message. If set to either text or
   * unicode the specified type will be used. If set to auto (the default),
   * the Messages API will automatically set the type based on the content
   * of text; i.e. if unicode characters are detected in text, then the
   * message will be encoded as unicode, and otherwise as text.
   *
   * @link https://api.support.vonage.com/hc/en-us/sections/200622473-Country-Specific-Features-and-Restrictions
   */
  encodingType?: 'unicode' | 'text' | 'auto';

  /**
   * A string parameter that satisfies regulatory requirements when sending
   * an SMS to specific countries.
   */
  contentId?: string;

  /**
   * A string parameter that satisfies regulatory requirements when sending
   * an SMS to specific countries.
   *
   * @link https://api.support.vonage.com/hc/en-us/sections/200622473-Country-Specific-Features-and-Restrictions
   */
  entityId?: string;
};

/**
 * Represents an SMS channel message, combining the channel type with SMS-specific parameters.
 *
 * This type includes the `channel` field specifying the SMS channel and combines
 * it with the SMS message parameters defined in `SMSParams`.
 *
 * @group SMS
 * @deprecated Use SMSParams instead
 */
export type SMSChannel = SMSParams;
