import { CallerType } from '../../enums';

/**
 * Type representing the identity of a caller.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CallerIdentityResponse = {
  /** The type of the caller, either "business," "consumer," or "unknown." */
  caller_type: CallerType;

  /** The caller's name. */
  caller_name: string;

  /** The caller's first name. */
  first_name: string;

  /** The caller's last name. */
  last_name: string;
};
