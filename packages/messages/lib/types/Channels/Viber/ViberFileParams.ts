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

  file: {
    /**
     * The URL for the file attachment or the path for the location of the file
     * attachement. If name is included, can just be the path. If name is not
     * included, must include the filename and extension.
     */
    url: string;

    /**
     * The name and extension of the file.
     */
    name?: string;
  };
} & Omit<MessageParamsFile, 'file'>;
