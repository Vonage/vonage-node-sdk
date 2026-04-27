import {
  SDKTestCase,
  keyAuth,
  validateBearerAuth,
} from '../../../../testHelpers';
import {
  Verify2,
  VerificationRequest,
  SMSWorkflow,
  VerificationRequestParams,
  VerificationResponse,
  WhatsAppWorkflow,
  WhatsAppInteractiveWorkflow,
  VoiceWorkflow,
  EmailWorkflow,
  SilentAuthWorkflow,
  VerifyLocale,
  Channels,
  SilentAuthChannel
} from '../../lib/index.js';

export default [
  {
    label: 'start request using SMS',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp interactive',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Voice',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using RCS',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        },
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          },
        ],
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Email',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: 'alice@company.com',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: 'alice@company.com',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using silent auth',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using SMS with all options',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
              app_hash: 'C0FFEE',
              entity_id: '1101407360000017170',
              content_id: '1107158078772563946',
            },
          ],
          locale: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
          template_id: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
            appHash: 'C0FFEE',
            entityId: '1101407360000017170',
            contentId: '1107158078772563946',
          }: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
        templateId: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp with all options',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
          locale: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp interactive with all options ',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
          locale: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Voice with all options ',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
          locale: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
          template_id: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
        templateId: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Email with all options ',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: 'alice@company.com',
            },
          ],
          locale: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: 'alice@company.com',
          }: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using silent auth with all options',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
              redirect_url: 'https://example.com/redirect',
            },
          ],
          locale: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
          check_url: 'https://example.com/check',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
            redirectUrl: 'https://example.com/redirect',
          }: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      }: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
      checkUrl: 'https://example.com/check',
    },
  },
  {
    label: 'start request using multiple workflows',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
            {
              channel: '14152739164',
            }}: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }{
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request with fruad_check to true',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          fraud_check: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        fraudCheck: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request with fruad_check to false',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          fraud_check: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        }: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        fraudCheck: [
          {
            channel: '14152739164',
          }}: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'error when request returns conflict',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization},
    client(keyAuth),
    generator: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: '14152739164',
            },
          ],
        }: [
      [
        422,
        {
          title: 'Conflict',
          type: 'https://www.developer.vonage.com/api-errors/verify#conflict',
          detail: 'Concurrent verifications to the same number are not allowed.',
          instance: '738f9313-418a-4259-9b0d-6670f06fa82d',
          request_id: '575a2054-aaaf-4405-994e-290be7b9a91f',
        },
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: '14152739164',
          }}: 'Request failed with status code 422',
  },
];
