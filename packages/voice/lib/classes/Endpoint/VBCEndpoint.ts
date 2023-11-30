import { VBCEndpoint as VBCEndpointType } from '../../types/Endpoint/VBCEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This class is deprecated. Please update to use the VBCEndpointType type instead',
);

/**
 * Represents a VBC (Vonage Business Cloud) endpoint for making voice calls.
 * @deprecated This class is deprecated. Please update to use the VBCEndpointType type instead.
 */
export class VBCEndpoint implements VBCEndpointType {
  /**
   * The type of the endpoint, which is always 'vbc'.
   */
  type: 'vbc';

  /**
   * The VBC extension associated with this endpoint.
   *
   * @param {string} extension - The VBC extension for the VBC endpoint.
   */
  extension: string;

  /**
   * Create a new VBCEndpoint instance.
   *
   * @param {string} extension - The VBC extension for the VBC endpoint.
   */
  constructor(extension: string) {
    this.type = 'vbc';
    this.extension = extension;
  }
}
