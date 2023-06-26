import { VetchResponse } from '@vonage/vetch';
import { VoiceClassParameters as VoiceClassParametersType } from './types/Parameters/VoiceClassParameters';
import { CallDetailResponse as CallDetailResponseType } from './types/Responses';
import {
  CallPageResponse,
  CreateCallResponse,
  UpdateCallResponse,
} from './types/Responses';
import { GetCallDetailsParameters } from './types/Parameters/GetCallsDetailsParameters';
import debug from 'debug';

debug('@vonage/voice')(
  'This file is deprecated please update to use the core package',
);

export type VoiceResponse<T> = VetchResponse<T>;

export type VoiceClassParameters = VoiceClassParametersType;

export type CallDetailResponse = CallDetailResponseType;

export type CallListResponse = CallPageResponse;

/**
 * @deprecated Pelease use GetCallDetailsParameters instead
 */
export type CallListFilter = {
  date_start?: string;
  date_end?: string;
  page_size?: string;
  record_index?: string;
  conversation_uuid?: string;
} & GetCallDetailsParameters;

export type CallCreateResponse = CreateCallResponse;

export type CallModifyResponse = UpdateCallResponse;
