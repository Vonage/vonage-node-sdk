import { MessengerCategory, MessengerTags } from '../../lib/index.js';
import {
  MessengerAudio,
  MessengerImage,
  MessengerVideo,
  MessengerText,
  MessengerFile,
  MessageParams,
  MessageSuccess,
  MessengerAudioRequest,
  MessengerTextRequest,
  MessengerImageRequest,
  MessengerVideoRequest,
  MessengerTextParams,
  MessengerAudioParams,
  MessengerImageParams,
  MessengerVideoParams,
  MessengerFileRequest,
  MessengerFileParams,
} from '../../lib/index.js';

import { Audio } from '../../lib/classes/Messenger/Audio';
import { File } from '../../lib/classes/Messenger/File';
import { Image } from '../../lib/classes/Messenger/Image';
import { Text } from '../../lib/classes/Messenger/Text';
import { Video } from '../../lib/classes/Messenger/Video';

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
        channel: 'messenger',
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
      new MessengerText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send text with ref and messenger properties',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        channel: 'messenger',
        message_type: 'text',
        client_ref: 'my-ref',
        webhook_url: 'https://example.com',
        webhook_version: 'v1',
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new MessengerText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        clientRef: 'my-ref',
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
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
        channel: 'messenger',
        message_type: 'text',
        client_ref: 'my-ref',
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
          category: MessengerTags.ACCOUNT_UPDATE,
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
        channel: 'messenger',
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
      new MessengerImage({
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
    label: 'send image with messenger properties and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new MessengerImage({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        image: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
      }),
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
        channel: 'messenger',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
          category: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send audio',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'audio',
        audio: {
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
      new MessengerAudio({
        from: '12126875309',
        to: '14152739164',
        audio: {
          url: 'https://example.com',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send audio with caption and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'audio',
        client_ref: 'my-ref',
        audio: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new MessengerAudio({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        audio: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send audio with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'audio',
        client_ref: 'my-ref',
        audio: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new Audio(
        {
          url: 'https://example.com',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref'
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
        channel: 'messenger',
        message_type: 'video',
        video: {
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
      new MessengerVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send video with messenger and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'video',
        client_ref: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new MessengerVideo({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send video with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'video',
        client_ref: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new Video(
        {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
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
        channel: 'messenger',
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
      new MessengerFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com',
        },
      }& MessengerFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send file with messenger and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'file',
        client_ref: 'my-ref',
        file: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new MessengerFile({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        file: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
      }& MessengerFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }},
  {
    label: 'send file with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'messenger',
        message_type: 'file',
        client_ref: 'my-ref',
        file: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerTags.ACCOUNT_UPDATE,
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
      new File(
        {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
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
        channel: 'messenger',
        message_type: 'text',
        failover: [
          {
            from: '12126875309',
            to: '14152739164',
            text: 'too many secrets',
            channel: 'messenger',
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
        channel: 'messenger',
        messageType: 'text',
        failover: [
          {
            from: '12126875309',
            to: '14152739164',
            text: 'too many secrets',
            channel: 'messenger',
            messageType: 'text',
          }
        ]
      },
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    }}
];
