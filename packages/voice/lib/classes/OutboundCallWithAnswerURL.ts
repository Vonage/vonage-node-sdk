import { PhoneEndpointObject } from '../interfaces/Endpoint/PhoneEndpointObject'
import { OutboundCallWithAnswerURL as IOutboundCallWithAnswerURL } from '../interfaces/OutboundCallWithAnswerURL'
import { CallEndpoint } from '../types/Endpoint/CallEndpoint'
import { OutboundCall } from './OutboundCall'

export class OutboundCallWithAnswerURL
    extends OutboundCall
    implements IOutboundCallWithAnswerURL
{
    /* tslint:disable-next-line */
    public answer_url: string[]

    constructor(
        answerUrl: string,
        to: CallEndpoint,
        from?: PhoneEndpointObject
    ) {
        super(to, from)
        this.answer_url = [answerUrl]
    }
}
