import { MessageSIPBody } from './messageSIPBody.js';

export type MessageSIPMachineBody = {
  /**
   * Type of SIP call
   */
  type: string;

  /**
   * Confidence of the machine detection
   */
  confidence: number;

} & MessageSIPBody;
