import {
  VerificationRequest,
  SMSWorkflow,
  VerificationRequestParams,
  VerificationResponse,
  WhatsAppWorkflow,
  WhatsAppInteractiveWorkflow,
  VoiceWorkflow,
  EmailWorkflow,
  SilentAuthWorkflow,
} from '../../lib/types';

import { VerifyLocale, Channels, SilenAuthChannel } from '../../lib/enums';

export default [
  {
    label: 'start request using SMS',
    request: [
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
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
    request: [
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
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
    request: [
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
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
    request: [
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
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
    request: [
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
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
    request: [
      '/v2/verify',
      'POST',
            {
              brand: 'Vonage',
              workflow: [
                {
                  channel: SilenAuthChannel.SILENT_AUTH,
                  to: '14152739164',
                },
              ],
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
    clientMethod: 'newRequest',
    parameters: [
            {
              brand: 'Vonage',
              workflow: [
                    {
                      channel: SilenAuthChannel.SILENT_AUTH,
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
    request: [
      '/v2/verify',
      'POST',
            {
              brand: 'Vonage',
              workflow: [
                {
                  channel: Channels.SMS,
                  to: '14152739164',
                  app_hash: 'C0FFEE',
                },
              ],
              locale: VerifyLocale.EN_GB,
              channel_timeout: 300,
              client_ref: 'my-ref',
              code_length: 4,
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
    clientMethod: 'newRequest',
    parameters: [
            {
              brand: 'Vonage',
              workflow: [
                    {
                      channel: Channels.SMS,
                      to: '14152739164',
                      appHash: 'C0FFEE',
                    } as SMSWorkflow,
              ],
              locale: VerifyLocale.EN_GB,
              channelTimeout: 300,
              clientRef: 'my-ref',
              codeLength: 4,
            } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp with all options',
    request: [
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
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
            } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using WhatsApp interactive with all options ',
    request: [
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
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
            } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Voice with all options ',
    request: [
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
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
            } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using Email with all options ',
    request: [
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
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
            } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using silent auth with all options',
    request: [
      '/v2/verify',
      'POST',
            {
              brand: 'Vonage',
              workflow: [
                {
                  channel: SilenAuthChannel.SILENT_AUTH,
                  to: '14152739164',
                },
              ],
              locale: VerifyLocale.EN_GB,
              channel_timeout: 300,
              client_ref: 'my-ref',
              code_length: 4,
            } as VerificationRequest,
    ],
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
    clientMethod: 'newRequest',
    parameters: [
            {
              brand: 'Vonage',
              workflow: [
                    {
                      channel: SilenAuthChannel.SILENT_AUTH,
                      to: '14152739164',
                    } as SilentAuthWorkflow,
              ],
              locale: VerifyLocale.EN_GB,
              channelTimeout: 300,
              clientRef: 'my-ref',
              codeLength: 4,
            } as VerificationRequestParams,
    ],
    expected: {
      requestId: 'cef1c266-d144-485e-8915-bd2d51b06776',
    },
  },
  {
    label: 'start request using multiple workflows',
    request: [
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
    response: [
      202,
            {
              request_id: 'cef1c266-d144-485e-8915-bd2d51b06776',
            } as VerificationResponse,
    ],
    method: 'post',
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
    label: 'error when request returns conflict',
    request: [
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
    response: [
      422,
      {
        title: 'Conflict',
        type: 'https://www.developer.vonage.com/api-errors/verify#conflict',
        detail: 'Concurrent verifications to the same number are not allowed.',
        instance: '738f9313-418a-4259-9b0d-6670f06fa82d',
        request_id: '575a2054-aaaf-4405-994e-290be7b9a91f',
      },
    ],
    method: 'post',
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
];
