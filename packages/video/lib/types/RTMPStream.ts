/**
 * Interface representing an RTMP stream configuration.
 */
export type RTMPStream = {
  /**
   * Optional unique identifier for the RTMP stream.
   */
  id?: string;

  /**
   * The RTMP server URL to which the stream will be sent.
   */
  serverUrl: string;

  /**
   * The name of the stream on the RTMP server.
   */
  streamName: string;
}
