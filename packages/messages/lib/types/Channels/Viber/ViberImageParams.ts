import { MessageParamsImage } from '../../MessageParamsImage';
import { ViberActionParams } from './ViberActionParams';
import { ViberParams } from './ViberParams';

/**
 * Represents parameters for sending an image via Viber.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberImageParams = {
  /**
   * The Viber action parameters for sending the image.
   */
  viberService: ViberActionParams;
} & ViberParams & MessageParamsImage;
