import { MessageParamsFile } from '../../MessageParamsFile';
import { ViberService } from './ViberService';

/**
 * Represents parameters for sending a file via Viber.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberFileParams = {
  /**
   * The Viber service details for sending the file.
   */
  viberService: ViberService;
} & MessageParamsFile;
