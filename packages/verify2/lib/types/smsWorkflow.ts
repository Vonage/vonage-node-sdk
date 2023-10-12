import { Channels } from '../enums';

/**
 * Represents a workflow for sending a verification code via SMS.
 */
export type SMSWorkflow = {
  /**
   * The communication channel for sending the verification code.
   */
  channel: Channels.SMS;

  /**
   * The recipient's phone number where the verification code will be sent,
   * in the E.164 format.
   */
  to: string;

  /**
   * (Optional) An application-specific hash value for the SMS workflow.
   */
  appHash?: string;
};
