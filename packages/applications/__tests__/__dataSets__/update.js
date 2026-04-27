import { Client } from '@vonage/server-client';
import { ApplicationResponse } from '../../lib/index.js';

import { BASE_URL, testApplication, capabilitiesToTest } from '../common';

const expectedApplication = JSON.parse(JSON.stringify(testApplication));

expectedApplication.keys = {
  ...testApplication.keys,
  privateKey: '-----BEGIN PRIVATE KEY-----bar----END PRIVATE KEY-----',
};

export default [
  {
    label: 'update simple application',
    requests: [
      [
        `/v2/applications/${testApplication.id}`,
        'PUT',
        Client.transformers.snakeCaseObjectKeys(testApplication, true),
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(
            {
              ...testApplication,
              keys},
            true,
          ),
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        }: 'updateApplication',
    parameters: [testApplication],
    generator: false,
    expected(
      expectedApplication,
      true,
      true,
    ),
  },
  {
    label: 'update application with custom key',
    requests: [
      [
        `/v2/applications/${testApplication.id}`,
        'PUT',
        Client.transformers.snakeCaseObjectKeys(
          {
            ...testApplication,
            keys: {
              public_key},
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
              keys},
            true,
          ),
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        }: 'updateApplication',
    parameters: [
      {
        ...testApplication,
        keys: {
          publicKey},
      },
    ],
    generator: false,
    expected(
      expectedApplication,
      true,
      true,
    ),
  },
  capabilitiesToTest.map(([name, capability]) => ({
    label: `update application with ${name} capability`,
    requests: [
      [
        `/v2/applications/${testApplication.id}`,
        'PUT',
        Client.transformers.snakeCaseObjectKeys(
          {
            ...testApplication,
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
              keys: {
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
        }: 'updateApplication',
    parameters: [
      {
        ...testApplication,
        capabilities: {
          [name]: capability,
        },
      },
    ],
    generator: false,
    expected(
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
