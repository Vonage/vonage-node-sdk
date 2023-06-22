import { PhoneEndpointObject } from '../interfaces/Endpoint/PhoneEndpointObject';
import { OutboundCallWithAnswerURL as IOutboundCallWithAnswerURL } from '../interfaces/OutboundCallWithAnswerURL';
import { CallEndpoint } from '../types/Endpoint/CallEndpoint';
import { OutboundCall } from './OutboundCall';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class OutboundCallWithAnswerURL
  extends OutboundCall
  implements IOutboundCallWithAnswerURL
{
  /* tslint:disable-next-line */
  answer_url: string[];

  answerUrl: string[];

  constructor(answerUrl: string, to: CallEndpoint, from?: PhoneEndpointObject) {
    super(to, from);
    this.answer_url = [answerUrl];
    this.answerUrl = [answerUrl];
  }
}
