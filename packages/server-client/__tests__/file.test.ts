import nock from 'nock';
import { FileClient } from '../lib';
import { BASE_URL } from './common';
import { Auth } from '@vonage/auth';
import { mkdirSync, readFileSync, existsSync } from 'fs';
import { rm } from 'fs/promises';

const FILE_PATH = `${process.cwd()}/path`;

const key = readFileSync(`${__dirname}/private.test.key`).toString();

describe('File tests', () => {
  let client;
  let scope;

  beforeEach(() => {
    if (!existsSync(FILE_PATH)) {
      mkdirSync(FILE_PATH);
    }
    client = new FileClient(
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

    await rm(FILE_PATH, {
      force: true,
      recursive: true,
    });
  });

  test('Can download file with url', async () => {
    const content = "Ford, I think I'm a couch";
    const file = `${FILE_PATH}/my-file.txt`;
    scope
      .get(`/v1/files/00000000-0000-0000-0000-000000000001`)
      .reply(200, content);

    expect(existsSync(file)).toBeFalsy();

    expect(
      await client.downloadFile(
        `https://api.nexmo.com/v1/files/00000000-0000-0000-0000-000000000001`,
        file,
      ),
    ).toBeUndefined();

    expect(existsSync(file)).toBeTruthy();
    expect(readFileSync(file).toString()).toEqual(content);
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can download file with id', async () => {
    const content = "Ford, I think I'm a couch";
    const file = `${FILE_PATH}/my-file.txt`;
    scope
      .get(`/v1/files/00000000-0000-0000-0000-000000000001`)
      .reply(200, content);

    expect(existsSync(file)).toBeFalsy();

    expect(
      await client.downloadFile('00000000-0000-0000-0000-000000000001', file),
    ).toBeUndefined();

    expect(existsSync(file)).toBeTruthy();
    expect(readFileSync(file).toString()).toEqual(content);
    expect(nock.isDone()).toBeTruthy();
  });
});
