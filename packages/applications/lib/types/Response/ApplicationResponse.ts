import { APILinks } from '@vonage/server-client';
import { Application } from '../Application';
import { CapabilityVerifyResponse } from './CapabilityVerifyResponse';
import { CapabilityRTCResponse } from './CapabilityRTCResponse';
import { CapabilityVoiceResponse } from './CapabilityVoiceResponse';
import { CapabilityMeetingsResponse } from './CapabilityMeetingsResponse';
import { CapabilityBulkResponse } from './CapabilityBulkResponse';
import { CapabilityMessagesResponse } from './CapabilityMessagesResponse';

export type ApplicationResponse = {
  keys: {
    public_key: string;
  };
  privacy: {
    improve_ai: boolean;
  };
  capabilities: {
    rtc: CapabilityRTCResponse;
    voice: CapabilityVoiceResponse;
    meetings: CapabilityMeetingsResponse;
    bulk: CapabilityBulkResponse;
    messages: CapabilityMessagesResponse;
    verify: CapabilityVerifyResponse;
    vbc: unknown;
  };
} & Application &
  APILinks;
