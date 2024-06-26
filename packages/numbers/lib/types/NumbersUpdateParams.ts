import { VoiceCallbackTypeEnum, MessagesCallbackTypeEnum } from '../enums';
import { Country } from './Country';

/**
 * Represents parameters for updating phone numbers.
 */
export type NumbersUpdateParams = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country: Country;

  /**
   * The phone number in E.164 format.
   * Example: "+1234567890".
   */
  msisdn: string;

  /**
   * The application ID associated with the phone number.
   * @deprecated Please use app_id
   */
  applicationId?: string;

  /**
   * The application ID associated with the phone number.
   */
  appId?: string;

  /**
   * The URL of the webhook endpoint that handles inbound messages.
   */
  moHttpUrl?: string;

  /**
   * The system type for SMPP MO messages.
   */
  moSmppSysType?: string;

  /**
   * The type of voice callback: "sip", "tel", or "app".
   */
  voiceCallbackType?: VoiceCallbackTypeEnum;

  /**
   * The value for voice callback.
   */
  voiceCallbackValue?: string;

  /**
   * The URL of the voice status callback.
   */
  voiceStatusCallback?: string;

  /**
   * The type of messages callback: "app".
   *
   * @deprecated Use voiceCallbackType instead.
   */
  messagesCallbackType?: MessagesCallbackTypeEnum;

  /**
   * The value for messages callback.
   * @deprecated Use voiceCallbackValue instead.
   */
  messagesCallbackValue?: string;
};
