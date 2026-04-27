/**
 * Authorization configuration for the WebSocket opening handshake.
 *
 * @typedef {Object} WebsocketAuthorization
 * @property {'vonage' | 'custom'} type - Defines the authorization mode. - `vonage`: The Voice API includes the same JWT used for signed webhooks in the Authorization header (`Bearer {JWT}`). - `custom`: A developer-supplied Authorization header value is sent verbatim.
 * @property {string} [value] - Required only when `type` is `"custom"`. The raw header value to include, e.g. `"Bearer abc123"` or `"ApiKey X9Z..."`. Ignored when `type` is `"vonage"`.
 */

export {};
