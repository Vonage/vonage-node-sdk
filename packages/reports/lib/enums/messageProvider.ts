/**
 * Messaging provider used to send or receive a message via the Messages API.
 */
export enum MessageProvider {
  /**
   * Email channel
   */
  EMAIL = 'email',

  /**
   * Instagram messaging channel
   */
  INSTAGRAM = 'instagram',

  /**
   * Facebook Messenger channel
   */
  MESSENGER = 'messenger',

  /**
   * Multimedia Messaging Service (MMS) channel
   */
  MMS = 'mms',

  /**
   * Rich Communication Services (RCS) channel
   */
  RCS = 'rcs',

  /**
   * Short Message Service (SMS) channel
   */
  SMS = 'sms',

  /**
   * Viber Service Messages channel
   */
  VIBER_SERVICE_MSG = 'viber_service_msg',

  /**
   * WhatsApp channel
   */
  WHATSAPP = 'whatsapp',
}
