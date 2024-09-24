import { Channels } from '../../enums';

/**
 * Represents a workflow for sending a verification code via voice call.
 */
export type VoiceWorkflow = {
  /**
   * The communication channel for sending the verification code.
   */
  channel: Channels.VOICE;

  /**
   * The recipient's phone number where the verification code will be sent,
   * in the E.164 format.
   */
  to: string;
};
