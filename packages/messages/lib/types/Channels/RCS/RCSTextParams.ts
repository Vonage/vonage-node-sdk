import { Channels } from '../../../enums/index.js';
import { MessageParamsText } from '../../MessageParamsText.js';
import { RCSParams } from './RCSParams.js';
import { AnyRCSSuggestion } from './Suggestions/index.js';

/**
 * Represents the parameters for sending a text message using RCS.
 */
export type RCSTextParams = {
  /**
   * The channel to send to. You must provide `rcs` in this field.
   */
  channel?: Channels.RCS | string;

  /**
   * The text of the message to send. Limited to 3072 characters, including unicode.
   */
  text: string;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum
   * effective value depends on the operator and is typically 24 - 48 hours.
   * We recommend this value should be kept at its default or at least 30 minutes.
   */
  ttl?: number;

  /**
   * An array of suggestion objects to include with the message. You can
   * include up to 11 suggestions per message.
   */
  suggestions?: Array<AnyRCSSuggestion>;
} & RCSParams & MessageParamsText;
