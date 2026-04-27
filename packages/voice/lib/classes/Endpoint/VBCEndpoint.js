import debug from 'debug';

debug('@vonage/voice')(

  'This class is deprecated. Please update to use the VBCEndpointType type instead'
);

/**
 * Represents a VBC (Vonage Business Cloud) endpoint for making voice calls.
 * @deprecated This class is deprecated. Please update to use the VBCEndpointType type instead.
 */
export class VBCEndpoint {
  /**
   * The type of the endpoint, which is always 'vbc'.
   */
  type;

  /**
   * The VBC extension associated with this endpoint.
   *
   * @param {string} extension - The VBC extension for the VBC endpoint.
   */
  extension;

  /**
   * Create a new VBCEndpoint instance.
   *
   * @param {string} extension - The VBC extension for the VBC endpoint.
   */
  constructor(extension) {
    this.type = 'vbc';
    this.extension = extension;
  }
}
