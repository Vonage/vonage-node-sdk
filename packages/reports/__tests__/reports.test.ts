// eslint-disable-next-line n/no-extraneous-import
import nock from 'nock';
// eslint-disable-next-line n/no-extraneous-import
import { jest } from '@jest/globals';
import { BASE_ASYNC_RESPONSE, REPORT_ID } from './__dataSets__/common.js';
import { Reports } from '../lib/reports.js';
import testDataSets from './__dataSets__/index.js';
import {
  VonageTest,
  apiKeyAuth,
  validateApiKeyAuth,
} from '../../../testHelpers/index.js';
import type {
  SDKTestCase,
  TestRequest,
  TestResponse,
  TestTuple,
} from '../../../testHelpers/index.js';

const FILE_PATH = `${process.cwd()}/test-path`;

const reportTests = testDataSets.map((dataSet): TestTuple<Reports> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): SDKTestCase<Reports> => ({
      label: test.label,
      baseUrl: 'https://api.nexmo.com',
      reqHeaders: {
        authorization: validateApiKeyAuth,
      },
      requests: test.requests as TestRequest[],
      responses: test.responses as TestResponse[],
      client: new Reports(apiKeyAuth),
      clientMethod: test.clientMethod as keyof Reports,
      parameters: test.parameters,
      generator: false,
      error: false,
      expected: test.expected,
    })),
  };
});

describe('Download tests', () => {
  let client: Reports;
  let downloadFile = jest.fn();

  beforeEach(() => {
    const TestReport = Reports;
    client = new TestReport(apiKeyAuth);
    downloadFile = jest.fn();
    client.downloadFile = downloadFile;
  });

  afterEach(async () => {
    nock.cleanAll();
  });

  test('Downloads the report using the download_report link', async () => {
    const file = `${FILE_PATH}/my-file.csv`;

    nock(
      'https://api.nexmo.com',
      {
        reqheaders: {
          authorization: validateApiKeyAuth,
        },
      }
    ).get(`/v2/reports/${REPORT_ID}`)
      .reply(
        200,
        {
          ...BASE_ASYNC_RESPONSE,
          _links: {
            self: { href: `https://api.nexmo.com/v2/reports/${REPORT_ID}` },
            download_report: {
              href: `https://api.nexmo.com/v2/reports/${REPORT_ID}/download`,
            },
          },
          request_status: 'SUCCESS',
          items_count: 1000,
        }
      );


    expect(
      await client.getReportData(
        REPORT_ID,
        file,
      ),
    ).toBeUndefined();

    expect(downloadFile).toHaveBeenCalledWith(
      `https://api.nexmo.com/v2/reports/${REPORT_ID}/download`,
      file,
    );
    expect(nock.isDone()).toBeTruthy();
  });

  test('Will error when report missing download_report HAL Link', async () => {
    const file = `${FILE_PATH}/my-file.csv`;

    nock(
      'https://api.nexmo.com',
      {
        reqheaders: {
          authorization: validateApiKeyAuth,
        },
      }
    ).get(`/v2/reports/${REPORT_ID}`)
      .reply(
        200,
        {
          ...BASE_ASYNC_RESPONSE,
          _links: {
            self: { href: `https://api.nexmo.com/v2/reports/${REPORT_ID}` },
          },
          request_status: 'SUCCESS',
          items_count: 1000,
        }
      );


    await expect(async () =>
      client.getReportData(
        REPORT_ID,
        file,
      )
    ).rejects.toThrow();

    expect(downloadFile).not.toHaveBeenCalled();

    expect(nock.isDone()).toBeTruthy();
  });

});

VonageTest(reportTests);
