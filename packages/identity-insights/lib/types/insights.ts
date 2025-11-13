import { Format } from './format.js';
import { SimSwap } from './simSwap.js';
import { Carrier } from './carrier.js';
import { SubscriberMatch } from './subscriberMatch.js';
import { LocationVerification } from './locationVerification.js';
import { Roaming } from './roaming.js';
import { Reachability } from './reachability.js';

/**
 * Represents the insights object
 *
 */
export type Insights = {

  /**
   * The result of the 'format' insight operation (optional).
   */
  format?: Format;

  /**
   * The result of the 'sim_swap' insight operation (optional).
   */
  simSwap?: SimSwap;

  /**
   * The result of the 'original_carrier' insight operation (optional).
   */
  originalCarrier?: Carrier;

  /**
   * The result of the 'format' insight operation (optional).
   */
  currentCarrier?: Carrier;

  /**
   * The result of the 'subscriber_match' insight operation (optional).
   */
  subscriberMatch?: SubscriberMatch;

  /**
   * The result of the 'location_verification' insight operation (optional).
   */
  locationVerification?: LocationVerification;

  /**
   * The result of the 'roaming' insight operation (optional).
   */
  roaming?: Roaming;

  /**
   * The result of the 'reachability' insight operation (optional).
   */
  reachability?: Reachability;

};
