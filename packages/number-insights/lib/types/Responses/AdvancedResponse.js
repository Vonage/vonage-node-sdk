/**
 * Type representing an advanced response from a phone number lookup operation.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} AdvancedResponse
 * @property {RoamingDataResponse | string} roaming - Information about the roaming status of the phone number.
 * @property {LookupOutcome} lookup_outcome - The outcome of the lookup operation, represented by a `LookupOutcome` enum value.
 * @property {string} lookup_outcome_message - A message describing the outcome of the lookup operation.
 * @property {ValidNumber} valid_number - The validity status of the phone number, represented by a `ValidNumber` enum value.
 * @property {Reachable} reachable - The reachability status of the phone number, represented by a `Reachable` enum value.
 * @property {RealTimeDataResponse} real_time_data - Real-time data related to the phone number.
 */

export {};
