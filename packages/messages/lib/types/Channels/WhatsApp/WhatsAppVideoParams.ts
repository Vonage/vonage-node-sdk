import { MessageParamsVideo } from '../../MessageParamsVideo';
import { WhatsAppParams } from './WhatsAppParams';

/**
 * Represents a video message type for WhatsApp.
 *
 * @group WhatsApp
 * @category Parameters
 */
export type WhatsAppVideoParams = WhatsAppParams & MessageParamsVideo;
