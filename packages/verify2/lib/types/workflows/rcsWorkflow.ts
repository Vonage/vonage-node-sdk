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
   * An optional sender number, in the E.164 format.
   * Don't use a leading + or 00 when entering a phone number, start with the
   * country code, for example, 447700900000.
   *
   * @remarks
   * If no from number is given, the request will default to the brand.
   */
  from?: string;

  /**
   * Use the same PIN code across multiple channels within a workflow
   */
  reuseCode?: boolean;
};
