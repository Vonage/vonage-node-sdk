import { NetworkType } from '../../enums/index.js';

/**
 * Type representing carrier information.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type CarrierInfoResponse = {
  /** The network code associated with the carrier. */
  network_code: string;

  /** The full name of the carrier. */
  name: string;

  /** The country in which the carrier operates. */
  country: string;

  /** The type of network associated with the carrier. */
  network_type: NetworkType;
};
