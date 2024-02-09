import { MessageRTCIdBody } from './messageRTCIdBody';

export type MessageRTCAnswerBody = {
  answer: string;

  isFromMb: boolean;

  sessionDestination: string;
} & MessageRTCIdBody;
