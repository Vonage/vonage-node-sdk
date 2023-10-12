import { MessageAudioInterface } from '../MessageAudioInterface';
import { MMSChannelInterface } from './MMSChannelInterface';

/**
 * Represents an interface for defining MMS audio messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MMSAudioInterface
  extends MessageAudioInterface,
    MMSChannelInterface {}
