import { MessageSIPDirectionBody } from './messageSIPDirectionBody';

/**
 * Standard SIP and RTC
 *
 * @remarks This is the same body for RTC and SIP
 */
export type MessageSIPHangupBody = {
  /**
   * Quality of the call
   */
  quality: {
    /**
     * The MOS score of the call
     */
    mosScore: number;

    /**
     * The percentage of the call that was not silence
     */
    qualityPercentage: number;

    /**
     * Least amount of jitter
     */
    jitterMinVar: number;

    /**
     * Most amount ofjitter
     */
    jitterMaxVar: number;

    /**
     * Average amount of jitter loss
     */
    jitterLossRate: number;

    /**
     * Average amount of jitter burst
     */
    jitterBurstRate: number;

    /**
     * Total number of packets that had flaws
     */
    flawTotal: number;

    /**
     * Total number of packets
     */
    packetCnt: number;

    /**
     * Total number of packets lost
     */
    packetLossPerc: number;
  }

  /**
   * Bandwidth of the call
   */
  bandwidth: {

    /**
     * Total number of bytes received
     */
    byteIn: number;

    /**
     * Total number of bytes sent
     */
    byteOut: number;
  }

  /**
   * The reason of the call hangup
   */
  reason: {
    /**
     * The reason of the call
     */
    text: string;

    /**
     * The SIP reason Code of the call
     */
    code: string;

    /**
     * The SIP code of the call
     */
    sipCode: string;
  }
} & MessageSIPDirectionBody;
