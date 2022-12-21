import nock from 'nock';
import { Auth } from '@vonage/auth';
import { Numbers } from '../lib/index';
import dataSet from './__dataSets__/index';

describe.each(dataSet)('$label', ({ tests }) => {
  let client: Numbers;

  beforeEach(function () {
    client = new Numbers(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }));
  });

  afterEach(function () {
    client = null;
    nock.cleanAll();
  });

  const succesfulTests = tests.filter((test) => !test?.exception);
  const exceptionTests = tests.filter((test) => test?.exception);

  test.each(succesfulTests)(
    'Can $label',
    async ({ request, parameters, clientMethod, expected }) => {
      const { url, intercept, reply } = request;

      const scope = nock(url)
        .intercept(...intercept)
        .reply(...reply);

      const results = await client[clientMethod](...parameters);
      expect(results).toEqual(expected);
      expect(scope.isDone()).toBeTruthy();
    },
  );

  if (exceptionTests.length < 1) {
    return;
  }

  test.each(exceptionTests)(
    'Throws exception $label',
    async ({ request, parameters, clientMethod, exception }) => {
      const { url, intercept, reply } = request;

      const scope = nock(url)
        .intercept(...intercept)
        .reply(...reply);

      await expect(() =>
        client[clientMethod](...parameters),
      ).rejects.toThrow(exception);
      expect(scope.isDone()).toBeTruthy();
    },
  );
});
