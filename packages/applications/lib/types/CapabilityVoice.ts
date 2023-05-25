import { CapabilityWebhook } from './CapabilityWebhook';

export type CapabilityVoice = {
  webhooks: {
    eventUrl: {
      socketTimeout?: number;
      connectTimeout?: number;
    } & CapabilityWebhook;
    answerUrl: {
      socketTimeout?: number;
      connectTimeout?: number;
    } & CapabilityWebhook;
    fallbackAnswerUrl: {
      socketTimeout?: number;
      connectTimeout?: number;
    } & CapabilityWebhook;
  };
  paymentEnabled: boolean;
  signedCallbacks: boolean;
  conversationsTTL: number;
  region: string;
  payments: {
    gateways: Array<unknown>;
  };
};
