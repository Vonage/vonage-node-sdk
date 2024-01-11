/**
 * Enum representing different communication channels for verification.
 */
export enum Channels {
  /**
   * SMS channel for verification.
   */
  SMS = 'sms',

  /**
   * WhatsApp channel for verification.
   */
  WHATSAPP = 'whatsapp',

  /**
   * Interactive WhatsApp channel for verification.
   */
  WHATSAPP_INTERACTIVE = 'whatsapp_interactive',

  /**
   * Voice channel for verification.
   */
  VOICE = 'voice',

  /**
   * Email channel for verification.
   */
  EMAIL = 'email',
}

/**
 * Enum representing the Silent Authentication channel.
 */
export enum SilentAuthChannel {
  /**
   * Silent Authentication channel for verification.
   */
  SILENT_AUTH = 'silent_auth',
}

/**
 * Type alias for the Silent Authentication channel.
 */
export type SilenAuthChannel = SilentAuthChannel;
