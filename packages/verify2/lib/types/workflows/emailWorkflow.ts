import { Channels } from '../../enums';

/**
 * Represents a workflow for sending a verification code via email.
 */
export type EmailWorkflow = {
  /**
   * The communication channel for sending the verification code.
   */
  channel: Channels.EMAIL;

  /**
   * The recipient's email address where the verification code will be sent.
   */
  to: string;

  /**
   * (Optional) The sender's email address for the verification email.
   */
  from?: string;
};
