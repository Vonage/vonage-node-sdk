import { MessageParamsText } from "../MessageParamsText";
import { Channels } from "../../enums";

/**
 * Represents the parameters for sending an SMS message.
 *
 * This type is an alias for `MessageParamsText` and is used when creating an SMS message.
 *
 * @group SMS
 * @category Parameters
 * @remarks The purpose of this type is to ensure a consistent interface for SMS
 * message parameters, making it easier to extend or modify the type in the
 * future without impacting existing code that uses it.
 * It is based on the `MessageParamsText` type.
 */
export type SMSParams = MessageParamsText;

/**
 * Represents an SMS channel message, combining the channel type with SMS-specific parameters.
 *
 * This type includes the `channel` field specifying the SMS channel and combines
 * it with the SMS message parameters defined in `SMSParams`.
 *
 * @group SMS
 */
export type SMSChannel = {
  channel: Channels.SMS
} & SMSParams;
