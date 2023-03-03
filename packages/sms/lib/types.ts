export * from './classes/index';
export * from './enums/index';
export * from './interfaces/index';
export * from './types/index';

import { ErrorMessage } from './interfaces/ErrorMessage';
import { Message } from './interfaces/Message';
import debug from 'debug';

const log = debug('vonage:sms');

log('Importing from the types.ts is depreacted and will be removed');

/**
 * @deprecated no replacement for this
 */
export interface ErrorXml {
    messages?: ErrorMessage[]
}

/**
 * @deprecated no replacement for this
 */
export interface ModelError {
    messageCount?: string
    messages?: ErrorMessage[]
}

/**
 * @deprecated no replacement for this
 */
export interface SMSXml {
    messages?: Message[]
}
