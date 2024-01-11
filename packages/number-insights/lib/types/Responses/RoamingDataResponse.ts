/**
 * Type representing information about the roaming status of a phone number.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type RoamingDataResponse = {
  status: string;
  roaming_country_code: string;
  roaming_network_code: string;
  roaming_network_name: string;
};
