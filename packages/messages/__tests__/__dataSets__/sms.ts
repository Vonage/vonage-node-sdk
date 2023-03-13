import { SMS } from '../../lib';
import { MessageSuccess } from '../../lib';
import { MessageParamsText, SMSMessageRequest } from '../../lib';

export default [
  {
    label: 'send SMS message',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
              channel: 'sms',
              message_type: 'text',
            } as SMSMessageRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new SMS({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
      } as MessageParamsText),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send SMS message with client ref',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
              client_ref: 'nsa-1',
              channel: 'sms',
              message_type: 'text',
            } as SMSMessageRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new SMS({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        clientRef: 'nsa-1',
      } as MessageParamsText),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
];
