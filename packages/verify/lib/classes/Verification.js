/**
 * Represents parameters for a verification request.
 */
export class Verification {
  /**
   * The phone number to be verified.
   */
  number;

  /**
   * The brand or application name associated with the verification request.
   */
  brand;

  /**
   * The country code associated with the phone number (optional).
   */
  country;

  /**
   * The sender ID or phone number that will be used to send verification
   * messages (optional).
   */
  senderId;

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
  brand,
  country,
  senderId,
  codeLength,
  language,
  lg,
  pinExpiry,
  nextEventWait,
  workflowId)
  {
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
