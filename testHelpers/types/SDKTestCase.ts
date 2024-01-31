import { TestResponse } from './TestResponse';
import { TestRequest } from './TestRequest';
import { Client } from '../../packages/server-client/lib';
import { NetworkClient } from '../../packages/network-client/lib';

export type SDKTestCase = {
  label: string,
  responses: TestResponse[],
  requests: TestRequest[],
  client: Client | NetworkClient,
  clientMethod: string,
  parameters: unknown[],
  generator: boolean,
  error: boolean,
  expected: unknown,
}
