import { CallDirection } from '@vonage/voice';
import { MessageSIPBody } from './messageSIPBody.js';

/**
 * Standard SIP and RTC message body with direction
 *
 * @remarks This is the same body for RTC and SIP
 */
export type MessageSIPDirectionBody = {
  /**
   * Direction of the call
   */
  direction: CallDirection;
} & MessageSIPBody;
