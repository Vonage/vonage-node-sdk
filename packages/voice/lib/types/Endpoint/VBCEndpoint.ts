/**
 * Represents a Vonage Business Cloud (VBC) endpoint, which can be used as a call destination.
 */
export type VBCEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'vbc' for Vonage Business Cloud.
   */
  type: 'vbc';

  /**
   * The extension associated with the VBC endpoint. The call will be directed to this extension.
   */
  extension: string;
};
