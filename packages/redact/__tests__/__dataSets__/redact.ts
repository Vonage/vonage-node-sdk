import {
  TransactionRequest,
  ErrorResponse,
  TransactionParams,
  ProductType,
  Type
} from '../../lib';

export default [
  {
    label: 'redact a transaction',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [204],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
  },
  {
    label: 'on 403 for Premature Redaction message',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [
      403,
            {
              type: 'https://developer.nexmo.com/api-errors/redact#premature-redaction',
              title: 'Premature Redaction',
              // eslint-disable-next-line
                detail: "You must wait 60 minutes before redacting ID '0A000000B0C9A1234'",
              instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            } as ErrorResponse,
    ],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
    error: 'Request failed with status code 403',
  },
  {
    label: 'on 403 for unprovisioned message',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [
      403,
            {
              type: 'https://developer.nexmo.com/api-errors#unprovisioned',
              title: 'Authorisation error',
              detail: 'User=ABC123 is not provisioned to redact product=SMS',
              instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            } as ErrorResponse,
    ],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
    error: 'Request failed with status code 403',
  },
  {
    label: 'on 404 for no such record',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [
      404,
            {
              type: 'https://developer.nexmo.com/api-errors#invalid-id',
              title: 'Invalid ID',
              detail: 'ID "0A000000B0C9A1234" could not be found (type=MT)',
              instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            } as ErrorResponse,
    ],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
    error: 'Request failed with status code 404',
  },
  {
    label: 'on 422 for invalid json',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [
      422,
            {
              type: 'https://developer.nexmo.com/api-errors#invalid-json',
              title: 'Invalid JSON',
              // eslint-disable-next-line
                detail: "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
              instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            } as ErrorResponse,
    ],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
    error: 'Request failed with status code 422',
  },
  {
    label: 'on 422 for unsupported product',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [
      422,
            {
              type: 'https://developer.nexmo.com/api-errors/redact#invalid-product',
              title: 'Invalid Product',
              detail: 'No product corresponding to supplied string sms2!',
              instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            } as ErrorResponse,
    ],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
    error: 'Request failed with status code 422',
  },
  {
    label: 'on 429 for rate limit',
    request: [
      '/v1/redact/transaction',
      'POST',
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionRequest,
    ],
    response: [
      429,
            {
              type: 'https://developer.nexmo.com/api-errors/redact#rate-limit',
              title: 'Rate Limit Hit',
              detail: 'Please wait, then retry your request',
              instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
            } as ErrorResponse,
    ],
    method: 'post',
    clientMethod: 'redactMessage',
    parameters: [
            {
              id: '209ab3c7536542b91e8b5aef032f6861',
              product: ProductType.SMS,
              type: Type.INBOUND,
            } as TransactionParams,
    ],
    error: 'Request failed with status code 429',
  },
];
