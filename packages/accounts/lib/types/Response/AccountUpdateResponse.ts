/**
 * Represents the response structure when updating account settings.
 *
 * @remarks
 * Settings were updated if supplied; the details of the current settings are included in the response.
 */
export type AccountUpdateResponse = {
  /**
   * The current or updated inbound message webhook URI.
   */
  'mo-callback-url': string;

  /**
   * The current or updated delivery receipt webhook URI.
   */
  'dr-callback-url': string;

  /**
   * The maximum number of outbound messages per second.
   */
  'max-outbound-request': number;

  /**
   * The maximum number of inbound messages per second.
   */
  'max-inbound-request': number;

  /**
   * The maximum number of API calls per second.
   */
  'max-calls-per-second': number;
};
