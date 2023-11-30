import {
  EarmuffCallParameters,
  HangupCallParameters,
  MuteCallParameters,
  TransferCallParameters,
  UnearmuffCallParameters,
  UnmuteCallParameters,
} from '../Parameters';

/**
 * Represents the parameters for modifying a call, including actions like
 * earmuff, hangup, mute, transfer, unearmuff, and unmute.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ModifyCallRequestParameters =
  | EarmuffCallParameters
  | HangupCallParameters
  | MuteCallParameters
  | TransferCallParameters
  | UnearmuffCallParameters
  | UnmuteCallParameters;
