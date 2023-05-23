import { Client } from '@vonage/server-client';
import { ApplicationResponse } from '../../lib';

import { BASE_URL, testApplication, capabilitiesToTest } from '../common';

const applicationToCreate = JSON.parse(JSON.stringify(testApplication));

delete applicationToCreate.id;
delete applicationToCreate.keys?.publicKey;

const expectedApplication = JSON.parse(JSON.stringify(testApplication));

expectedApplication.keys = {
  ...testApplication.keys,
  privateKey: `-----BEGIN PRIVATE KEY-----bar----END PRIVATE KEY-----`,
};

export default [
  {
    label: 'create simple application',
    requests: [
      [
        `/v2/applications`,
        'POST',
        Client.transformers.snakeCaseObjectKeys(applicationToCreate, true),
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(
            {
              ...testApplication,
              keys: expectedApplication.keys,
            },
            true,
          ),
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        } as ApplicationResponse,
      ],
    ],
    clientMethod: 'createApplication',
    parameters: [applicationToCreate],
    generator: false,
    error: false,
    expected: Client.transformers.snakeCaseObjectKeys(
      expectedApplication,
      true,
      true,
    ),
  },
  {
    label: 'create application with custom key',
    requests: [
      [
        `/v2/applications`,
        'POST',
        Client.transformers.snakeCaseObjectKeys(
          {
            ...applicationToCreate,
            keys: {
              public_key: expectedApplication.keys.publicKey,
            },
          },
          true,
        ),
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(
            {
              ...testApplication,
              keys: expectedApplication.keys,
            },
            true,
          ),
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        } as ApplicationResponse,
      ],
    ],
    clientMethod: 'createApplication',
    parameters: [
      {
        ...applicationToCreate,
        keys: {
          publicKey: expectedApplication.keys.publicKey,
        },
      },
    ],
    generator: false,
    error: false,
    expected: Client.transformers.snakeCaseObjectKeys(
      expectedApplication,
      true,
      true,
    ),
  },
  capabilitiesToTest.map(([name, capability]) => ({
    label: `create application with ${name} capability`,
    requests: [
      [
        `/v2/applications`,
        'POST',
        Client.transformers.snakeCaseObjectKeys(
          {
            ...applicationToCreate,
            capabilities: {
              [name]: capability,
            },
          },
          true,
        ),
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(
            {
              ...testApplication,
              keys: expectedApplication.keys,
              capabilities: {
                [name]: capability,
              },
            },
            true,
          ),
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        } as ApplicationResponse,
      ],
    ],
    clientMethod: 'createApplication',
    parameters: [
      {
        ...applicationToCreate,
        capabilities: {
          [name]: capability,
        },
      },
    ],
    generator: false,
    error: false,
    expected: Client.transformers.camelCaseObjectKeys(
      Client.transformers.snakeCaseObjectKeys(
        {
          ...expectedApplication,
          capabilities: {
            [name]: Client.transformers.snakeCaseObjectKeys(capability, true),
          },
        },
        true,
        true,
      ),
      true,
      true,
    ),
  })),
].flat();
