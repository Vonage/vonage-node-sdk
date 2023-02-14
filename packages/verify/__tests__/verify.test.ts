import { PSD2, Verification, Verify } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';

describe.each(testDataSets)('$label', ({ tests }) => {
  let client;
  let scope;

  beforeEach(function () {
    client = new Verify(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }));
    scope = nock(BASE_URL).persist();
  });

  afterEach(function () {
    client = null;
    scope = null;
    nock.cleanAll();
  });

  test.each(tests)(
    'Can $label using: $clientMethod',
    async ({ request, response, clientMethod, parameters, expected }) => {
      scope.intercept(...request).reply(...response);

      const results = await client[clientMethod](...parameters);
      expect(results).toEqual(expected);
    },
  );
});
