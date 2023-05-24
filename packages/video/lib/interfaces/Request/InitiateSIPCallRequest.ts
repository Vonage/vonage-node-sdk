import { SIPCallOptions } from '../SIPCallOptions';

export interface InitiateSIPCallRequest extends SIPCallOptions {
    sessionId: string
}
