import { Client } from '@vonage/server-client';
import {
  Account,
  SubAccountResponsePage,
  SubAccountResponse,
  SubAccountCreateParameters,
  SubAccount,
  SubAccountCreateRequest,
  SubAccountModifyParameters,
} from '../../lib/types';
import { BASE_URL } from '../common';

const primaryAccount = {
  apiKey: '12345',
  name: 'Primary Account',
  balance: 2373,
  creditLimit: 0.0,
  suspended: false,
  createdAt: '2063-04-05T18:00:00.000Z',
} as Account;

const subAccountOne = {
  apiKey: 'sub_account_one_key',
  primaryAccountApiKey: primaryAccount.apiKey,
  usePrimaryAccountBalance: false,
  name: 'Sub Account one',
  balance: 42,
  creditLimit: 0.0,
  suspended: false,
  createdAt: '2063-04-05T18:00:00.000Z',
} as SubAccount;

const subAccountTwo = {
  apiKey: 'sub_account_two_key',
  primaryAccountApiKey: primaryAccount.apiKey,
  usePrimaryAccountBalance: false,
  name: 'Sub Account two',
  balance: 84,
  creditLimit: 0.0,
  suspended: false,
  createdAt: '2063-04-05T18:00:00.000Z',
} as SubAccount;

export default [
  {
    label: 'list sub accounts',
    requests: [[`/accounts/${primaryAccount.apiKey}/subaccounts`, 'GET']],
    responses: [
      [
        200,
        {
          total_balance: 2499,
          total_credit_limit: 0.0,
          _embedded: {
            primary_account:
              Client.transformers.snakeCaseObjectKeys(primaryAccount),
            subaccounts: [
              Client.transformers.snakeCaseObjectKeys(subAccountOne),
              Client.transformers.snakeCaseObjectKeys(subAccountTwo),
            ],
          },
          _links: {
            self: {
              href: `/subaccounts/${primaryAccount.apiKey}/subaccounts`,
            },
          },
        } as SubAccountResponsePage,
      ],
    ],
    clientMethod: 'listSubAccounts',
    parameters: [],
    error: false,
    expected: [subAccountOne, subAccountTwo],
  },
  {
    label: 'get primary account',
    requests: [[`/accounts/${primaryAccount.apiKey}/subaccounts`, 'GET']],
    responses: [
      [
        200,
        {
          total_balance: 2499,
          total_credit_limit: 0.0,
          _embedded: {
            primary_account:
              Client.transformers.snakeCaseObjectKeys(primaryAccount),
            subaccounts: [
              Client.transformers.snakeCaseObjectKeys(subAccountOne),
              Client.transformers.snakeCaseObjectKeys(subAccountTwo),
            ],
          },
          _links: {
            self: {
              href: `/subaccounts/${primaryAccount.apiKey}/subaccounts`,
            },
          },
        } as SubAccountResponsePage,
      ],
    ],
    clientMethod: 'getPrimaryAccount',
    parameters: [],
    error: false,
    expected: primaryAccount,
  },
  {
    label: 'create sub account',
    requests: [
      [
        `/accounts/${primaryAccount.apiKey}/subaccounts`,
        'POST',
        {
          name: subAccountOne.name,
          secret: 'the new secret',
          use_primary_account_balance: true,
        } as SubAccountCreateRequest,
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(subAccountOne),
        } as SubAccountResponse,
      ],
    ],
    clientMethod: 'createSubAccount',
    parameters: [
      {
        name: subAccountOne.name,
        secret: 'the new secret',
        usePrimaryAccountBalance: true,
      } as SubAccountCreateParameters,
    ],
    error: false,
    expected: subAccountOne,
  },
  {
    label: 'get sub account',
    requests: [
      [
        `/accounts/${primaryAccount.apiKey}/subaccounts/${subAccountOne.apiKey}`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(subAccountOne),
        } as SubAccountResponse,
      ],
    ],
    clientMethod: 'getSubAccount',
    parameters: [subAccountOne.apiKey],
    error: false,
    expected: subAccountOne,
  },
  {
    label: 'modify sub account',
    requests: [
      [
        `/accounts/${primaryAccount.apiKey}/subaccounts/${subAccountOne.apiKey}`,
        'PATCH',
        {
          suspended: true,
          name: subAccountOne.name,
        } as SubAccountModifyParameters,
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(subAccountOne),
        } as SubAccountResponse,
      ],
    ],
    clientMethod: 'updateSubAccount',
    parameters: [
      subAccountOne.apiKey,
      { suspended: true, name: subAccountOne.name },
    ],
    error: false,
    expected: subAccountOne,
  },
];
