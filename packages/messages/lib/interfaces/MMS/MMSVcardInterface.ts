import { MMSChannelInterface } from './MMSChannelInterface.js';
import { MessageVCardInterface } from '../MessageVCardInterface.js';

/**
 * Represents an interface for defining MMS channel messages with vCards.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MMSVcardInterface
  extends MessageVCardInterface,
  MMSChannelInterface { }
