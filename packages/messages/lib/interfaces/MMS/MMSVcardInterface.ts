import { MMSChannelInterface } from './MMSChannelInterface';
import { MessageVCardInterface } from '../MessageVCardInterface';

/**
 * Represents an interface for defining MMS channel messages with vCards.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MMSVcardInterface
  extends MessageVCardInterface,
    MMSChannelInterface {}
