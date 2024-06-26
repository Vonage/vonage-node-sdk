import nock from 'nock';
import * as url from 'url';
import { LogoType, UrlResponse, Meetings } from '../lib';
import { getClient, getScope, themeOne } from './common';

const urlResponses = [
  {
    url: 'https://s3.amazonaws.com/node-sdk/white',
    fields: {
      'Content-Type': 'image/png',

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

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file = `${__dirname}/image.png`;

describe('Meetings > File uploads', () => {
  let client: Meetings;
  let scope: nock.Scope;
  let awsScope: nock.Scope;

  beforeEach(() => {
    client = getClient();
    scope = getScope();
    awsScope = nock('https://s3.amazonaws.com').persist();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('Will throw error when file does not exist', async () => {
    await expect(() =>
      client.uploadIcon(String(themeOne.themeId), LogoType.COLORED, 'not-real'),
    ).rejects.toThrow('File not-real does not exist');

    expect(nock.isDone()).toBeTruthy();
  });

  test('Will throw error when AWS fails', async () => {
    scope.get('/v1/meetings/themes/logos-upload-urls').reply(200, urlResponses);

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
      client.uploadIcon(String(themeOne.themeId), LogoType.WHITE, file),
    ).rejects.toThrow(
      'Failed to upload to AWS: Invalid according to Policy: Policy expired',
    );

    expect(nock.isDone()).toBeTruthy();
  });

  test('Will throw error when apply fails', async () => {
    scope
      .get('/v1/meetings/themes/logos-upload-urls')
      .reply(200, urlResponses)
      .put(`/v1/meetings/themes/${themeOne.themeId}/finalizeLogos`, {
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
      client.uploadIcon(String(themeOne.themeId), LogoType.WHITE, file),
    ).rejects.toThrow('Could not attach image to theme: key_not_found');

    expect(nock.isDone()).toBeTruthy();
  });
});
