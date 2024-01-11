/**
 * Enum representing different bitrate options for audio in a WebSocket configuration.
 */
export enum WebsocketBitrate {
  /**
   * Audio bitrate at 8000 samples per second.
   */
  RATE_8000 = 'audio/l16;rate=8000',

  /**
   * Audio bitrate at 16000 samples per second.
   */
  RATE_16000 = 'audio/l16;rate=16000',
}
