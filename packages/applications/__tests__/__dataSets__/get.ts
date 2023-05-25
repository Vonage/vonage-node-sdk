import { Client } from '@vonage/server-client';
import { ApplicationResponse } from '../../lib';

import { BASE_URL, testApplication, capabilitiesToTest } from '../common';

export default [
  {
    label: 'get simple application',
    requests: [[`/v2/applications/${testApplication.id}`, 'GET']],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(testApplication, true),
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        } as ApplicationResponse,
      ],
    ],
    clientMethod: 'getApplication',
    parameters: [testApplication.id],
    generator: false,
    error: false,
    expected: Client.transformers.snakeCaseObjectKeys(
      testApplication,
      true,
      true,
    ),
  },
  capabilitiesToTest.map(([name, capability]) => ({
    label: `get application with ${name} capability`,
    requests: [[`/v2/applications/${testApplication.id}`, 'GET']],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(testApplication, true),
          capabilities: {
            [name]: Client.transformers.snakeCaseObjectKeys(capability, true),
          },
          _links: {
            self: {
              href: `${BASE_URL}/v2/applications/${testApplication.id}`,
            },
          },
        } as ApplicationResponse,
      ],
    ],
    clientMethod: 'getApplication',
    parameters: [testApplication.id],
    generator: false,
    error: false,
    expected: Client.transformers.camelCaseObjectKeys(
      Client.transformers.snakeCaseObjectKeys(
        {
          ...testApplication,
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
