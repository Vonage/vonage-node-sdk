import { SMS } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';
import testSignatureDataSets from './__dataSets__/signature';

describe.each(testDataSets)('$label', ({ tests }) => {
  let client;
  let scope;

  beforeEach(function () {
    client = new SMS(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }));
    scope = nock(BASE_URL).persist();
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
    async ({ request, response, clientMethod, expected, parameters }) => {
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

      await expect(() => client[clientMethod](...parameters)).rejects.toThrow(
        error,
      );
      expect(nock.isDone()).toBeTruthy();
    },
  );

  test.each(testSignatureDataSets)(
    'Testing signature using $algorithm',
    async ({ expected, params, algorithm, signature, signatureSecret }) => {
      expect(
        client.verifySignature(signature, params, signatureSecret, algorithm),
      ).toEqual(expected);
    },
  );
});
