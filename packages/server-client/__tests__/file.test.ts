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

  test('Can download multiple files', async () => {
    const file = `${FILE_PATH}/my-file.txt`;
    const content = "Ford, I think I'm a couch";

    const file2 = `${FILE_PATH}/my-file2.txt`;
    const content2 = "I know how you feel.";

    scope
      .get(`/v1/files/00000000-0000-0000-0000-000000000001`)
      .delay(1000)
      .reply(200, content)
      .get(`/v1/files/00000000-0000-0000-0000-000000000002`)
      .delay(800)
      .reply(200, content2);

    expect(existsSync(file)).toBeFalsy();
    expect(existsSync(file2)).toBeFalsy();

    await Promise.all([
      client.downloadFile('00000000-0000-0000-0000-000000000001', file),
      client.downloadFile('00000000-0000-0000-0000-000000000002', file2),
    ]);

    expect(existsSync(file)).toBeTruthy();
    expect(readFileSync(file).toString()).toEqual(content);

    expect(existsSync(file2)).toBeTruthy();
    expect(readFileSync(file2).toString()).toEqual(content2);

    expect(nock.isDone()).toBeTruthy();
  });
});
