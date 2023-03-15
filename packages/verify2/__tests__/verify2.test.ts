import { Verify2 } from '../lib/index';
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
    client = new Verify2(
      new Auth({
        privateKey: key,
        applicationId: 'my-application',
      }),
    );
    scope = nock(BASE_URL, {
      reqheaders: {
        authorization: (value) => value.startsWith('Bearer '),
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
    async ({ request, response, clientMethod, parameters, expected }) => {
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
