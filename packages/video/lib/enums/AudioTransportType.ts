/**
 * Enum representing how audio is serialized on the WebSocket wire.
 */
export enum AudioTransportType {
  /**
   * Raw binary PCM 16-bit frames (default).
   */
  BINARY = 'binary',

  /**
   * JSON-encoded audio frames. When selected, `encoding` must be set to `'base64'`.
   */
  JSON = 'json',
}
