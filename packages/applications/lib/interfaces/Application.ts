import { MessagesCapabilities } from './MessagesCapabilities';
import { RTCCapabilities } from './RTCCapabilities';
import { VoiceCapabilities } from './VoiceCapabilities';

export interface Application {
  id?: string;
  name: string;
  capabilities?: {
    voice?: VoiceCapabilities;
    messages?: MessagesCapabilities;
    rtc?: RTCCapabilities;
    vbc?: {};
    video?: {
      embedded: boolean;
    };
  };
  privacy?: {
    improve_ai: boolean;
  };
  keys?: {
    public_key?: string;
    private_key?: string;
  };
}
