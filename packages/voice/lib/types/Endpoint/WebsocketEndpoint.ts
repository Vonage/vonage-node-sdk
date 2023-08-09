export type WebsocketEndpoint = {
  type: 'websocket';
  uri: string;
  contentType?: string;
  headers?: Record<string, unknown>;
};
