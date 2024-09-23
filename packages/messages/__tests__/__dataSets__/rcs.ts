import {
  MessageSuccess,
  RCSText,
  RCSImage,
  RCSVideo,
  RCSFile,
  RCSCustom,
  UpdateMessageRequest,
  UpdateMessageStatus
} from '../../lib';

export default [
  {
    label: 'send text',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'Vonage',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'rcs',
        message_type: 'text',
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSText({
        from: 'Vonage',
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
        from: 'Vonage',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'rcs',
        message_type: 'text',
        client_ref: 'nsa-1',
        ttl: 42,
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSText({
        from: 'Vonage',
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
        from: 'Vonage',
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
        from: 'Vonage',
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
        from: 'Vonage',
        to: '14152739164',
        channel: 'rcs',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        webhook_url: 'https://example.com',
        ttl: 42,
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSImage({
        from: 'Vonage',
        to: '14152739164',
        clientRef: 'my-ref',
        image: {
          url: 'https://example.com',
        },
        webhookUrl: 'https://example.com',
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
        from: 'Vonage',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'video',
        video: {
          url: 'https://example.com',
        },
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSVideo({
        from: 'Vonage',
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
        from: 'Vonage',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'video',
        client_ref: 'my-ref',
        ttl: 42,
        video: {
          url: 'http://example.com/video.mp4',
        },
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSVideo({
        from: 'Vonage',
        to: '14152739164',
        clientRef: 'my-ref',
        ttl: 42,
        video: {
          url: 'http://example.com/video.mp4',
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
        from: 'Vonage',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'custom',
        custom: {
          contentMessage: {
            text: 'Check out our latest offers!',
            suggestions: [
              {
                action: {
                  text: 'Open product page',
                  postbackData: 'postback_data_1234',
                  openUrlAction: {
                    url: 'http://example.com/',
                  },
                },
              },
            ],
          },
        } as Record<string, unknown>,
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSCustom({
        from: 'Vonage',
        to: '14152739164',
        custom: {
          contentMessage: {
            text: 'Check out our latest offers!',
            suggestions: [
              {
                action: {
                  text: 'Open product page',
                  postbackData: 'postback_data_1234',
                  openUrlAction: {
                    url: 'http://example.com/',
                  },
                },
              },
            ],
          },
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
        from: 'Vonage',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'custom',
        client_ref: 'my-ref',
        ttl: 42,
        custom: {
          contentMessage: {
            text: 'Check out our latest offers!',
            suggestions: [
              {
                action: {
                  text: 'Open product page',
                  postbackData: 'postback_data_1234',
                  openUrlAction: {
                    url: 'http://example.com/',
                  },
                },
              },
            ],
          },
        } as Record<string, unknown>,
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSCustom({
        from: 'Vonage',
        to: '14152739164',
        clientRef: 'my-ref',
        ttl: 42,
        custom: {
          contentMessage: {
            text: 'Check out our latest offers!',
            suggestions: [
              {
                action: {
                  text: 'Open product page',
                  postbackData: 'postback_data_1234',
                  openUrlAction: {
                    url: 'http://example.com/',
                  },
                },
              },
            ],
          },
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
        from: 'Vonage',
        to: '14152739164',
        channel: 'rcs',
        message_type: 'file',
        file: {
          url: 'https://example.com/my-file.png',
        },
      },
    ],
    response: [
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSFile({
        from: 'Vonage',
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
        from: 'Vonage',
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
      202,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new RCSFile({
        from: 'Vonage',
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
  {
    baseUrl: 'https://api.vonage.com',
    label: 'update a message as read',
    request: [
      '/v1/messages/1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      'PATCH',
      {
        status: 'revoked',
      } as UpdateMessageRequest,
    ],
    response: [
      202,
    ],
    clientMethod: 'updateMessage',
    parameters: [
      '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      UpdateMessageStatus.REVOKED
    ],
    expected: true
  }
];
