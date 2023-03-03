import {
  MessageSendAllFailure,
  MessageSendPartialFailure,
} from '../../lib/classes';
import { MessageClassEnum, SMSStatus, TypeEnum } from '../../lib/enums/index';
import {
  SMSResponse,
  SMSMessageResponse,
  Message,
  ErrorMessage,
  SMSMessages,
  SMSRequestBody,
} from '../../lib/interfaces/index';
import { SMSParams } from '../../lib/types/index';

export default [
  {
    label: 'send message',
    request: [
      '/sms/json',
      'POST',
            {
              api_key: '12345',
              api_secret: 'ABCDE',
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
            } as SMSRequestBody,
    ],
    error: null,
    response: [
      200,
            {
              'message-count': 1,
              messages: [
                    {
                      to: '14152739164',
                      'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                      status: SMSStatus.SUCCESS,
                      'remaining-balance': '0.42',
                      'message-price': '0.84',
                      network: '123456',
                    } as SMSMessageResponse,
              ],
            } as SMSResponse,
    ],
    method: 'post',
    clientMethod: 'send',
    parameters: [
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
            } as SMSParams,
    ],
    expected: {
      'message-count': 1,
      messageCount: 1,
      messages: [
                {
                  to: '14152739164',
                  'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  messageId: '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  status: SMSStatus.SUCCESS,
                  'remaining-balance': '0.42',
                  remainingBalance: '0.42',
                  'message-price': '0.84',
                  messagePrice: '0.84',
                  network: '123456',
                } as SMSMessageResponse,
      ],
    } as SMSMessages,
  },
  {
    label: 'send text message with all params',
    request: [
      '/sms/json',
      'POST',
            {
              api_key: '12345',
              api_secret: 'ABCDE',
              from: '12126875309',
              to: '19162255887',
              text: 'I\'ll always dial the "K" for you',
              sig: 'my sig',
              ttl: 9000,
              'status-report-req': true,
              callback: 'https://example.com/status',
              'message-class': MessageClassEnum.NUMBER_1,
              'client-ref': 'my client ref',
              'entity-id': '1101456324675322134',
              'content-id': '1107457532145798767',
            } as SMSRequestBody,
    ],
    error: null,
    response: [
      200,
            {
              'message-count': 1,
              messages: [
                    {
                      to: '14152739164',
                      'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                      status: SMSStatus.SUCCESS,
                      'remaining-balance': '0.42',
                      'message-price': '0.84',
                      network: '123456',
                    } as Message,
              ],
            } as SMSResponse,
    ],
    method: 'post',
    clientMethod: 'send',
    parameters: [
            {
              from: '12126875309',
              to: '19162255887',
              text: 'I\'ll always dial the "K" for you',
              sig: 'my sig',
              ttl: 9000,
              statusReportReq: true,
              callback: 'https://example.com/status',
              messageClass: MessageClassEnum.NUMBER_1,
              clientRef: 'my client ref',
              entityId: '1101456324675322134',
              contentId: '1107457532145798767',
            } as SMSParams,
    ],
    expected: {
      'message-count': 1,
      messageCount: 1,
      messages: [
                {
                  to: '14152739164',
                  'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  messageId: '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  status: SMSStatus.SUCCESS,
                  'remaining-balance': '0.42',
                  remainingBalance: '0.42',
                  'message-price': '0.84',
                  messagePrice: '0.84',
                  network: '123456',
                } as Message,
      ],
    } as SMSMessages,
  },
  {
    label: 'send unicode message',
    request: [
      '/sms/json',
      'POST',
            {
              api_key: '12345',
              api_secret: 'ABCDE',
              from: '12126875309',
              to: '18187779311',
              text: 'Whats your number? ⏳',
              type: TypeEnum.UNICODE,
            } as SMSRequestBody,
    ],
    error: null,
    response: [
      200,
            {
              'message-count': 1,
              messages: [
                    {
                      to: '14152739164',
                      'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                      status: SMSStatus.SUCCESS,
                      'remaining-balance': '0.42',
                      'message-price': '0.84',
                      network: '123456',
                    } as Message,
              ],
            } as SMSResponse,
    ],
    method: 'post',
    clientMethod: 'send',
    parameters: [
            {
              from: '12126875309',
              to: '18187779311',
              text: 'Whats your number? ⏳',
              type: TypeEnum.UNICODE,
            } as SMSParams,
    ],
    expected: {
      'message-count': 1,
      messageCount: 1,
      messages: [
                {
                  to: '14152739164',
                  'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  messageId: '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  status: SMSStatus.SUCCESS,
                  'remaining-balance': '0.42',
                  remainingBalance: '0.42',
                  'message-price': '0.84',
                  messagePrice: '0.84',
                  network: '123456',
                } as Message,
      ],
    } as SMSMessages,
  },
  {
    label: 'send binary message',
    request: [
      '/sms/json',
      'POST',
            {
              api_key: '12345',
              api_secret: 'ABCDE',
              from: '12126875309',
              to: '18186345789',
              type: TypeEnum.BINARY,
              body: '0011223344556677',
              udh: '06050415811581',
              'protocol-id': 127,
            } as SMSRequestBody,
    ],
    error: null,
    response: [
      200,
            {
              'message-count': 1,
              messages: [
                    {
                      to: '14152739164',
                      'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                      status: SMSStatus.SUCCESS,
                      'remaining-balance': '0.42',
                      'message-price': '0.84',
                      network: '123456',
                    } as Message,
              ],
            } as SMSResponse,
    ],
    method: 'post',
    clientMethod: 'send',
    parameters: [
            {
              from: '12126875309',
              to: '18186345789',
              type: TypeEnum.BINARY,
              body: '0011223344556677',
              udh: '06050415811581',
              protocolId: 127,
            } as SMSParams,
    ],
    expected: {
      'message-count': 1,
      messageCount: 1,
      messages: [
                {
                  to: '14152739164',
                  'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  messageId: '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  status: SMSStatus.SUCCESS,
                  'remaining-balance': '0.42',
                  remainingBalance: '0.42',
                  'message-price': '0.84',
                  messagePrice: '0.84',
                  network: '123456',
                } as Message,
      ],
    } as SMSMessages,
  },
  {
    label: 'when sending message responds in error',
    request: [
      '/sms/json',
      'POST',
            {
              api_key: '12345',
              api_secret: 'ABCDE',
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
            } as SMSRequestBody,
    ],
    error: new MessageSendAllFailure({
      'message-count': 1,
      messageCount: 1,
      messages: [
                {
                  status: SMSStatus.SUCCESS,
                  'error-text': 'Too many requests',
                  errorText: 'Too many requests',
                } as ErrorMessage,
      ],
    } as SMSMessages),
    response: [
      200,
            {
              'message-count': 1,
              messages: [
                    {
                      status: SMSStatus.THROTTLED,
                      'error-text': 'Too many requests',
                    } as ErrorMessage,
              ],
            } as SMSResponse,
    ],
    method: 'post',
    clientMethod: 'send',
    parameters: [
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
            } as SMSParams,
    ],
  },
  {
    label: 'when sending message responds with partial error',
    request: [
      '/sms/json',
      'POST',
            {
              api_key: '12345',
              api_secret: 'ABCDE',
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
            } as SMSRequestBody,
    ],
    error: new MessageSendPartialFailure({
      'message-count': 1,
      messageCount: 1,
      messages: [
                {
                  status: SMSStatus.SUCCESS,
                  'error-text': 'Too many requests',
                  errorText: 'Too many requests',
                } as ErrorMessage,
      ],
    } as SMSMessages),
    response: [
      200,
            {
              'message-count': 2,
              messages: [
                {
                  to: '14152739164',
                  'message-id': '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  messageId: '986ebc8e-46de-4f80-88e4-21d4c5d0c0a6',
                  status: SMSStatus.SUCCESS,
                  'remaining-balance': '0.42',
                  remainingBalance: '0.42',
                  'message-price': '0.84',
                  messagePrice: '0.84',
                  network: '123456',
                },
                    {
                      status: SMSStatus.THROTTLED,
                      'error-text': 'Too many requests',
                    } as ErrorMessage,
              ],
            } as SMSResponse,
    ],
    method: 'post',
    clientMethod: 'send',
    parameters: [
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
            } as SMSParams,
    ],
  },
];
