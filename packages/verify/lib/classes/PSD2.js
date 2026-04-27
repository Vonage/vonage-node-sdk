/**
 * Represents parameters for a PSD2 (Payment Services Directive 2) verification
 * request.
 */
export class PSD2 {
  /**
   * The phone number to be verified.
   */
  number;

  /**
   * The payee's name or identifier for the payment confirmation.
   */
  payee;

  /**
   * The decimal amount of the payment to be confirmed, in Euros.
   */
  amount;

  /**
   * The country code associated with the phone number (optional).
   */
  country;

  /**
   * The desired length of the verification code (optional).
   */
  codeLength;

  /**
   * @deprecated This property is deprecated. Use `lg` instead.
   */
  language;

  /**
   * The language for sending verification messages (optional).
   */
  lg;

  /**
   * The duration in seconds for which the verification code will be valid.
   */
  pinExpiry;

  /**
   * The duration in seconds to wait before sending the next verification event.
   */
  nextEventWait;

  /**
   * The workflow ID for customizing the verification process (optional).
   */
  workflowId;

  constructor(
  phoneNumber,
  payee,
  amount,
  country,
  codeLength,
  language,
  lg,
  pinExpiry,
  nextEventWait,
  workflowId)
  {
    this.number = phoneNumber;
    this.amount = amount;
    this.payee = payee;

    if (country) {
      this.country = country;
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
