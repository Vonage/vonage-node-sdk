import { NetworkAuthParameters, NetworkClient } from '../lib';
import nock from 'nock';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__';
import { SDKTestCase, TestTuple, getResults } from '../../../testHelpers';

describe.each<TestTuple>(testDataSets)('$label', ({tests}) => {
  let client;
  let scope;

  beforeEach(function () {
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

  test.each<SDKTestCase>(tests)(
    'Can $label using: $clientMethod',
    async ({
      generator,
      requests,
      responses,
      client,
      clientMethod,
      parameters,
      expected,
    }) => {

      requests.forEach((request, index) => {
        scope.intercept(...request).reply(...responses[index]);
      });

      const results = await getResults(
        generator,
        client,
        clientMethod,
        parameters,
      );

      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();

      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    },
  );
});
