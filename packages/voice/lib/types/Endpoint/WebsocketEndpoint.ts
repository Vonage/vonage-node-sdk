export type WebsocketEndpoint = {
  type: 'websocket';
  uri: string;
  contentType?: string;
  headers?: Array<Record<string, unknown>>;
};
