import { VerifyLocale } from '../enums';
import { EmailWorkflow } from './emailWorkflow';
import { SMSWorkflow } from './smsWorkflow';
import { SilentAuthWorkflow } from './silentAuthWorkflow';
import { VoiceWorkflow } from './voiceWorkflow';
import { WhatsAppInteractiveWorkflow } from './whatsAppInteractiveWorkflow';
import { WhatsAppWorkflow } from './whatsAppWorkflow';

export type SMSWorkflowRequest = {
  app_hash?: string;

  content_id?: string;

  entity_id?: string;
} & Omit<SMSWorkflow, 'appHash'>;

export type SilentAuthWorkflowRequest = {
  redirect_url: string;
} & Omit<SilentAuthWorkflow, 'redirectUrl'>;
/**
 * Represents a verification request for sending verification codes via
 * different communication channels.
 */
export type VerificationRequest = {
  /**
   * The brand associated with the verification request.
   */
  brand: string;

  /**
   * An array of workflow configurations for sending verification codes via
   * different channels. Each element in the array corresponds to a specific
   * channel workflow.
   */
  workflow: Array<
    | EmailWorkflow
    | SMSWorkflowRequest
    | SilentAuthWorkflowRequest
    | VoiceWorkflow
    | WhatsAppInteractiveWorkflow
    | WhatsAppWorkflow
  >;

  /**
   * (Optional) The verification code to be sent.
   */
  code?: string;

  /**
   * (Optional) The locale for the verification request.
   */
  locale?: VerifyLocale | string;

  /**
   * (Optional) The timeout duration for the verification channel in seconds.
   */
  channel_timeout?: number;

  /**
   * (Optional) The client reference associated with the verification request.
   */
  client_ref?: string;

  /**
   * (Optional) The length of the verification code, if not provided,
   * defaults to 4 digits.
   */
  code_length?: 4 | 5 | 6 | 7 | 8 | 9 | 10;

  /**
   * (Optional) Indicates whether fraud checking is enabled for the
   * verification request.
   */
  fraud_check?: boolean;
};
