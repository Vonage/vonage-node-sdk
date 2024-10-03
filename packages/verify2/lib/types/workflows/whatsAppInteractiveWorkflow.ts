import { Channels } from '../../enums';

/**
 * Represents a workflow for sending a verification code via interactive
 * WhatsApp.
 */
export type WhatsAppInteractiveWorkflow = {
  /**
   * The communication channel for sending the verification code.
   */
  channel: Channels.WHATSAPP_INTERACTIVE;

  /**
   * The recipient's phone number where the verification code will be sent,
   * typically in the E.164 format.
   */
  to: string;
};
