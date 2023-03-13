import nock from 'nock';
import { getScope, getClient, AuthType } from './common';
import testDataSets from './__dataSets__/index';

describe.each(testDataSets)('$label', ({ tests }) => {
  afterEach(function () {
    nock.cleanAll();
  });

  const successTests = tests
    .filter(({ error }) => !error)
    .map((test) => [
      // {
      //   ...test,
      //   authType: AuthType.SIG,
      //   request: [
      //     test.request[0],
      //     test.request[1],
      //     {
      //       ...test.request[2] as object,
      //       api_key: '12345',
      //       sig: sigAuth.createSignatureHash(test.request[2]),
      //     },
      //   ],
      // },
      {
        ...test,
        authType: AuthType.QUERY,
        request: [
          test.request[0],
          test.request[1],
          {
            ...(test.request[2] as object),
            api_key: '12345',
            api_secret: 'ABCDE',
          },
        ],
      },
      {
        ...test,
        authType: AuthType.JWT,
      },
    ])
    .flat();

  const failureTests = tests.filter(({ error }) => !!error);

  test.each(successTests)(
    'Can $label using method: [$clientMethod] with auth: [$authType]',
    async ({
      request,
      response,
      clientMethod,
      parameters,
      expected,
      authType,
    }) => {
      const scope = getScope(authType);
      const client = getClient(authType);
      // request[2] = await request[2]?.sig;
      scope.intercept(...request).reply(...response);

      const results = await client[clientMethod](...parameters);
      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    },
  );

  if (failureTests.length < 1) {
    return;
  }

  test.each(failureTests)(
    'Will throw $label for method: $clientMethod',
    async ({
      request,
      response,
      clientMethod,
      parameters,
      error,
      authType,
    }) => {
      const scope = getScope(authType);
      const client = getClient(authType);
      request[2] = await request[2]?.sig;
      scope.intercept(...request).reply(...response);

      await expect(() =>
        client[clientMethod](...parameters),
      ).rejects.toThrow(error);
      expect(nock.isDone()).toBeTruthy();
    },
  );
});
