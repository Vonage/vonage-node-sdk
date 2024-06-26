import { ImportFileResponse, ProactiveConnect } from '../lib';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__';
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { rm } from 'fs/promises';

const CSV_DIR = `${process.cwd()}/path`;

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  keyAuth,
  validateBearerAuth,
  testPrivateKey,
} from '../../../testHelpers';

const applicationsTest = testDataSets.map((dataSet): TestTuple<ProactiveConnect> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<ProactiveConnect> => {
      return {
        label: test.label,
        baseUrl: 'https://api-eu.vonage.com',
        reqHeaders: {
          authorization: validateBearerAuth,
        },
        requests: test.requests as TestRequest[],
        responses: test.responses as TestResponse[],
        client: new ProactiveConnect(keyAuth),
        clientMethod: test.clientMethod as keyof ProactiveConnect,
        parameters: test.parameters,
        generator: test.generator || false,
        error: test.error || false,
        expected: test.expected,
      };
    }),
  };
});

VonageTest(applicationsTest);

describe('File tests', () => {
  let client: ProactiveConnect;
  let scope: nock.Scope;

  beforeEach(() => {
    if (!existsSync(CSV_DIR)) {
      mkdirSync(CSV_DIR);
    }
    writeFileSync(`${CSV_DIR}/upload-file.csv`, 'fizz,buzz\nfoo,bar');
    client = new ProactiveConnect(
      new Auth({
        privateKey: testPrivateKey,
        applicationId: 'my-application',
      }),
    );
    scope = nock(BASE_URL, {
      reqheaders: {
        authorization: (value) => value.startsWith('Bearer '),
      },
    }).persist();
  });

  afterEach(async () => {
    nock.cleanAll();
    await rm(CSV_DIR, {
      force: true,
      recursive: true,
    });
  });

  test('Can download CSV file', async () => {
    const file = `${CSV_DIR}/tmp.csv`;
    const csv = 'foo,bar\nfizz,buzz';
    scope
      .get(
        '/v0.1/bulk/lists/10000000-0000-0000-0000-000000000000/items/download',
      )
      .reply(200, csv);

    expect(existsSync(file)).toBeFalsy();

    expect(
      await client.downloadListItems(
        '10000000-0000-0000-0000-000000000000',
        file,
      ),
    ).toBeTruthy();

    expect(existsSync(file)).toBeTruthy();
    expect(readFileSync(file).toString()).toEqual(csv);
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can upload CSV File', async () => {
    const file = `${CSV_DIR}/upload-file.csv`;
    expect(existsSync(file)).toBeTruthy();
    scope
      .post(
        '/v0.1/bulk/lists/10000000-0000-0000-0000-000000000000/items/download',
      )
      .reply(200, {
        inserted: 42,
        updated: 21,
        deleted: 84,
      } as ImportFileResponse);

    const results = await client.importListItems(
      '10000000-0000-0000-0000-000000000000',
      file,
    );

    expect(results).toEqual({
      inserted: 42,
      updated: 21,
      deleted: 84,
    });

    expect(nock.isDone()).toBeTruthy();
  });
});
