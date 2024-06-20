import {
  MessageSuccess,
  RCSText,
  RCSImage,
  RCSVideo,
  RCSFile,
  RCSCustom,
} from '../../lib';

export default [
  {
    label: 'send text',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'rcs',
        message_type: 'text',
      },
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
      new RCSText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send text with all parameters',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'rcs',
        message_type: 'text',
        client_ref: 'nsa-1',
        ttl: 42,
      },
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
      new RCSText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        ttl: 42,
        clientRef: 'nsa-1',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send image',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
      },
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
      new RCSImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send image with all parameters',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        webhook_url: 'https://example.com',
        webhook_version: 'v1',
        ttl: 42,
      },
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
      new RCSImage({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        image: {
          url: 'https://example.com',
        },
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
        ttl: 42,
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send video',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'video',
        video: {
          url: 'https://example.com',
        },
      },
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
      new RCSVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send video with all parameters',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'video',
        client_ref: 'my-ref',
        ttl: 42,
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
      },
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
      new RCSVideo({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        ttl: 42,
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send custom',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'custom',
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      },
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
      new RCSCustom({
        from: '12126875309',
        to: '14152739164',
        custom: {
          foo: 'bar',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send custom with all parameters',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'custom',
        client_ref: 'my-ref',
        ttl: 42,
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      },
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
      new RCSCustom({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        ttl: 42,
        custom: {
          foo: 'bar',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send file',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'file',
        file: {
          url: 'https://example.com/my-file.png',
        },
      },
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
      new RCSFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com/my-file.png',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send file with all parameters',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'file',
        client_ref: 'my-ref',
        ttl: 42,
        file: {
          url: 'https://example.com/my-file.png',
        },
      },
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
      new RCSFile({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        ttl: 42,
        file: {
          url: 'https://example.com/my-file.png',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
];
