import { PhoneEndpointObject } from '../interfaces/Endpoint/PhoneEndpointObject';
import { OutboundCallWithAnswerURL as IOutboundCallWithAnswerURL } from '../interfaces/OutboundCallWithAnswerURL';
import { CallEndpoint } from '../types';
import { OutboundCall } from './OutboundCall';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the CallWithAnswerURL type',
);

/**
 * Represents an outbound call with an answer URL.
 *
 * @deprecated This class is deprecated. Please update to use the CallWithAnswerURL type
 */
export class OutboundCallWithAnswerURL
  extends OutboundCall
  implements IOutboundCallWithAnswerURL
{
  /**
   * The list of answer URLs.
   */
  /* tslint:disable-next-line */
  answer_url: string[];

  /**
   * The list of answer URLs.
   *
   * @deprecated Use `answer_url` instead.
   */
  answerUrl: string[];

  /**
   * Creates a new outbound call with an answer URL.
   *
   * @param {string} answerUrl - The answer URL for the call.
   * @param {CallEndpoint} to - The call endpoint to which the outbound call will be made.
   * @param {PhoneEndpointObject} [from] - The phone endpoint object representing the caller's information.
   */
  constructor(answerUrl: string, to: CallEndpoint, from?: PhoneEndpointObject) {
    super(to, from);
    this.answer_url = [answerUrl];
    this.answerUrl = [answerUrl];
  }
}
