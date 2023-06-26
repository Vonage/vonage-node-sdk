export type SIPEndpoint = {
  type: 'sip';
  uri: string;
  headers?: Array<Record<string, unknown>>;
};
