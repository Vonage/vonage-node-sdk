import { MessageParamsContent } from '../../MessageParamsContent.js';
import { MMSParams } from './MMSParams.js';

/**
 * Represents parameters for sending a content message via MMS with action buttons.
 *
 * @group MMS
 * @category Parameters
 */
export type MMSContentParams = MMSParams & MessageParamsContent;


