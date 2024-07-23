import { LineType, Feature } from '../enums';
import { Country } from './Country';

/**
 * Represents an owned phone number with its details.
 */
export type NumbersOwnedNumber = {
  /**
   * The two-character country code in ISO 3166-1 alpha-2 format.
   * Example: "US" for the United States.
   */
  country?: Country;

  /**
   * The owned phone number.
   * Example: "447700900000".
   */
  msisdn?: string;

  /**
   * The URL of the webhook endpoint that handles inbound messages for the number.
   * Example: "https://example.com/webhooks/inbound-sms".
   */
  moHttpUrl?: string;

  /**
   * The type of phone number.
   * Example: "mobile-lvn" or "landline".
   */
  type?: LineType;

  /**
   * The capabilities/features of the phone number, such as SMS, VOICE, or MMS.
   * Example: ["SMS", "VOICE"].
   */
  features?: Feature[];

  /**
   * The type of voice callback for the number.
   * Example: "app" or "sip".
   */
  voiceCallbackType?: string;

  /**
   * The value associated with the voice callback.
   * Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
   */
  voiceCallbackValue?: string;

  /**
   * The type of messages callback for the number.
   * Example: "app".
   */
  messagesCallbackType?: string;

  /**
   * The value associated with the messages callback.
   * Example: "aaaaaaaa-bbbb-cccc-dddd-0123456789ab".
   */
  messagesCallbackValue?: string;
};
