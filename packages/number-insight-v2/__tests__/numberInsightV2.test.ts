import { NumberInsightV2 } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';
import { readFileSync } from 'fs';

const key = readFileSync(`${__dirname}/private.test.key`).toString();

describe.each(testDataSets)('$label', ({ tests }) => {
  let client;
  let scope;

  beforeEach(function () {
    client = new NumberInsightV2(
      new Auth({
        apiKey: 'abcd',
        apiSecret: '1234',
      })
    );

    scope = nock(BASE_URL, {
      reqheaders: {
        authorization: (value) => value === 'Basic YWJjZDoxMjM0',
      },
    }).persist();
  });

  afterEach(function () {
    client = null;
    scope = null;
    nock.cleanAll();
  });

  test.each(tests)(
    'Can $label using: $clientMethod',
    async ({ requests, responses, clientMethod, parameters, expected }) => {
      requests.forEach((request, index) => {
        scope.intercept(...request).reply(...responses[index]);
      });

      const result = await client[clientMethod](...parameters);

      expect(result).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    }
  );
});
