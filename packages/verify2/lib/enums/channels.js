/**
 * Enum representing different communication channels for verification.
 * @enum {string}
 */
export const Channels = Object.freeze({
  /**
     * SMS channel for verification.
     */
  SMS: 'sms',
  /**
     * WhatsApp channel for verification.
     */
  WHATSAPP: 'whatsapp',
  /**
     * Interactive WhatsApp channel for verification.
     */
  WHATSAPP_INTERACTIVE: 'whatsapp_interactive',
  /**
     * Voice channel for verification.
     */
  VOICE: 'voice',
  /**
    * RCS Channel for verification
    */
  RCS: 'rcs',
  /**
     * Email channel for verification.
     */
  EMAIL: 'email'
});

/**
 * Enum representing the Silent Authentication channel.
 * @enum {string}
 */
export const SilentAuthChannel = Object.freeze({
  /**
     * Silent Authentication channel for verification.
     */
  SILENT_AUTH: 'silent_auth'
});
