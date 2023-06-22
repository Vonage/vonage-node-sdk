import nock from 'nock';
import { Client } from '@vonage/server-client';
import { Meetings } from '../lib/index';
import { BASE_URL, BASE_PATH, getClient, getScope, themeOne } from './common';
import pick from 'lodash.pick';
import { UrlResponse } from '../lib/types/index';
import { LogoType } from '../lib/enums';
import { parse } from '@amvijay/multipart-parser';
import { readFileSync } from 'fs';

const urlResponses = [
  {
    url: 'https://s3.amazonaws.com/node-sdk/white',
    fields: {
      'Content-Type': 'image/png',
      // eslint-disable-next-line max-len
      key: 'auto-expiring-temp/logos/white/1af8e55f-5ad4-4dd2-901c-492ef0a1561d',
      logoType: LogoType.WHITE,
      bucket: 'node-sdk',
      'X-Amz-Algorithm': 'white-algorithm',
      'X-Amz-Credential': 'white-credential',
      'X-Amz-Date': '20230125T144332Z',
      'X-Amz-Security-Token': 'white-Token',
      Policy: 'white-Policy',
      'X-Amz-Signature': 'white-signature',
    },
  } as UrlResponse,
  {
    url: 'https://s3.amazonaws.com/node-sdk/colored',
    fields: {
      'Content-Type': 'image/png',
      // eslint-disable-next-line max-len
      key: 'auto-expiring-temp/logos/colored/1af8e55f-5ad4-4dd2-901c-492ef0a1561d',
      logoType: LogoType.COLORED,
      bucket: 'node-sdk',
      'X-Amz-Algorithm': 'colored-algorithm',
      'X-Amz-Credential': 'colored-credential',
      'X-Amz-Date': '20230125T144332Z',
      'X-Amz-Security-Token': 'colored-Token',
      Policy: 'colored-Policy',
      'X-Amz-Signature': 'colored-signature',
    },
  } as UrlResponse,
  {
    url: 'https://s3.amazonaws.com/node-sdk/favicon',
    fields: {
      'Content-Type': 'image/png',
      // eslint-disable-next-line max-len
      key: 'auto-expiring-temp/logos/favicon/1af8e55f-5ad4-4dd2-901c-492ef0a1561d',
      logoType: LogoType.FAVICON,
      bucket: 'node-sdk',
      'X-Amz-Algorithm': 'favicon-algorithm',
      'X-Amz-Credential': 'favicon-credential',
      'X-Amz-Date': '20230125T144332Z',
      'X-Amz-Security-Token': 'favicon-Token',
      Policy: 'favicon-Policy',
      'X-Amz-Signature': 'favicon-signature',
    },
  } as UrlResponse,
] as UrlResponse[];

const tests = [
  {
    awsExpected: urlResponses[0],
    logoType: LogoType.WHITE,
  },
  {
    awsExpected: urlResponses[1],
    logoType: LogoType.COLORED,
  },
  {
    awsExpected: urlResponses[2],
    logoType: LogoType.FAVICON,
  },
];

const file = `${__dirname}/image.png`;
const fileBuf = readFileSync(file);

describe('Meetings > File uploads', () => {
  let client: Meetings;
  let scope: nock;
  let awsScope: nock;

  beforeEach(() => {
    client = getClient();
    scope = getScope();
    awsScope = nock('https://s3.amazonaws.com').persist();
  });

  afterEach(() => {
    client = null;
    scope = null;
    awsScope = null;
    nock.cleanAll();
  });

  test.each(tests)(
    `Can upload $logoType logo`,
    async ({ awsExpected, logoType }) => {
      const { url, fields } = awsExpected;
      const awsUrl = new URL(url);
      scope
        .get(`${BASE_PATH}/meetings/themes/logos-upload-urls`)
        .reply(200, urlResponses)
        .put(`${BASE_PATH}/meetings/themes/${themeOne.themeId}/finalizeLogos`, {
          keys: [fields.key],
        })
        .reply(200, 'OK');

      awsScope
        .post(awsUrl.pathname, (body) => {
          const parts = parse(Buffer.from(body, 'hex'), client.FORM_BOUNDARY);
          return parts.reduce((acc, part) => {
            const { content, contentType } = part;
            let name = part.name;
            if (name === 'file') {
              return acc && !!Buffer.compare(content, fileBuf);
            }

            if (!name && /Content-Type/.exec(contentType)) {
              name = 'Content-Type';
            }

            return acc && fields[name] === content.toString().trim();
          }, true);
        })
        .reply(204);

      expect(
        await client.uploadIcon(themeOne.themeId, logoType, file),
      ).toBeTruthy();
      expect(nock.isDone()).toBeTruthy();
    },
  );

  test('Will throw error when file does not exist', async () => {
    await expect(() =>
      client.uploadIcon(themeOne.themeId, LogoType.COLORED, 'not-real'),
    ).rejects.toThrow('File not-real does not exist');

    expect(nock.isDone()).toBeTruthy();
  });

  test('Will throw error when AWS fails', async () => {
    scope
      .get(`${BASE_PATH}/meetings/themes/logos-upload-urls`)
      .reply(200, urlResponses);

    const awsUrl = new URL(urlResponses[0].url);
    awsScope
      .post(awsUrl.pathname, () => true)
      .reply(
        403,
        `<?xml version="1.0" encoding="UTF-8"?>
        <Error>
            <Code>AccessDenied</Code>
            <Message>Invalid according to Policy: Policy expired.</Message>
            <RequestId></RequestId>
            <HostId></HostId>
        </Error>`,
        {
          'Content-Type': 'application/xml',
        },
      );
    await expect(() =>
      client.uploadIcon(themeOne.themeId, LogoType.WHITE, file),
    ).rejects.toThrow(
      `Failed to upload to AWS: Invalid according to Policy: Policy expired`,
    );

    expect(nock.isDone()).toBeTruthy();
  });

  test('Will throw error when apply fails', async () => {
    scope
      .get(`${BASE_PATH}/meetings/themes/logos-upload-urls`)
      .reply(200, urlResponses)
      .put(`${BASE_PATH}/meetings/themes/${themeOne.themeId}/finalizeLogos`, {
        keys: [urlResponses[0].fields.key],
      })
      .reply(400, {
        message: 'could not finalize logos',
        name: 'BadRequestError',
        errors: [
          {
            logoKey: urlResponses[0].fields.key,
            code: 'key_not_found',
          },
        ],
        status: 400,
      });

    const awsUrl = new URL(urlResponses[0].url);
    awsScope.post(awsUrl.pathname, () => true).reply(204);
    await expect(() =>
      client.uploadIcon(themeOne.themeId, LogoType.WHITE, file),
    ).rejects.toThrow(`Could not attach image to theme: key_not_found`);

    expect(nock.isDone()).toBeTruthy();
  });

  test('Will throw error when apply fails with no message', async () => {
    scope
      .get(`${BASE_PATH}/meetings/themes/logos-upload-urls`)
      .reply(200, urlResponses)
      .put(`${BASE_PATH}/meetings/themes/${themeOne.themeId}/finalizeLogos`, {
        keys: [urlResponses[0].fields.key],
      })
      .reply(400);

    const awsUrl = new URL(urlResponses[0].url);
    awsScope.post(awsUrl.pathname, () => true).reply(204);
    await expect(() =>
      client.uploadIcon(themeOne.themeId, LogoType.WHITE, file),
    ).rejects.toThrow(`Could not attach image to theme: FATAL ERROR`);

    expect(nock.isDone()).toBeTruthy();
  });
});
