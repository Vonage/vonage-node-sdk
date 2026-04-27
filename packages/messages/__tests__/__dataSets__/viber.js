import {
  ViberImage,
  ViberVideo,
  ViberText,
  ViberFile,
  ViberCategory,
  MessageSuccess,
  ViberTextRequest,
  ViberImageRequest,
  ViberVideoRequest,
  ViberFileRequest,
  ViberTextParams,
  ViberImageParams,
  ViberVideoParams,
  ViberFileParams,
  ViberService,
  ViberAction,
  Channels,
} from '../../lib/index.js';

import { Image } from '../../lib/classes/Viber/Image';
import { Text } from '../../lib/classes/Viber/Text';
import { MessageCategory } from '../../lib/enums/Viber/MessageCategory';

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
        channel: 'viber_service',
        message_type: 'text',
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send text with viber service',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'viber_service',
        message_type: 'text',
        client_ref: 'my-ref',
        webhook_url: 'https://example.com',
        webhook_version: 'v1',
        viber_service: {
          category: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          },
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        clientRef: 'my-ref',
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
        viberService: {
          category: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          }},
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send text with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'viber_service',
        message_type: 'text',
        client_ref: 'my-ref',
        viber_service: {
          category: 42,
          type: 'type',
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new Text(
        'too many secrets', // text
        '14152739164', // to
        '12126875309', // from
        {
          category: 42,
          type: 'type',
        },
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send image',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send image with viber service',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        client_ref: 'my-ref',
        viber_service: {
          category: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          },
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
        clientRef: 'my-ref',
        viberService: {
          category: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          }}}),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send image with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        client_ref: 'my-ref',
        viber_service: {
          category: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          },
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new Image(
        {
          url: 'https://example.com',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          },
        },
        'my-ref' // client Ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send video',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'video',
        video: {
          url: 'https://example.com',
          caption: 'my caption',
          thumb_url: 'https://example.com/thumb.jpg',
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
          caption: 'my caption',
          thumbUrl: 'https://example.com/thumb.jpg',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send video with viber service',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'video',
        video: {
          url: 'https://example.com',
        },
        client_ref: 'my-ref',
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
        clientRef: 'my-ref',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send file',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'file',
        file: {
          url: 'https://example.com',
        },
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send file with viber service',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'viber_service',
        message_type: 'file',
        file: {
          url: 'https://example.com/my-image.jpg',
          name: 'Keyboard Cat',
        },
        client_ref: 'my-ref',
      }: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com/my-image.jpg',
          name: 'Keyboard Cat',
        },
        clientRef: 'my-ref',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send text with failover',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'viber_service',
        message_type: 'text',
        failover: [
          {

            from: '12126875309',
            to: '14152739164',
            text: 'too many secrets',
            channel: 'viber_service',
            message_type: 'text',
          }
        ]
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
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'text',
        failover: [
          {
            from: '12126875309',
            to: '14152739164',
            text: 'too many secrets',
            channel: 'text',
          }
        ]
      },
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
];
