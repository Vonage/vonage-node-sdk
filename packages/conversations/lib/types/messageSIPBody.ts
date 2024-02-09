import { AnyChannel } from "@vonage/messages";

/**
 * Standard SIP and RTC message body
 *
 * @remarks This is the same body for RTC and SIP
 */
export type MessageSIPBody = {
  /**
   * Call channel
   */
  channel: AnyChannel
};
