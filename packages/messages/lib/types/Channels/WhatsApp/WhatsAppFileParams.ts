import { MessageFileType } from '../../MessageFileType';
import { MessageParamsFile } from '../../MessageParamsFile';
import { WhatsAppParams } from './WhatsAppParams';

/**
 * Represents a WhatsApp file message type.
 *
 * @group WhatsApp
 */
export type WhatsAppFileParams = {
  /**
   * The file attachment content.
   */
  file: {
    /**
     * An optional caption to accompany the file.
     */
    caption?: string;

    /**
     * Optional parameter that specifies the name of the file being sent. If not
     * included, the value for caption will be used as the file name. If neither
     * name or caption are included, the file name will be parsed from the url.
     */
    name?: string;
  } & MessageFileType;
} & WhatsAppParams & MessageParamsFile;
