import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSViewLocationSuggestion extends
RCSAbstractSuggestion
{

  type = RCSSuggestionType.VIEW_LOCATION;

  /**
   * The latitude of the location to view.
   */
  latitude;

  /**
   * The longitude of the location to view.
   */
  longitude;

  /**
  * A label to display on the location pin.
  */
  pinLabel;

  /**
  * A URL to open if the device is unable to display a map.
  */
  fallbackUrl;

  constructor(params) {
    super(params);

    this.latitude = params.latitude;
    this.longitude = params.longitude;
    this.pinLabel = params.pinLabel;
    this.fallbackUrl = params.fallbackUrl;
  }
}
