import { MessageFileType } from '../../MessageFileType.js';
import { MessageParamsFile } from '../../MessageParamsFile.js';
import { ViberParams } from './ViberParams.js';

/**
 * Represents parameters for sending a file via Viber.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberFileParams = {
  file: {
    /**
     * Additional text to accompany the file.
     */
    caption?: string
  } & MessageFileType;
} & ViberParams & MessageParamsFile;
