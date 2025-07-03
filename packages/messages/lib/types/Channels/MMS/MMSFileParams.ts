import { MessageParamsFile } from '../../MessageParamsFile';
import { MessageFileType } from '../../MessageFileType';
import { MMSParams } from './MMSParams';

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
