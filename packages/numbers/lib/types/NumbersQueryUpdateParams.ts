import { VoiceCallbackTypeEnum, MessagesCallbackTypeEnum } from '../enums';
import { Country } from './Country';

/**
 * Represents parameters for updating phone number settings.
 */
export type NumbersQueryUpdateParams = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country: Country;

  /**
   * The phone number.
   * Example: "447700900000".
   */
  msisdn: string;

  /**
   * An Application ID.
   * Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
   */
  app_id?: string;

  /**
   * The HTTP URL for handling MO (Mobile Originated) messages.
   */
  moHttpUrl?: string;

  /**
   * The SMPP system type for MO (Mobile Originated) messages.
   */
  moSmppSysType?: string;

  /**
   * The voice callback type.
   */
  voiceCallbackType?: VoiceCallbackTypeEnum;

  /**
   * The voice callback value.
   */
  voiceCallbackValue?: string;

  /**
   * The voice status callback URL.
   */
  voiceStatusCallback?: string;

  /**
   * The messages callback type.
   * @deprecated
   */
  messagesCallbackType?: MessagesCallbackTypeEnum;

  /**
   * The messages callback value.
   * @deprecated
   */
  messagesCallbackValue?: string;
};
