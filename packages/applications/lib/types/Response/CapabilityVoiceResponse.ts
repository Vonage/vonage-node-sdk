import { CapabilityWebhookResponse } from './CapabilityWebhookResponse';
import { CapabilityVoice } from '../CapabilityVoice';

export type CapabilityVoiceResponse = {
  webhooks: {
    eventUrl: {
      socketTimeout?: number;
      connectTimeout?: number;
    } & CapabilityWebhookResponse;
    answerUrl: {
      socketTimeout?: number;
      connectTimeout?: number;
    } & CapabilityWebhookResponse;
    fallbackAnswerUrl: {
      socketTimeout?: number;
      connectTimeout?: number;
    } & CapabilityWebhookResponse;
  };
  payment_enabled: boolean;
  signed_callbacks: boolean;
  conversations_ttl: number;
} & Omit<
  CapabilityVoice,
  'webhooks' | 'paymentEnabled' | 'signedCallbacks' | 'conversationsTTL'
>;
