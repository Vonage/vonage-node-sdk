import { RecordCommon } from './recordCommon.js';

export type SMSOutboundRecord = {
  /**
   * It's used to identify separate accounts using the SMS endpoint for billing
   * purposes. The field is optional in SMS. It can be empty in the report
   */
  accountRef?: string,

  /**
   * The number used instead of from field by Vonage, but only if if Number
   * Pools API was used or if routing rules were changed due to compliance
   * reasons. It will be empty if not applicable.
   */
  changedFrom?: string,

  /**
   * If client-ref parameter were used by the Customer while calling SMS, the
   * value with Client's own reference will be shown in this field. Up to 100
   * characters.
   */
  clientRef?: string,

  /**
   * Indicates whether the SMS was split up into multiple parts (due to its
   * length). The field will be available in the report if Reports API were
   * called with the parameter show_concatenated= true.
   */
  concatenated?: 'TRUE' | 'FALSE',

  /**
   * The ISO two letter country code to which the network code belongs in the
   * numbering plan
   */
  country?: string,

  /**
   * Country name of the country code
   */
  countryName?: string,

  /**
   * Currency of the price of the SMS request. Always returns an empty string.
   */
  currency?: string,

  /**
   * Date when the SMS message reached its final state.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm Time zone: UTC
   */
  dateFinalized?: string,

  /**
   * Date when Vonage received SMS request.
   * Format: yyyy-mm-ddThh:mm:ss±hh:mm Time zone: UTC
   */
  dateReceived?: string,

  /**
   * DCS (Data Coding Scheme) is the encoding with which the message body was
   * delivered to the phone. It is according to the value of the type parameter
   * used in SMS request. DCS = 0 (the default value) is for GSM/text. DCS = 8
   * is for unicode text messages DCS = 4 is for binary text messages
   */
  dcs?: string,

  /**
   * The specific code indicating the result of the Vonage handoff to the
   * supplier. A code of 0 typically indicates a successful handoff.
   */
  errorCode?: string,

  /**
   * A short text explanation for the value in error_code. This confirms the
   * immediate status of the message handover from Vonage to the destination
   * carrier/supplier.
   */
  errorCodeDescription?: string,

  /**
   * The number used instead of from field by Vonage, but only if there are
   * any special routing rules were applied. It will be empty if not applicable.
   */
  forcedFrom?: string,

  /**
   * The IP address of the Customer's server calling SMS.
   */
  ipAddress?: string,

  /**
   * Latency of the request in ms
   */
  latency?: string,

  /**
   * Body of the message sent. Only present if include_message parameter is set to true.
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
   * The final status of the message delivery, derived from the Delivery
   * Receipt (DLR) provided by the carrier/supplier. The statuses are
   * according to "SMS Delivery statuses" explained on Developer portal and in
   * KB article
   */
  direction?: string,

  /**
   * The final status of the message delivery, derived from the Delivery
   * Receipt (DLR) provided by the carrier/supplier.
   */
  status?: string,

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
   * Price of the SMS request
   */
  totalPrice?: string,

  /**
   * User Data Header, available if SMS was split up into multiple parts (due
   * to its length). Pay attention: UDHs are not unique values. An 8 bit
   * concatenation UDH is always going to start from 050003, then the
   * reference e.g. 00 and then the total parts and part index e.g. 0201 for
   * the first part of a two part message
   */
  udh?: string,

  /**
   * The validity period of the SMS message used in the ttl parameter of the
   * SMS request. The duration in milliseconds the delivery of an SMS will be
   * attempted. By default Vonage attempts delivery for 72 hours, however the
   * maximum effective value depends on the operator and is typically 24 - 48
   * hours.
   */
  validityPeriod?: string,

  /**
   * RCS workflow_id. Populated only when an SMS is converted to RCS. It
   * matches the workflow_id in the Messages report, allowing retrieval of the
   * corresponding RCS record. Blank if not converted.
   */
  workflowId?: string,
} & RecordCommon;
