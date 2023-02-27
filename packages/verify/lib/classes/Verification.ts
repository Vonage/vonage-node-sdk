import { VerificationParameters } from '../types/index';
import { VerifyWorkflows, VerifyLanguages } from '../enums/index';

export class Verification implements VerificationParameters {
  number: string;
  brand: string;
  country?: string;
  senderId?: string;
  codeLength?: number;
  /**
     * @deprecated
     */
  language?: string;
  lg?: VerifyLanguages;
  pinExpiry?: number;
  nextEventWait?: number;
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
