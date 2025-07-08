import { MessageTypes } from '../../../enums/MessageTypes';
import { Channels } from '../../../enums';
import { MessageParams } from '../../MessageParams';
import { MessageVideoType } from '../../MessageVideoType';
import { RCSParams } from './RCSParams';

/**
 * Represents the parameters for sending a video message using RCS.
 */
export type RCSVideoParams = {
  messageType: MessageTypes.VIDEO;

  video: MessageVideoType;

  /**
   * The channel to send to. You must provide `rcs` in this field.
   */
  channel?: Channels.RCS;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum
   * effective value depends on the operator and is typically 24 - 48 hours.
   * We recommend this value should be kept at its default or at least 30 minutes.
   */
  ttl?: number;
} & RCSParams & MessageParams;
