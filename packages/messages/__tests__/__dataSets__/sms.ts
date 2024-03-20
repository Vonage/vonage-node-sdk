import { SMS } from '../../lib';
import { MessageSuccess } from '../../lib';
import { MessageParamsText, SMSMessageRequest } from '../../lib';
import { AuthType } from '../common';

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
    label: 'send SMS message with SMS extra params',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'sms',
        message_type: 'text',
        sms: {
          encoding_type: 'unicode',
          content_id: 'content id',
          entity_id: 'entity id',
        },
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
        sms: {
          encodingType: 'unicode',
          contentId: 'content id',
          entityId: 'entity id',
        },
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
        webhook_url: 'https://example.com',
        webhook_version: 'v1',
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
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
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
  {
    label: 'send SMS message with old params',
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
      new SMS('too many secrets', '14152739164', '12126875309', 'nsa-1'),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send SMS message with error response',
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
      401,
      {
        type: 'https://developer.nexmo.com/api-errors/#unathorized',
        title: 'You did not provide correct credentials.',
        detail: `Check that you're using the correct credentials, and that your account has this feature enabled`,
        instance: 'bf0ca0bf927b3b52e3cb03217e1a1ddf',
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
    error: 'Request failed with status code 401',
    authType: AuthType.JWT,
  },
];
