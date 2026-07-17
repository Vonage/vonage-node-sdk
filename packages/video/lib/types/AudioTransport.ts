import { AudioTransportType } from '../enums/index.js';

/**
 * Configures how audio is serialized on the WebSocket wire for an Audio Connector connection.
 * By default, audio is sent as raw binary PCM 16-bit frames.
 */
export type AudioTransport = {
  /**
   * The wire serialization format. Use `AudioTransportType.BINARY` (default) for raw PCM16, or
   * `AudioTransportType.JSON` to wrap each frame in a JSON envelope.
   */
  transport?: AudioTransportType;

  /**
   * Required when `transport` is `AudioTransportType.JSON`. Must be set to `'base64'`.
   */
  encoding?: 'base64';

  /**
   * The JSON key used for the outbound audio data. Defaults to `'audio'`.
   * Only relevant when `transport` is `AudioTransportType.JSON`.
   */
  audioField?: string;

  /**
   * The JSON key used for inbound audio data when `bidirectional` is enabled.
   * Defaults to the same value as `audioField`.
   * Only relevant when `transport` is `AudioTransportType.JSON`.
   */
  receiveAudioField?: string;

  /**
   * An object of extra key-value pairs included in every outbound JSON audio message.
   * Only relevant when `transport` is `AudioTransportType.JSON`.
   */
  staticFields?: Record<string, unknown>;
};
