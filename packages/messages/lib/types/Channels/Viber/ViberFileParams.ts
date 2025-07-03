import { MessageFileType } from '../../MessageFileType';
import { MessageParamsFile } from '../../MessageParamsFile';
import { ViberParams } from './ViberParams';

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
