import { Client } from '@vonage/server-client';
import {
  ApplicationResponse,
  Application,
  ApplicationPageResponse,
} from '../../lib';

import {
  BASE_URL,
  testApplication,
  testApplicationOne,
  testApplicationTwo,
} from '../common';

const appToApi = (application: Application): ApplicationResponse => ({
  ...Client.transformers.snakeCaseObjectKeys(application, true) as ApplicationResponse,
  _links: {
    self: {
      href: `${BASE_URL}/v2/applications/${application.id}`,
    },
  },
});

export default [
  {
    label: 'get one page',
    requests: [['/v2/applications?', 'GET']],
    responses: [
      [
        200,
        {
          total_items: 1,
          total_pages: 1,
          page_size: 100,
          page: 1,
          _embedded: {
            applications: [
              appToApi(testApplication),
              appToApi(testApplicationOne),
              appToApi(testApplicationTwo),
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications`,
            },
          },
        } as ApplicationPageResponse,
      ],
    ],
    clientMethod: 'listApplications',
    parameters: [],
    generator: false,
    error: false,
    expected: {
      totalItems: 1,
      totalPages: 1,
      pageSize: 100,
      total_items: 1,
      total_pages: 1,
      page_size: 100,
      page: 1,
      _embedded: {
        applications: [
          Client.transformers.snakeCaseObjectKeys(testApplication, true, true),
          Client.transformers.snakeCaseObjectKeys(
            testApplicationOne,
            true,
            true
          ),
          Client.transformers.snakeCaseObjectKeys(
            testApplicationTwo,
            true,
            true
          ),
        ],
      },
      _links: {
        self: {
          href: `${BASE_URL}/v2/applications`,
        },
      },
    },
  },
  {
    label: 'get one page with params',
    requests: [['/v2/applications?page_size=1&page=2', 'GET']],
    responses: [
      [
        200,
        {
          _embedded: {
            applications: [appToApi(testApplication)],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications`,
            },
          },
        } as ApplicationPageResponse,
      ],
    ],
    clientMethod: 'listApplications',
    parameters: [
      {
        page_size: 1,
        page: 2,
      },
    ],
    generator: false,
    error: false,
    expected: {
      _embedded: {
        applications: [
          Client.transformers.snakeCaseObjectKeys(testApplication, true, true),
        ],
      },
      _links: {
        self: {
          href: `${BASE_URL}/v2/applications`,
        },
      },
    },
  },
  {
    label: 'get all pages',
    requests: [
      ['/v2/applications?page=1', 'GET'],
      ['/v2/applications?page=2', 'GET'],
    ],
    responses: [
      [
        200,
        {
          _embedded: {
            applications: [
              appToApi(testApplication),
              appToApi(testApplicationOne),
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications`,
            },
            next: {
              href: `${BASE_URL}/v2/applications?page=2`,
            },
          },
        } as ApplicationPageResponse,
      ],
      [
        200,
        {
          _embedded: {
            applications: [appToApi(testApplicationTwo)],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications`,
            },
            prev: {
              href: `${BASE_URL}/v2/applications?page=1`,
            },
          },
        } as ApplicationPageResponse,
      ],
    ],
    clientMethod: 'listAllApplications',
    parameters: [],
    generator: true,
    error: false,
    expected: [
      Client.transformers.snakeCaseObjectKeys(testApplication, true, true),
      Client.transformers.snakeCaseObjectKeys(testApplicationOne, true, true),
      Client.transformers.snakeCaseObjectKeys(testApplicationTwo, true, true),
    ],
  },
];
