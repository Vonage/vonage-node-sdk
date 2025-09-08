import { MessageParamsFile } from '../../MessageParamsFile.js';
import { MessageFileType } from '../../MessageFileType.js';
import { MMSParams } from './MMSParams.js';

/**
 * Represents parameters for sending a file via MMS.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSFileParams = {
  file: {
    /**
     * The name and extension of the file.
     */
    url: string;

    caption: string
  } & MessageFileType;
} & MMSParams & MessageParamsFile;
