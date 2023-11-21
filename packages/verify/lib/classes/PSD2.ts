import { PSD2Parameters } from '../types';
import { VerifyWorkflows, VerifyLanguages } from '../enums';

/**
 * Represents parameters for a PSD2 (Payment Services Directive 2) verification
 * request.
 */
export class PSD2 implements PSD2Parameters {
  /**
   * The phone number to be verified.
   */
  number: string;

  /**
   * The payee's name or identifier for the payment confirmation.
   */
  payee: string;

  /**
   * The decimal amount of the payment to be confirmed, in Euros.
   */
  amount: number;

  /**
   * The country code associated with the phone number (optional).
   */
  country?: string;

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
    payee: string,
    amount: number,
    country?: string,
    codeLength?: number,
    language?: VerifyLanguages,
    lg?: VerifyLanguages,
    pinExpiry?: number,
    nextEventWait?: number,
    workflowId?: VerifyWorkflows,
  ) {
    this.number = phoneNumber;

    if (country) {
      this.country = country;
    }
    if (payee) {
      this.payee = payee;
    }
    if (amount) {
      this.amount = amount;
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
