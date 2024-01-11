import { BasicCallDetail } from '../BasicCallDetail';

/**
 * Represents the response for creating an outbound call, including the conversation UUID and basic call details.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CreateOutboundCallResponse = {
  /**
   * The UUID of the conversation associated with the outbound call.
   */
  conversation_uuid: string;
} & Omit<BasicCallDetail, 'conversationUUID'>;
