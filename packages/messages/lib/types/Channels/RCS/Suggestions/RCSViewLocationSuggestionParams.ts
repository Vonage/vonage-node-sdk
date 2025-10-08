import { RCSSuggestionType } from '../../../../enums';
import { RCSSuggestionParams } from './RCSSuggestionParams';

export type RCSViewLocationSuggestionParams = RCSSuggestionParams & {
  type: RCSSuggestionType.VIEW_LOCATION;

  /**
   * The latitude of the location to view.
   */
  latitude: string;

  /**
   * The longitude of the location to view.
   */
  longitude: string;

  /**
  * A label to display on the location pin.
  */
  pinLabel: string;

  /**
  * A URL to open if the device is unable to display a map.
  */
  fallbackUrl?: string;
}
