import { SubAccounts } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';

describe.each(testDataSets)('$label', ({ tests }) => {
  let client;
  let scope;

  beforeEach(function () {
    client = new SubAccounts(
      new Auth({
        apiKey: '12345',
        apiSecret: 'ABCDE',
      })
    );
    scope = nock(BASE_URL, {
      reqheaders: {
        authorization: 'Basic MTIzNDU6QUJDREU=',
      },
    }).persist();
  });

  afterEach(function () {
    client = null;
    scope = null;
    nock.cleanAll();
  });

  const successTests = tests.filter(({ error }) => !error);

  test.each(successTests)(
    'Can $label using: $clientMethod',
    async ({ requests, responses, clientMethod, parameters, expected }) => {
      requests.forEach((request, index) => {
        scope.intercept(...request).reply(...responses[index]);
      });

      const results = await client[clientMethod](...parameters);

      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    }
  );
});
