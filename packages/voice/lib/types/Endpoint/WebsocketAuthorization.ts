/**
 * Authorization configuration for the WebSocket opening handshake.
 */
export type WebsocketAuthorization = {
  /**
   * Defines the authorization mode.
   * - `vonage`: The Voice API includes the same JWT used for signed webhooks in
   *   the Authorization header (`Bearer {JWT}`).
   * - `custom`: A developer-supplied Authorization header value is sent verbatim.
   */
  type: 'vonage' | 'custom';

  /**
   * Required only when `type` is `"custom"`. The raw header value to include,
   * e.g. `"Bearer abc123"` or `"ApiKey X9Z..."`. Ignored when `type` is
   * `"vonage"`.
   */
  value?: string;
};
