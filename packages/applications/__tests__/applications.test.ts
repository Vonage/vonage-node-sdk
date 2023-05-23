import { Applications } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';

const getResults = async (
  generator: boolean,
  client: Applications,
  clientMethod: string,
  parameters: Array<unknown>,
): Promise<unknown | Array<unknown>> => {
  if (!generator) {
    return await client[clientMethod](...parameters);
  }

  const results = [];
  for await (const result of client[clientMethod](...parameters)) {
    results.push(result as never);
  }

  return results;
};

describe.each(testDataSets)('$label', ({ tests }) => {
  let client: Applications | null;
  let scope;

  beforeEach(function () {
    client = new Applications(
      new Auth({
        apiKey: 'foo',
        apiSecret: 'bar',
      }),
    );

    scope = nock(BASE_URL, {
      reqheaders: {
        authorization: (value) => value === 'Basic Zm9vOmJhcg==',
      },
    }).persist();
  });

  afterEach(function () {
    client = null;
    scope = null;
    nock.cleanAll();
  });

  const successTests = tests.filter(({ error }) => !error);
  const failureTests = tests.filter(({ error }) => !!error);

  test.each(successTests)(
    'Can $label using: $clientMethod',
    async ({
      requests,
      responses,
      clientMethod,
      parameters,
      expected,
      generator = false,
    }) => {
      requests.forEach((request, index) => {
        scope.intercept(...request).reply(...responses[index]);
      });

      const results = await getResults(
        generator,
        client as Applications,
        clientMethod,
        parameters,
      );

      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    },
  );

  if (failureTests.length < 1) {
    return;
  }

  test.each(failureTests)(
    'Will throw $label using: $clientMethod',
    async ({ request, response, clientMethod, parameters, error }) => {
      scope.intercept(...request).reply(...response);

      await expect(() => client[clientMethod](...parameters)).rejects.toThrow(
        error,
      );
      expect(nock.isDone()).toBeTruthy();
    },
  );
});
