// TS gets a but overloaded and will not address the parameters correctly
// so we need to define these types here to trick it
type ClientMethod = (...args: unknown[]) => Promise<unknown>;
type GeneratorClientMethod = (...args: unknown[]) => AsyncGenerator<unknown>;

/**
 * A helper function to get the results from a client method
 *
 * Since some functions are generators and some are not, we need to handle them differently.
 * This function will call the client method and return the results.
 *
 * @template T
 * @param {boolean} generator - Whether the client method is a generator
 * @param {T} client - The client to call the method on
 * @param {string} clientMethod - The method to call on the clientMethod
 * @param {Array<unknown>} args - The arguments to pass to the client method
 *
 * @return {Promise<unknown | Array<unknown>>} The results of the client method
 */
export const getResults = async <T>(
  generator: boolean,
  client: T,
  clientMethod: keyof T,
  args: Array<unknown> = [],
): Promise<unknown | Array<unknown>> => {
  if (!client) {
    throw new Error('Client is not defined');
  }

  if (client[clientMethod] === undefined) {
    throw new Error(
      `Method ${client.constructor.name}::${String(
        clientMethod,
      )} is not defined`,
    );
  }

  if (typeof client[clientMethod] !== 'function') {
    throw new Error(
      `Method ${client.constructor.name}::${String(
        clientMethod,
      )} is not a function`,
    );
  }

  if (!generator) {
    return await (client[clientMethod] as ClientMethod)(...args);
  }

  const results: Array<unknown> = [];

  for await (const result of (client[clientMethod] as GeneratorClientMethod)(
    ...args,
  )) {
    results.push(result);
  }
  return results;
};
