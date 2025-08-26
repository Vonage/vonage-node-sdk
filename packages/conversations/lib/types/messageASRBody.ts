import { MessageChannelBody } from './messageChannelBody.js';

export type ASRResult = {
  /**
   * Word recognized
   */
  word: string;

  /**
   * Confidence of the word
   */
  confidence: number;
}

export type MessageASRBody = {
  /**
   * Channel Information
   */
  channel: MessageChannelBody;

  /**
   * ASR Result
   */
  asr: {
    /**
     * ASR Error
     */
    error: string;

    /**
     * ASR Id
     */
    asrId: string;

    /**
     * ASR Call Id
     */
    callId: string;

    /**
     * ASR Audio Format
     *
     * @remarks Present only when recording is done
     */
    format?: string;

    /**
     * ASR Start Time
     *
     * @remarks Present only when recording is done
     */
    startTime?: string;

    /**
     * ASR End Time
     *
     * @remarks Present only when recording is done
     */
    endTime?: string;

    /**
     * ASR File size
     *
     * @remarks Present only when recording is done
     */
    size?: number;

    /**
     * ASR Media Service UUID
     *
     * @remarks Present only when recording is done
     */
    mediaServiceUUID?: string;

    /**
     * ASR Timeout Reason
     *
     * @remarks Present only when recording is happening
     */
    timeoutReason?: string;

    /**
     * ASR Results
     *
     * @remarks Present only when recording is happening
     */
    result?: Array<ASRResult>;

  }
}
