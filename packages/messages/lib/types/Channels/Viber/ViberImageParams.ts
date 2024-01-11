import { MessageParamsImage } from '../../MessageParamsImage';
import { ViberActionParams } from './ViberActionParams';

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
} & MessageParamsImage;
