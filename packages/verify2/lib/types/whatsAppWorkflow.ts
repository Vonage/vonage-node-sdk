import { Channels } from '../enums';

/**
 * Represents a workflow for sending a verification code via WhatsApp.
 */
export type WhatsAppWorkflow = {
  /**
   * The communication channel for sending the verification code.
   */
  channel: Channels.WHATSAPP;

  /**
   * The recipient's phone number where the verification code will be sent,
   * typically in the E.164 format.
   */
  to: string;

  /**
   * (Optional) The sender's phone number or identifier for the WhatsApp
   * message.
   */
  from?: string;
};
