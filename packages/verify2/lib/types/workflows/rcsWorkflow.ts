import { Channels } from '../../enums/index.js';

/**
 * Represents a workflow for sending a verification code via SMS.
 */
export type RCSWorkflow = {
  /**
   * The communication channel for sending the verification code.
   */
  channel: Channels.RCS;

  /**
   * The recipient's phone number where the verification code will be sent,
   * in the E.164 format.
   */
  to: string;

  /**
   * An sender identifier in alphanumeric format.
   */
  from: string;

  /**
   * Use the same PIN code across multiple channels within a workflow
   */
  reuseCode?: boolean;
};
