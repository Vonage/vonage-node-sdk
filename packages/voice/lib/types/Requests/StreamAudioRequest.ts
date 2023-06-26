import { StreamAudioParameters } from '../Parameters/StreamAudioParameters';

export type StreamAudioRequest = {
  stream_url: Array<string>;
} & Omit<StreamAudioParameters, 'streamUrl'>;
