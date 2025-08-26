import { MessageParamsImage } from '../../MessageParamsImage.js';
import { ViberActionParams } from './ViberActionParams.js';
import { ViberParams } from './ViberParams.js';

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
