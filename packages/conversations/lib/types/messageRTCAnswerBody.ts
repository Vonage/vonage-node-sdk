import { MessageRTCIdBody } from './messageRTCIdBody.js';

export type MessageRTCAnswerBody = {
  answer: string;

  isFromMb: boolean;

  sessionDestination: string;
} & MessageRTCIdBody;
