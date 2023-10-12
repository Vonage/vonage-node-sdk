import { CallEndpoint, PSTNEndpoint } from './Endpoint';

/**
 * Represents common fields for defining an outbound call, including the caller (from) and recipient (to) endpoints.
 */
export type CommonCallFields = {
  /**
   * The caller's endpoint information, excluding DTMF answer details.
   */
  from: Omit<PSTNEndpoint, 'dtmfAnswer'>;

  /**
   * The recipient's endpoint information for the call.
   */
  to: CallEndpoint;
};
