/**
 * Represents a Vonage Business Cloud (VBC) endpoint, which can be used as a call destination.
 */
export type VBCEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'vbc' for Vonage Business Cloud.
   */
  type: 'vbc';

  /**
   * An optional extension associated with the VBC endpoint. If provided, the call will be directed to this extension.
   */
  extension?: string;
};
