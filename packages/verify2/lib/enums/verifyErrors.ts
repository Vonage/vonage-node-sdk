import { GenericErrors } from '@vonage/server-client';

/**
 * Type representing possible errors related to verification requests.
 */
export type VerifyErrors = {
  /**
   * Indicates that the verification request has expired.
   */
  EXPIRED: 'expired',

  /**
   * Indicates a conflict error in the verification request.
   */
  CONFLICT: 'conflict',
} & GenericErrors;
