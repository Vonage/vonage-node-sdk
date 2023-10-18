import nock from 'nock';
import { Client, AuthenticationType } from '../lib/index';
import { requestTests, transfomTests } from './__dataSets__/index';
import { getScope, getClient, BASE_URL, API_SECRET, API_KEY } from './common';
import { urlToHttpOptions } from 'url';

describe.each(transfomTests)('$label', ({ tests }) => {
  test.each(tests)(
    'Can $label [using $transformFn]',
    async ({ transformFn, original, parameters, expected }) => {
      expect(Client.transformers[transformFn]).toBeDefined();
      const results = Client.transformers[transformFn](
        original,
        ...parameters,
      );

      expect(results).toEqual(expected);
    },
  );
});

describe.each(requestTests)('$label', ({ tests }) => {
  afterEach(() => {
    nock.cleanAll();
  });

  const successTests = tests
    .filter(({ error }) => !error)
    .map((test) => {
      const request = test.request;
      // Add on query testing
      const url = new URL(`${BASE_URL}${request[0]}`);
      url.searchParams.append('api_key', API_KEY);
      url.searchParams.append('api_secret', API_SECRET);

      const keyTest = {
        ...test,
        request: [
          ...request.slice(0, 2),
          {
            ...request[2],
            api_key: API_KEY,
            api_secret: API_SECRET,
          },
        ],
        authType: AuthenticationType.KEY_SECRET,
      };

      if (test.form && request[2]) {
        const params = new URLSearchParams(request[2]);
        request[2] = params.toString();

        const keyParams = new URLSearchParams(keyTest.request[2]);
        keyTest.request[2] = keyParams.toString();
      }

      const bodyMethods = ['PUT', 'POST', 'PATCH'];
      const method = request[1];

      return [
        {
          ...test,
          authType: AuthenticationType.BASIC,
        },
        {
          ...test,
          authType: AuthenticationType.JWT,
        },
        {
          ...test,
          request: [
            `${url.pathname}${url.search}`,
            ...request.slice(1),
          ],
          authType: AuthenticationType.QUERY_KEY_SECRET,
        },
        bodyMethods.includes(method) ? keyTest : null,
      ].filter((value) => value);
    })
    .flat();

  const failureTests = tests.filter(({ error }) => !!error);

  test.each(successTests)(
    'Can $label with $clientMethod using $authType auth',
    async ({
      request,
      response,
      clientMethod,
      expected,
      parameters,
      authType = AuthenticationType.BASIC,
    }) => {
      const scope = getScope(authType);
      const client = getClient(authType);
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
    'Will throw $label using: $clientMethod',
    async ({ request, response, clientMethod, parameters, error }) => {
      scope.intercept(...request).reply(...response);

      await expect(() =>
        client[clientMethod](...parameters),
      ).rejects.toThrow(error);
      expect(nock.isDone()).toBeTruthy();
    },
  );
});
