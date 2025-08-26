import { MessageAudioInterface } from '../MessageAudioInterface.js';
import { MMSChannelInterface } from './MMSChannelInterface.js';

/**
 * Represents an interface for defining MMS audio messages.
 *
 * @deprecated Please use types instead of interfaces.
 *
 * @ignore
 */
export interface MMSAudioInterface
  extends MessageAudioInterface,
  MMSChannelInterface { }
