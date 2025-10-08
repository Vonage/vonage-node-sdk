import { StatusType } from './status.js';
import { NetworkType } from '../enums/networkType.js';
/**
 * Represents the result of the current and original carrier insights.
 */
export type Carrier = {
  /**
   * The status of the insight call.
   */
  status: StatusType;

  /**
   * The full name of the original carrier associated with that phone number.
   */
  name?: string;

  /**
   * The type of network of the original carrier associated with that phone number.
   */
  networkType?: NetworkType;

  /**
   * The country that phone number is associated with. This is in ISO 3166-1 alpha-2 format.
   */
  countryCode?: string;

  /**
   * Mobile country codes (MCC) + Mobile network codes (MNC)
   */
  networkCode?: string;

};
