import {
  MessageSuccess,
  RCSText,
  RCSImage,
  RCSVideo,
  RCSFile,
  RCSCustom,
  UpdateMessageRequest,
  UpdateMessageStatus,
  RCSCreateCalendarEventSuggestion,
  RCSDialActionSuggestion,
  RCSOpenURLSuggestion,
  RCSOpenURLWebviewSuggestion,
  RCSReplySuggestion,
  RCSShareLocationSuggestion,
  RCSViewLocationSuggestion,
  Channels,
  RCSSuggestionType
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
    label: 'send text with suggestions',
    request: [
      '/v1/messages',
      'POST',
      {
        from: 'Vonage',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'rcs',
        message_type: 'text',
        suggestions: [
          {
            type: RCSSuggestionType.CREATE_CALENDAR_EVENT,
            start_time: '2015-10-21T10:00:00Z',
            end_time: '2015-10-21T11:00:00Z',
            title: 'Sports Alamac',
            text: 'We gotta save your kids',
            postback_data: 'QmlmZidzIGhpbGwgdmFsbGV5IGNhc2lubw'
          },
          {
            type: RCSSuggestionType.DIAL,
            phone_number: '+14152739164',
            text: 'Janick Black Box',
            postback_data: 'QmlmZidzIGhpbGwgdmFsbGV5IGNhc2lubw',
          },
          {
            type: RCSSuggestionType.OPEN_URL,
            url: 'https://youtu.be/dQw4w9WgXcQ',
            text: 'Never going to give you up',
            postback_data: 'TmV2ZXIgZ29pbmcgdG8gbGV0IHlvdSBkb3du',
          },
          {
            type: RCSSuggestionType.OPEN_URL_IN_WEBVIEW,
            url: 'https://youtu.be/dQw4w9WgXcQ',
            view_mode: 'FULL',
            text: 'Never going to give you up',
            postback_data: 'TmV2ZXIgZ29pbmcgdG8gbGV0IHlvdSBkb3du',
          },
          {
            type: RCSSuggestionType.REPLY,
            text: 'Never going to give you up',
            postback_data: 'Zm9yZCwgSSB0aGluayBJJ20gYSBjb3VjaAo',
          },
          {
            type: RCSSuggestionType.SHARE_LOCATION,
            text: 'The only place you are allowed to cry',
            postback_data: 'Z3JhbmQgY2FueW9u',
          },
          {
            type: RCSSuggestionType.VIEW_LOCATION,
            text: 'The only place you are allowed to cry',
            latitude: '36.05443',
            longitude: '-112.13934',
            pin_label: 'Go Here',
            postback_data: 'Z3JhbmQgY2FueW9u',
          },
        ],
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
        suggestions: [
          new RCSCreateCalendarEventSuggestion({
            startDate: '2015-10-15T10:00:00Z',
            endDate: '2015-10-15T11:00:00Z',
            title: 'Sports Alamac',
            text: 'We gotta save your kids',
            postbackData: 'QmlmZidzIGhpbGwgdmFsbGV5IGNhc2lubw'
          }),
          new RCSDialActionSuggestion({
            phoneNumber: '+14152739164',
            text: 'Janick Black Box',
            postbackData: 'QmlmZidzIGhpbGwgdmFsbGV5IGNhc2lubw',
          }),
          new RCSOpenURLSuggestion({
            url: 'https://youtu.be/dQw4w9WgXcQ',
            text: 'Never going to give you up',
            postbackData: 'TmV2ZXIgZ29pbmcgdG8gbGV0IHlvdSBkb3du',
          }),
          new RCSOpenURLWebviewSuggestion({
            url: 'https://youtu.be/dQw4w9WgXcQ',
            viewMode: 'FULL',
            text: 'Never going to give you up',
            postbackData: 'TmV2ZXIgZ29pbmcgdG8gbGV0IHlvdSBkb3du',
          }),
          new RCSReplySuggestion({
            text: 'Never going to give you up',
            postbackData: 'Zm9yZCwgSSB0aGluayBJJ20gYSBjb3VjaAo',
          }),
          new RCSShareLocationSuggestion({
            text: 'The only place you are allowed to cry',
            postbackData: 'Z3JhbmQgY2FueW9u',
          }),
          new RCSViewLocationSuggestion({
            text: 'The only place you are allowed to cry',
            latitude: '36.05443',
            longitude: '-112.13934',
            pinLabel: 'Go Here',
            postbackData: 'Z3JhbmQgY2FueW9u',
          }),
        ]
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
  },
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
        failover: [
          {
            from: 'Vonage',
            to: '14152739164',
            text: 'too many secrets',
            channel: 'rcs',
            message_type: 'text',
          }
        ]

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
      {
        from: 'Vonage',
        to: '14152739164',
        text: 'too many secrets',
        channel: Channels.RCS,
        messageType: 'text',
        failover: [
          {
            from: 'Vonage',
            to: '14152739164',
            text: 'too many secrets',
            channel: 'rcs',
            message_type: 'text',
          }
        ]
      },
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  }
];
