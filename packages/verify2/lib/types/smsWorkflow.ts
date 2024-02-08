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
   * An optional sender number, in the E.164 format.
   * Don't use a leading + or 00 when entering a phone number, start with the
   * country code, for example, 447700900000.
   *
   * @remarks
   * If no from number is given, the request will default to the brand.
   */
  from?: string;

  /**
   * Optional PEID required for SMS delivery using Indian Carriers
   */
  entityId?: string;

  /**
   * Optional value corresponding to a TemplateID for SMS delivery using Indian Carriers
   */
  contentId?: string;

  /**
   * (Optional) An application-specific hash value for the SMS workflow.
   */
  appHash?: string;
};
