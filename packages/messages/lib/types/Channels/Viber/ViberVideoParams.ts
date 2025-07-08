import { MessageParamsVideo } from '../../MessageParamsVideo';
import { ViberActionParams } from './ViberActionParams';
import { ViberParams } from './ViberParams';

/**
 * Represents parameters for sending a video message via Viber with action buttons.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberVideoParams = {
  /**
   * The Viber service, action parameters, and video message details.
   */
  viberService: {
    /**
     * The duration of the video in seconds.
     */
    duration: string;
    /**
     * The file size of the video in MB.
     */
    fileSize: string;
  } & ViberActionParams;

  /**
   * The details of the video message to be sent.
   */
  video: {
    /**
     * The URL of the video attachment.
     */
    url: string;

    /**
     * The caption to be displayed with the video.
     */
    caption?: string;

    /**
     * The URL of the thumbnail image to be displayed with the video.
     */
    thumbUrl?: string;
  };
} & ViberParams & MessageParamsVideo;
