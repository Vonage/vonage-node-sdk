import { apiKey } from '../../../../testHelpers';
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
} from '../../lib/index.js';

const API_KEY = apiKey;

const numberTransfer = {
  from: 'primary',
  to: 'sub',
  number: '19162255887',
  country: 'US',
};

const balanceTransfer = {
  balanceTransferId: '0000-0000-0000-000000000001',
  amount: 123.45,
  from: 'primary',
  to: 'sub',
  reference: 'Let\'s rock and roll',
  createdAt: '2063-04-05T18:00:00.000Z',
};

const creditTransfer = {
  creditTransferId: '0000-0000-0000-000000000001',
  amount: 123.45,
  from: 'primary',
  to: 'sub',
  reference: 'Let\'s rock and roll',
  createdAt: '2063-04-05T18:00:00.000Z',
};

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
        }: 'transferNumber',
    parameters: [numberTransfer],
    error: numberTransfer,
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
        }
      ],
    ],
    clientMethod: 'listBalanceTransfers',
    parameters: [
      {
        startDate}: [balanceTransfer],
  },
  {
    label: 'transfer balance',
    requests: [
      [
        `/accounts/${API_KEY}/balance-transfers`,
        'POST',
        {
          from: balanceTransfer.to,
          amount: `${balanceTransfer.amount}`,
          reference},
      ],
    ],
    responses: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(balanceTransfer),
        }: 'transferBalance',
    parameters: [
      {
        from: balanceTransfer.to,
        amount: `${balanceTransfer.amount}`,
        reference},
    ],
    error: balanceTransfer,
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
        }: 'listCreditTransfers',
    parameters: [
      {
        startDate}: [creditTransfer],
  },
  {
    label: 'transfer credit',
    requests: [
      [
        `/accounts/${API_KEY}/credit-transfers`,
        'POST',
        {
          from: creditTransfer.to,
          amount: `${creditTransfer.amount}`,
          reference}: [
      [
        200,
        {
          ...Client.transformers.snakeCaseObjectKeys(creditTransfer),
        }: 'transferCredit',
    parameters: [
      {
        from: creditTransfer.to,
        amount: `${creditTransfer.amount}`,
        reference}: creditTransfer,
  },
];
