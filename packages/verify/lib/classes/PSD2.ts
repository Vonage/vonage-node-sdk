import { PSD2Parameters } from '../types/index';
import { VerifyWorkflows, VerifyLanguages } from '../enums/index';

export class PSD2 implements PSD2Parameters {
  number: string;
  payee: string;
  amount: number;
  country?: string;
  codeLength?: number;
  lg?: VerifyLanguages;
  /**
     * @deprecated
     */
  language?: string;
  pinExpiry?: number;
  nextEventWait?: number;
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
