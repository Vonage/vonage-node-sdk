import { ImportFileResponse, ProactiveConnect } from '../lib/index';
import nock from 'nock';
import { Auth } from '@vonage/auth';
import { BASE_URL } from './common';
import testDataSets from './__dataSets__/index';
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { rm } from 'fs/promises';
import { parse } from '@amvijay/multipart-parser';

const key = readFileSync(`${__dirname}/private.test.key`).toString();

const CSV_DIR = `${process.cwd()}/path`;

const getResults = async (
  generator: boolean,
  client: unknown,
  clientMethod: string,
  parameters: Array<unknown>,
) => {
  if (!generator) {
    return await client[clientMethod](...parameters);
  }

  const results = [];
  for await (const result of client[clientMethod](...parameters)) {
    results.push(result);
  }
  return results;
};

describe.each(testDataSets)('$label', ({ tests }) => {
  let client;
  let scope;

  beforeEach(function () {
    client = new ProactiveConnect(
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
    async ({
      requests,
      responses,
      clientMethod,
      parameters,
      expected,
      generator = false,
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
});

describe('File tests', () => {
  let client;
  let scope;

  beforeEach(() => {
    if (!existsSync(CSV_DIR)) {
      mkdirSync(CSV_DIR);
    }
    writeFileSync(`${CSV_DIR}/upload-file.csv`, `fizz,buzz\nfoo,bar`);
    client = new ProactiveConnect(
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

  afterEach(async () => {
    client = null;
    scope = null;
    nock.cleanAll();
    await rm(CSV_DIR, {
      force: true,
      recursive: true,
    });
  });

  test('Can download CSV file', async () => {
    const file = `${CSV_DIR}/tmp.csv`;
    const csv = `foo,bar\nfizz,buzz`;
    scope
      .get(
        `/v0.1/bulk/lists/10000000-0000-0000-0000-000000000000/items/download`,
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
    const fileBuf = readFileSync(file);
    scope
      .post(
        `/v0.1/bulk/lists/10000000-0000-0000-0000-000000000000/items/download`,
        (body) => {
          const parts = parse(Buffer.from(body, 'hex'), client.FORM_BOUNDARY);
          return parts.reduce((acc, part) => {
            if (part.name === 'file') {
              return acc && !!Buffer.compare(parts.content, fileBuf);
            }

            return true;
          }, true);
        },
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
