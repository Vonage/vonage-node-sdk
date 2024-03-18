import { MessageParams } from '../../MessageParams';
import { MessageFileType } from '../../MessageFileType';

/**
 * Represents parameters for sending a file via Viber.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberFileParams = {
  file: {
    /**
     * The name and extension of the file.
     */
    name?: string;
  } & MessageFileType;
} & MessageParams;
