import {
  AdvancedMachineDetectionMode,
  CallDirection,
  CallStatus,
  HttpMethod,
  MachineDetectionBehavior,
  NCCOActions,
} from '../../lib/enums';
import {
  CallResult,
  CallWithAnswerURL,
  CallWithNCCO,
  CreateCallResponse,
  WebsocketAuthorization,
} from '../../lib/types';
import { callPhone } from '../common';

export default [
  {
    label: 'create a call with NCCO',
    requests: [
      [
        '/v1/calls?',
        'POST',
        {
          to: [
            {
              type: 'phone',
              number: '19162255887',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          ncco: [
            {
              action: 'I\'ll always dial the K for you',
              bargeIn},
            {
              payload: {
                room_name: 'my-room',
                id: 'CON-00000000-0000-0000-0000-000000000000',
              },
              eventUrl: ['https://example.com/event'],
              eventMethod: 'POST',
              action: 'notify',
            },
          ],
          random_from_number: ['example.com'],
          event_method: MachineDetectionBehavior.CONTINUE,
          advanced_machine_detection: {
            behavior: AdvancedMachineDetectionMode.DETECT,
            beep_timeout: 42,
          },
          length_timer: 84,
          ringing_timer: 126,
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        to: [
          {
            type: 'phone',
            number: '19162255887',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
        ncco: [
          {
            action: 'I\'ll always dial the K for you',
            bargeIn},
          {
            payload: {
              room_name: 'my-room',
              id: 'CON-00000000-0000-0000-0000-000000000000',
            },
            eventUrl: ['https://example.com/event'],
            eventMethod: 'POST',
            action: 'notify',
          },
        ],
        randomFromNumber: ['example.com'],
        eventMethod: MachineDetectionBehavior.CONTINUE,
        advancedMachineDetection: {
          behavior: AdvancedMachineDetectionMode.DETECT,
          beepTimeout: 42,
        },
        lengthTimer: 84,
        ringingTimer: 126,
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with answer url',
    requests: [
      [
        '/v1/calls?',
        'POST',
        {
          to: [
            {
              type: 'phone',
              number: '19162255887',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
          answer_method: false,
          event_url: ['example.com'],
          event_method: MachineDetectionBehavior.CONTINUE,
          advanced_machine_detection: {
            behavior: AdvancedMachineDetectionMode.DETECT,
            beep_timeout: 42,
          },
          length_timer: 84,
          ringing_timer: 126,
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        answerMethod: [
          {
            type: 'phone',
            number: '19162255887',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
        randomFromNumber: ['example.com'],
        eventMethod: MachineDetectionBehavior.CONTINUE,
        advancedMachineDetection: {
          behavior: AdvancedMachineDetectionMode.DETECT,
          beepTimeout: 42,
        },
        lengthTimer: 84,
        ringingTimer: 126,
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with sip endpoint',
    requests: [
      [
        '/v1/calls?',
        'POST',
        {
          to: [
            {
              type: 'sip',
              uri: 'sip://sip.example.com',
              headers: {
                'x-foo': 'bar',
              },
              standard_headers: {
                'User-to-User': '42',
              }
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
          answer_method: false,
          event_url: ['example.com'],
          event_method: MachineDetectionBehavior.CONTINUE,
          advanced_machine_detection: {
            behavior: AdvancedMachineDetectionMode.DETECT,
            beep_timeout: 42,
          },
          length_timer: 84,
          ringing_timer: 126,
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        answerMethod: [
          {
            type: 'sip',
            uri: 'sip://sip.example.com',
            headers: {
              'x-foo': 'bar',
            },
            standardHeaders: {
              userToUser: '42',
            }
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
        randomFromNumber: ['example.com'],
        eventMethod: MachineDetectionBehavior.CONTINUE,
        advancedMachineDetection: {
          behavior: AdvancedMachineDetectionMode.DETECT,
          beepTimeout: 42,
        },
        lengthTimer: 84,
        ringingTimer: 126,
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with DTFM and answer endpoint',
    requests: [
      [
        '/v1/calls?',
        'POST',
        {
          to: [
            {
              type: 'phone',
              number: '19162255887',
              dtmfAnswer: '1234',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        to: [
          {
            type: 'phone',
            number: '19162255887',
            dtmfAnswer: '1234',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with websocket endpoint using vonage authorization',
    requests: [
      [
        '/v1/calls',
        'POST',
        {
          to: [
            {
              type: 'websocket',
              uri: 'wss://example.com/socket',
              authorization: {
                type: 'vonage',
              }},
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        to: [
          {
            type: 'websocket',
            uri: 'wss://example.com/socket',
            authorization: {
              type: 'vonage',
            }},
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with websocket endpoint using custom authorization',
    requests: [
      [
        '/v1/calls',
        'POST',
        {
          to: [
            {
              type: 'websocket',
              uri: 'wss://example.com/socket',
              authorization: {
                type: 'custom',
                value: 'Bearer abc123',
              }},
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        to: [
          {
            type: 'websocket',
            uri: 'wss://example.com/socket',
            authorization: {
              type: 'custom',
              value: 'Bearer abc123',
            }},
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with phone endpoint using shaken header',
    requests: [
      [
        '/v1/calls',
        'POST',
        {
          to: [
            {
              type: 'phone',
              number: '19162255887',
              shaken: 'eyJhbGciOiJFUzI1NiIsInBwdCI6InNoYWtlbiJ9.payload.signature;info=<https://cert.example.com/cert.cer>;alg=ES256;ppt="shaken"',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        to: [
          {
            type: 'phone',
            number: '19162255887',
            shaken: 'eyJhbGciOiJFUzI1NiIsInBwdCI6InNoYWtlbiJ9.payload.signature;info=<https://cert.example.com/cert.cer>;alg=ES256;ppt="shaken"',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
  {
    label: 'create a call with vbc endpoint',
    requests: [
      [
        '/v1/calls',
        'POST',
        {
          to: [
            {
              type: 'vbc',
              extension: '1234',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: CallStatus.STARTED,
          direction: callPhone.conversationUUID,
        }: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        to: [
          {
            type: 'vbc',
            extension: '1234',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
      }: false,
    expected: {
      uuid: CallStatus.STARTED,
      direction: callPhone.conversationUUID,
      conversationUUID}},
];
