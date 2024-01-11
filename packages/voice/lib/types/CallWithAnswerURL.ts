import { CommonOutboundCall } from './CommonOutboundCall';
import { HttpMethod } from '../enums';

/**
 * Represents an outbound call with an answer URL, including common call properties and the answer URL information.
 */
export type CallWithAnswerURL = CommonOutboundCall & {
  /**
   * The URL(s) to which call events should be sent when the call is answered.
   */
  answerUrl: string[];

  /**
   * The HTTP method used to send events to the answer URL(s), typically "GET" or "POST."
   */
  answerMethod?: HttpMethod;
};
