import {
  LookupOutcome,
  Reachable,
  ValidNumber,
} from '../../enums';

import { StandardResponse } from './StandardResponse';
import { RoamingDataResponse } from './RoamingDataResponse';
import { RealTimeDataResponse } from './RealTimeDataResponse';

/**
 * Type representing an advanced response from a phone number lookup operation.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type AdvancedResponse = StandardResponse & {
  /**
   * Information about the roaming status of the phone number.
   */
  roaming: RoamingDataResponse | string;

  /**
   * The outcome of the lookup operation, represented by a `LookupOutcome` enum value.
   */
  lookup_outcome: LookupOutcome;

  /**
   * A message describing the outcome of the lookup operation.
   */
  lookup_outcome_message: string;

  /**
   * The validity status of the phone number, represented by a `ValidNumber` enum value.
   */
  valid_number: ValidNumber;

  /**
   * The reachability status of the phone number, represented by a `Reachable` enum value.
   */
  reachable: Reachable;

  /**
   * Real-time data related to the phone number.
   */
  real_time_data: RealTimeDataResponse;
};
