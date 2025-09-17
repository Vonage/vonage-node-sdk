import { RCSViewLocationSuggestionParams } from '../../../types';
import { RCSAbstractSuggestion } from './RCSAbstractSuggestion';
import { RCSSuggestionType } from '../../../enums';

export class RCSViewLocationSuggestion
  extends RCSAbstractSuggestion
  implements RCSViewLocationSuggestionParams {

  public type: RCSSuggestionType.VIEW_LOCATION = RCSSuggestionType.VIEW_LOCATION;

  /**
   * The latitude of the location to view.
   */
  public latitude: string;

  /**
   * The longitude of the location to view.
   */
  public longitude: string;

  /**
  * A label to display on the location pin.
  */
  public pinLabel: string;

  /**
  * A URL to open if the device is unable to display a map.
  */
  public fallbackUrl?: string;

  constructor(params: Omit<RCSViewLocationSuggestionParams, 'type'>) {
    super(params);

    this.latitude = params.latitude;
    this.longitude = params.longitude;
    this.pinLabel = params.pinLabel;
    this.fallbackUrl = params.fallbackUrl;
  }
}
