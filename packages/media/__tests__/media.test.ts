import { Media } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';
import { readFileSync } from 'fs';

const key = readFileSync(`${__dirname}/private.test.key`).toString();

const getResults = async (
  generator: boolean,
  client: Media,
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
  let client: Media | null;
  let scope: nock.Scope;

  beforeEach(function () {
    client = new Media(
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

  test.each(tests as any[])(
    'Can $label using: $clientMethod',
    async ({
      requests,
      responses,
      clientMethod,
      parameters,
      expected,
      generator = false,
    }) => {
      requests.forEach((request: Array<string>, index: number) => {
        scope.intercept(
          request[0],
          request[1],
          request[2],
        ).reply(...responses[index]);
      });

      const results = await getResults(
        generator,
        client as Media,
        clientMethod,
        parameters,
      );

      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    },
  );
});
