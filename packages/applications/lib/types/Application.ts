import { CapabilityBulk } from './CapabilityBulk';
import { CapabilityMeetings } from './CapabilityMeetings';
import { CapabilityMessages } from './CapabilityMessages';
import { CapabilityRTC } from './CapabilityRTC';
import { CapabilityVerify } from './CapabilityVerify';
import { CapabilityVoice } from './CapabilityVoice';

export type Application = {
  id?: string;
  name: string;
  keys?: {
    publicKey?: string;
    privateKey?: string;
  };
  privacy?: {
    improveAi: boolean;
  };
  capabilities: {
    bulk?: CapabilityBulk;
    meetings?: CapabilityMeetings;
    messages?: CapabilityMessages;
    rtc?: CapabilityRTC;
    vbc?: unknown;
    verify?: CapabilityVerify;
    voice?: CapabilityVoice;
  };
};
