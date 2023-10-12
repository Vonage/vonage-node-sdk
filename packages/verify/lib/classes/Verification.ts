import { VerificationParameters } from '../types';
import { VerifyWorkflows, VerifyLanguages } from '../enums';

/**
 * Represents parameters for a verification request.
 */
export class Verification implements VerificationParameters {
  /**
   * The phone number to be verified.
   */
  number: string;

  /**
   * The brand or application name associated with the verification request.
   */
  brand: string;

  /**
   * The country code associated with the phone number (optional).
   */
  country?: string;

  /**
   * The sender ID or phone number that will be used to send verification
   * messages (optional).
   */
  senderId?: string;

  /**
   * The desired length of the verification code (optional).
   */
  codeLength?: number;

  /**
   * @deprecated This property is deprecated. Use `lg` instead.
   */
  language?: string;

  /**
   * The language for sending verification messages (optional).
   */
  lg?: VerifyLanguages;

  /**
   * The duration in seconds for which the verification code will be valid.
   */
  pinExpiry?: number;

  /**
   * The duration in seconds to wait before sending the next verification event.
   */
  nextEventWait?: number;

  /**
   * The workflow ID for customizing the verification process (optional).
   */
  workflowId?: VerifyWorkflows;

  constructor(
    phoneNumber: string,
    brand: string,
    country?: string,
    senderId?: string,
    codeLength?: number,
    language?: VerifyLanguages,
    lg?: VerifyLanguages,
    pinExpiry?: number,
    nextEventWait?: number,
    workflowId?: VerifyWorkflows,
  ) {
    this.number = phoneNumber;
    this.brand = brand;

    if (country) {
      this.country = country;
    }
    if (senderId) {
      this.senderId = senderId;
    }
    if (codeLength) {
      this.codeLength = codeLength;
    }
    if (language) {
      this.lg = language;
      this.language = language;
    }
    if (pinExpiry) {
      this.pinExpiry = pinExpiry;
    }
    if (nextEventWait) {
      this.nextEventWait = nextEventWait;
    }
    if (workflowId) {
      this.workflowId = workflowId;
    }
  }
}
