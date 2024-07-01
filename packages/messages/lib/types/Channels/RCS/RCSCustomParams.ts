import { MessageParams } from '../../MessageParams';
import { Channels } from '../../../enums';

/**
 * Represents the parameters for sending a custom message using RCS.
 */
export type RCSCustomParams = MessageParams & {
  /**
   * The channel to send to. You must provide `rcs` in this field.
   */
  channel?: Channels.RCS;

  /**
   * A custom payload. The schema of a custom object can vary widely.
   */
  custom: Record<string, unknown>;

  /**
   * The duration in seconds the delivery of a message will be attempted. By
   * default Vonage attempts delivery for 72 hours, however the maximum
   * effective value depends on the operator and is typically 24 - 48 hours.
   * We recommend this value should be kept at its default or at least 30 minutes.
   */
  ttl?: number;
};
