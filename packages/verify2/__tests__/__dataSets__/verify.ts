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
} from '../../lib';

export default [
  {
    label: 'start request using SMS',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.SMS,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.SMS,
            to: '14152739164',
          } as SMSWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.WHATSAPP,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.WHATSAPP,
            to: '14152739164',
          } as WhatsAppWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp interactive',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.WHATSAPP_INTERACTIVE,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.WHATSAPP_INTERACTIVE,
            to: '14152739164',
          } as WhatsAppInteractiveWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Voice',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.VOICE,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.VOICE,
            to: '14152739164',
          } as VoiceWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Email',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.EMAIL,
              to: 'alice@company.com',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.EMAIL,
            to: 'alice@company.com',
          } as EmailWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using silent auth',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: SilentAuthChannel.SILENT_AUTH,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: SilentAuthChannel.SILENT_AUTH,
            to: '14152739164',
          } as SilentAuthWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using SMS with all options',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.SMS,
              to: '14152739164',
              app_hash: 'C0FFEE',
              entity_id: '1101407360000017170',
              content_id: '1107158078772563946',
            },
          ],
          locale: VerifyLocale.EN_GB,
          channel_timeout: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
          template_id: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.SMS,
            to: '14152739164',
            appHash: 'C0FFEE',
            entityId: '1101407360000017170',
            contentId: '1107158078772563946',
          } as SMSWorkflow,
        ],
        locale: VerifyLocale.EN_GB,
        channelTimeout: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
        templateId: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp with all options',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.WHATSAPP,
              to: '14152739164',
            },
          ],
          locale: VerifyLocale.EN_GB,
          channel_timeout: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.WHATSAPP,
            to: '14152739164',
          } as WhatsAppWorkflow,
        ],
        locale: VerifyLocale.EN_GB,
        channelTimeout: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp interactive with all options ',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.WHATSAPP_INTERACTIVE,
              to: '14152739164',
            },
          ],
          locale: VerifyLocale.EN_GB,
          channel_timeout: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.WHATSAPP_INTERACTIVE,
            to: '14152739164',
          } as WhatsAppInteractiveWorkflow,
        ],
        locale: VerifyLocale.EN_GB,
        channelTimeout: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Voice with all options ',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.VOICE,
              to: '14152739164',
            },
          ],
          locale: VerifyLocale.EN_GB,
          channel_timeout: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
          template_id: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.VOICE,
            to: '14152739164',
          } as VoiceWorkflow,
        ],
        locale: VerifyLocale.EN_GB,
        channelTimeout: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
        templateId: 'ce1b1f8b-0b9e-4f3b-9b2b-6b1d7e0c0c7f',
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Email with all options ',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.EMAIL,
              to: 'alice@company.com',
            },
          ],
          locale: VerifyLocale.EN_GB,
          channel_timeout: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.EMAIL,
            to: 'alice@company.com',
          } as EmailWorkflow,
        ],
        locale: VerifyLocale.EN_GB,
        channelTimeout: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using silent auth with all options',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: SilentAuthChannel.SILENT_AUTH,
              to: '14152739164',
              redirect_url: 'https://example.com/redirect',
            },
          ],
          locale: VerifyLocale.EN_GB,
          channel_timeout: 300,
          client_ref: 'my-ref',
          code_length: 4,
          code: '4242',
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
          check_url: 'https://example.com/check',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: SilentAuthChannel.SILENT_AUTH,
            to: '14152739164',
            redirectUrl: 'https://example.com/redirect',
          } as SilentAuthWorkflow,
        ],
        locale: VerifyLocale.EN_GB,
        channelTimeout: 300,
        clientRef: 'my-ref',
        codeLength: 4,
        code: '4242',
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
      checkUrl: 'https://example.com/check',
    },
  },
  {
    label: 'start request using multiple workflows',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.SMS,
              to: '14152739164',
            },
            {
              channel: Channels.WHATSAPP,
              to: '14152739164',
            } as WhatsAppWorkflow,
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        workflow: [
          {
            channel: Channels.SMS,
            to: '14152739164',
          } as SMSWorkflow,
          {
            channel: Channels.WHATSAPP,
            to: '14152739164',
          } as WhatsAppWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request with fruad_check to true',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          fraud_check: true,
          workflow: [
            {
              channel: Channels.SMS,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        fraudCheck: true,
        workflow: [
          {
            channel: Channels.SMS,
            to: '14152739164',
          } as SMSWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request with fruad_check to false',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    error: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          fraud_check: false,
          workflow: [
            {
              channel: Channels.SMS,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
      [
        202,
        {
          request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
        } as VerificationResponse,
      ],
    ],
    clientMethod: 'newRequest',
    parameters: [
      {
        brand: 'Vonage',
        fraudCheck: false,
        workflow: [
          {
            channel: Channels.SMS,
            to: '14152739164',
          } as SMSWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'error when request returns conflict',
    baseUrl: 'https://api.nexmo.com',
    reqHeaders: {
      authorization: validateBearerAuth,
    },
    client: new Verify2(keyAuth),
    generator: false,
    requests: [
      [
        '/v2/verify',
        'POST',
        {
          brand: 'Vonage',
          workflow: [
            {
              channel: Channels.SMS,
              to: '14152739164',
            },
          ],
        } as VerificationRequest,
      ],
    ],
    responses: [
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
            channel: Channels.SMS,
            to: '14152739164',
          } as SMSWorkflow,
        ],
      } as VerificationRequestParams,
    ],
    error: 'Request failed with status code 422',
  },
] as SDKTestCase<Verify2>[];
