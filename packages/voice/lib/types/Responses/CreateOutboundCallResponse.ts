import { BasicCallDetail } from '../BasicCallDetail';

export type CreateOutboundCallResponse = {
  conversation_uuid: string;
} & Omit<BasicCallDetail, 'conversationUUID'>;
