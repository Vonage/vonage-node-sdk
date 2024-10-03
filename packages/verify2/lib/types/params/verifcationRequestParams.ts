import { VerifyLocale } from '../../enums';
import {
  EmailWorkflow,
  SMSWorkflow,
  SilentAuthWorkflow ,
  VoiceWorkflow,
  WhatsAppInteractiveWorkflow ,
  WhatsAppWorkflow,
} from '../workflows';

/**
 * Represents parameters for creating a verification request for sending
 * verification codes via different communication channels.
 */
export type VerificationRequestParams = {
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
    | SMSWorkflow
    | SilentAuthWorkflow
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
  channelTimeout?: number;

  /**
   * (Optional) The client reference associated with the verification request.
   */
  clientRef?: string;

  /**
   * (Optional) The length of the verification code, if not provided,
   * defaults to 4 digits.
   */
  codeLength?: 4 | 5 | 6 | 7 | 8 | 9 | 10;

  /**
   * (Optional) Indicates whether fraud checking is enabled for the
   * verification request.
   */
  fraudCheck?: boolean;

  /**
   * A custom template ID to use for the verification request.
   *
   * @remarks
   * Only voice and sms workflows support custom templates.
   */
  templateId?: string;
};
