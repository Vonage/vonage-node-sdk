/**
 * Represents the response structure when updating account settings.
 *
 * @remarks
 * Settings were updated if supplied; the details of the current settings are included in the response.
 */
export type AccountUpdateResponse = {
  /**
   * The current or updated inbound message webhook URI.
   * @example https://example.com/webhooks/inbound-sms
   */
  'mo-callback-url': string;

  /**
   * The current or updated delivery receipt webhook URI.
   * @example https://example.com/webhooks/delivery-receipt
   */
  'dr-callback-url': string;

  /**
   * The maximum number of outbound messages per second.
   * @example 30
   */
  'max-outbound-request': number;

  /**
   * The maximum number of inbound messages per second.
   * @example 30
   */
  'max-inbound-request': number;

  /**
   * The maximum number of API calls per second.
   * @example 30
   */
  'max-calls-per-second': number;
}
