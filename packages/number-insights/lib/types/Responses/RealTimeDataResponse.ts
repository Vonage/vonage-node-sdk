/**
 * Type representing real-time data related to a phone number.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type RealTimeDataResponse = {
  active_status: string;
  handset_status: string;
};
