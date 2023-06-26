import { CallEndpoint, PSTNEndpoint } from './Endpoint';

export type CommonCallFields = {
  from: Omit<PSTNEndpoint, 'dtmfAnswer'>;
  to: CallEndpoint;
};
