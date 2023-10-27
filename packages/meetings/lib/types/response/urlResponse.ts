import { LogoType } from '../../enums/index';

/**
 * Represents a response containing URL and associated fields for an image.
 *
 * @remarks
 * Uploading a theme requires fetching a singed URL form AWS. The SDK handles
 * this process for you so there should be no need to use the type. It is included
 * for convenience.
 */
export type UrlResponse = {
  /**
   * The URL for the image.
   */
  url: string;

  /**
   * Fields related to the image URL.
   */
  fields: {
    /**
     * The content type of the image, typically 'image/png'.
     */
    'Content-Type': 'image/png';

    /**
     * The key associated with the image.
     */
    key: string;

    /**
     * The logo type of the image.
     */
    logoType: LogoType;

    /**
     * The bucket where the image is stored.
     */
    bucket: string;

    /**
     * The AWS S3 algorithm used for access.
     */
    'X-Amz-Algorithm': string;

    /**
     * The AWS S3 credential for access.
     */
    'X-Amz-Credential': string;

    /**
     * The date associated with the image access.
     */
    'X-Amz-Date': string;

    /**
     * The security token for AWS access.
     */
    'X-Amz-Security-Token': string;

    /**
     * The policy associated with image access.
     */
    Policy: string;

    /**
     * The AWS S3 signature for image access.
     */
    'X-Amz-Signature': string;
  };
};
