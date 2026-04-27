/**
 * Represents a WebSocket endpoint, which can be used as a call destination.
 *
 * @typedef {Object} WebsocketEndpoint
 * @property {'websocket'} type - Specifies the type of endpoint, which is 'websocket' for WebSocket.
 * @property {string} uri - The URI (Uniform Resource Identifier) of the WebSocket endpoint.
 * @property {WebsocketBitrate | string} [contentType] - An optional content type to specify the audio format sent to the WebSocket endpoint.
 * @property {Record} [headers] - Optional headers to include when connecting to the WebSocket endpoint.
 * @property {WebsocketAuthorization} [authorization] - Optional configuration defining how the Authorization HTTP header is set in the WebSocket opening handshake.
 */

export {};
