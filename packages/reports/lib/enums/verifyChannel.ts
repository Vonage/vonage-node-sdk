/**
 * Channel used for PIN delivery in a Verify v2 request.
 */
export enum VerifyChannel {
  /**
   * Email channel used for verification.
   */
  EMAIL = 'email',

  /**
   * Silent authentication channel used for verification.
   */
  SILENT_AUTH = 'silent_auth',

  /**
   * Standard Verify v2 channel (SMS, voice, WhatsApp, etc.).
   */
  V2 = 'v2',
}
