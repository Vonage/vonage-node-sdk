import {
  EarmuffCallParameters,
  HangupCallParameters,
  MuteCallParameters,
  TransferCallParameters,
  UnearmuffCallParameters,
  UnmuteCallParameters,
} from '../Parameters';

export type ModufyCallRequestParameters =
  | EarmuffCallParameters
  | HangupCallParameters
  | MuteCallParameters
  | TransferCallParameters
  | UnearmuffCallParameters
  | UnmuteCallParameters;
