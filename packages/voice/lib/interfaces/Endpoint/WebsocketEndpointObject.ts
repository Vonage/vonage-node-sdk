import { WebsocketEndpoint } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(
  // eslint-disable-next-line max-len
  'This interface is deprecated. Please update to use the WebsocketEndpoint type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the WebsocketEndpoint type
 */
export type WebsocketEndpointObject = WebsocketEndpoint;
