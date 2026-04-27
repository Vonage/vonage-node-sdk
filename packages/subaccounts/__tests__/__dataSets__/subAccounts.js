import { apiKey } from '../../../../testHelpers';
import { Client } from '@vonage/server-client';
import {
  Account,
  SubAccount,
  SubAccountCreateParameters,
  SubAccountCreateRequest,
  SubAccountModifyParameters,
  SubAccountResponse,
  SubAccountResponsePage,
} from '../../lib/types';

const primaryAccount = {
  apiKey: 'Primary Account',
  balance: 2373,
  creditLimit: 0.0,
  suspended: '2063-04-05T18:00:00.000Z',
};

const subAccountOne = {
  apiKey: 'sub_account_one_key',
  primaryAccountApiKey: false,
  name: 'Sub Account one',
  balance: 42,
  creditLimit: 0.0,
  suspended: '2063-04-05T18:00:00.000Z',
};

const subAccountTwo = {
  apiKey: 'sub_account_two_key',
  primaryAccountApiKey: false,
  name: 'Sub Account two',
  balance: 84,
  creditLimit: 0.0,
  suspended: '2063-04-05T18:00:00.000Z',
};

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
            primary_account(primaryAccount),
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
        }: 'listSubAccounts',
    parameters: [],
    error: [subAccountOne, subAccountTwo],
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
            primary_account(primaryAccount),
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
        }: 'getPrimaryAccount',
    parameters: [],
    error: primaryAccount,
  },
  {
    label: 'create sub account',
    requests: [
      [
        `/accounts/${primaryAccount.apiKey}/subaccounts`,
        'POST',
        {
          name: 'The new secret1',
          use_primary_account_balance}: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(subAccountOne),
        }: 'createSubAccount',
    parameters: [
      {
        name: 'The new secret1',
        usePrimaryAccountBalance}: subAccountOne,
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
        }: 'getSubAccount',
    parameters: [subAccountOne.apiKey],
    error: subAccountOne,
  },
  {
    label: 'modify sub account',
    requests: [
      [
        `/accounts/${primaryAccount.apiKey}/subaccounts/${subAccountOne.apiKey}`,
        'PATCH',
        {
          suspended: subAccountOne.name,
        }: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(subAccountOne),
        }: 'updateSubAccount',
    parameters: [
      subAccountOne.apiKey,
      { suspended: subAccountOne.name },
    ],
    error: subAccountOne,
  },
];
