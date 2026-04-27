import { OutboundCall } from './OutboundCall';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the CallWithAnswerURL type'
);

/* istanbul ignore next */
/**
 * Represents an outbound call with an answer URL.
 *
 * @deprecated This class is deprecated. Please update to use the CallWithAnswerURL type
 */
export class OutboundCallWithAnswerURL extends
OutboundCall {
  /**
   * The list of answer URLs.
   */
  /* tslint:disable-next-line */
  answer_url;

  /**
   * The list of answer URLs.
   *
   * @deprecated Use `answer_url` instead.
   */
  answerUrl;

  /**
   * Creates a new outbound call with an answer URL.
   *
   * @param {string} answerUrl - The answer URL for the call.
   * @param {CallEndpoint} to - The call endpoint to which the outbound call will be made.
   * @param {PhoneEndpointObject} [from] - The phone endpoint object representing the caller's information.
   */
  constructor(answerUrl, to, from) {
    super(to, from);
    this.answer_url = [answerUrl];
    this.answerUrl = [answerUrl];
  }
}
