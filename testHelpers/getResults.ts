import { Client } from '../packages/server-client/lib';
import { NetworkClient } from '../packages/network-client/lib';

type TestClient = Client & NetworkClient;

type ClientMethod = (...args: unknown[]) => Promise<unknown>;
type GeneratorClientMethod = (...args: unknown[]) => AsyncGenerator<unknown>;

export const getResults = async (
  generator: boolean,
  client: TestClient,
  clientMethod: keyof Client,
  args: [unknown, unknown, unknown],
): Promise<unknown | Array<unknown>> => {
  if (!client) {
    throw new Error('Client is not defined');
  }

  if (client[clientMethod] === undefined) {
    throw new Error(`Method ${client.constructor.name}::${clientMethod} is not defined`);
  }
  if (typeof client[clientMethod] !== 'function') {
    throw new Error(`Method ${client.constructor.name}::${clientMethod} is not a function`);
  }

  if (!generator) {
    // eslint-disable-next-line
    return await (client[clientMethod] as ClientMethod)(...args);
  }

  const results: Array<unknown> = [];
  // eslint-disable-next-line
  for await (const result of (client[clientMethod] as GeneratorClientMethod)(...args)){
    results.push(result);
  }
  return results;
};
