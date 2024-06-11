import { Client } from '@vonage/server-client';
import {
  NumberTransfer,
  BalanceTransferResponse,
  BalanceTransfer,
  BalanceTransferListParameters,
  CreditTransferResponsePage,
  CreditTransferResponse,
  CreditTransfer,
  CreditTransferParameters,
  CreditTransferListParameters,
} from '../../lib/types';
import { BASE_URL } from '../common';

const API_KEY = '12345';

const numberTransfer = {
  from: 'primary',
  to: 'sub',
  number: '19162255887',
  country: 'US',
} as NumberTransfer;

const balanceTransfer = {
  balanceTransferId: '0000-0000-0000-000000000001',
  amount: 123.45,
  from: 'primary',
  to: 'sub',
  reference: "Let's rock and roll!",
  createdAt: '2063-04-05T18:00:00.000Z',
} as BalanceTransfer;

const creditTransfer = {
  creditTransferId: '0000-0000-0000-000000000001',
  amount: 123.45,
  from: 'primary',
  to: 'sub',
  reference: "Let's rock and roll!",
  createdAt: '2063-04-05T18:00:00.000Z',
} as CreditTransfer;

export default [
  {
    label: 'transfer number',
    requests: [
      [`/accounts/${API_KEY}/transfer-number`, 'POST', numberTransfer],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(numberTransfer),
        } as NumberTransfer,
      ],
    ],
    clientMethod: 'transferNumber',
    parameters: [numberTransfer],
    error: false,
    expected: numberTransfer,
  },
  {
    label: 'get account balance transfers',
    requests: [
      [
        `/accounts/${API_KEY}/balance-transfers?start_date=2063-04-05T18:00:00.000Z`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          _embedded: {
            balance_transfers: [
              {
                ...Client.transformers.snakeCaseObjectKeys(balanceTransfer),
              },
            ],
          },
        } as BalanceTransferResponsePage,
      ],
    ],
    clientMethod: 'listBalanceTransfers',
    parameters: [
      {
        startDate: balanceTransfer.createdAt,
      } as BalanceTransferListParameters,
    ],
    error: false,
    expected: [balanceTransfer],
  },
  {
    label: 'transfer balance',
    requests: [
      [
        `/accounts/${API_KEY}/balance-transfers`,
        'POST',
        {
          from: API_KEY,
          to: balanceTransfer.to,
          amount: `${balanceTransfer.amount}`,
          reference: balanceTransfer.reference,
        },
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(balanceTransfer),
        } as BalanceTransferResponse,
      ],
    ],
    clientMethod: 'transferBalance',
    parameters: [
      {
        from: API_KEY,
        to: balanceTransfer.to,
        amount: `${balanceTransfer.amount}`,
        reference: balanceTransfer.reference,
      },
    ],
    error: false,
    expected: balanceTransfer,
  },
  {
    label: 'get account credit transfers',
    requests: [
      [
        `/accounts/${API_KEY}/credit-transfers?start_date=2063-04-05T18:00:00.000Z`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          _embedded: {
            credit_transfers: [
              {
                ...Client.transformers.snakeCaseObjectKeys(creditTransfer),
              },
            ],
          },
        } as CreditTransferResponsePage,
      ],
    ],
    clientMethod: 'listCreditTransfers',
    parameters: [
      {
        startDate: creditTransfer.createdAt,
      } as CreditTransferListParameters,
    ],
    error: false,
    expected: [creditTransfer],
  },
  {
    label: 'transfer credit',
    requests: [
      [
        `/accounts/${API_KEY}/credit-transfers`,
        'POST',
        {
          from: API_KEY,
          to: creditTransfer.to,
          amount: `${creditTransfer.amount}`,
          reference: creditTransfer.reference,
        } as CreditTransferParameters,
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(creditTransfer),
        } as CreditTransferResponse,
      ],
    ],
    clientMethod: 'transferCredit',
    parameters: [
      {
        from: API_KEY,
        to: creditTransfer.to,
        amount: `${creditTransfer.amount}`,
        reference: creditTransfer.reference,
      } as CreditTransferParameters,
    ],
    error: false,
    expected: creditTransfer,
  },
];
