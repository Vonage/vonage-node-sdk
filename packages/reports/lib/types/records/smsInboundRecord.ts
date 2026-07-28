import { RecordCommon } from './recordCommon.js';

export type SMSInboundRecord = {
  /**
   * The ISO two letter country code to which the network code belongs in the
   * numbering plan
   */
  country?: string;

  /**
   * The ISO two letter country code to which the network code belongs in the numbering plan
   */
  countryName?: string,

  /**
   * Currency of the price of the inbound SMS. Always returns an empty string.
   */
  currency?: string,

  /**
   * Date when Vonage received the inbound message from it's supplier.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm Time zone: UTC
   */
  dateReceived?: string,

  /**
   * Direction of the SMS message, either inbound or outbound.
   */
  direction?: 'inbound' | 'outbound',

  /**
   * The phone number that this inbound message was sent from.
   */
  from?: string,

  /**
   * Body of the message sent. Only present if include_message parameter is
   * set to true.
   */
  messageBody?: string,

  /**
   * Vonage's unique identifier for this message
   */
  messageId?: string,


  /**
   * The network code of the destination phone number. Taken from a carrier
   * lookup (or sometimes the numbering plan), and always a master network code.
   * Usually an MCC/MNC but sometimes alpha e.g US-FIXED
   */
  network?: string,

  /**
   * The name of the network code
   */
  networkName?: string,

  /**
   * The predefined volume range that applies to the pricing tier for this
   * usage record. Format: "{lowerBound}-{upperBound}" where upperBound can be
   * a number or "onwards" for the last open-ended tier. For voice products,
   * values are expressed in seconds. Multiple ranges may be joined by "_" when
   * usage spans multiple tiers. Null or empty indicates flat-rate pricing (no
   * tiered model applies).
   */
  tierVolume?: string,

  /**
   * The phone number that the SMS message was sent to. This is Customer's
   * virtual number.
   */
  to?: string,

  /**
   * Price of the inbound SMS
   */
  totalPrice?: string,
} & RecordCommon;
