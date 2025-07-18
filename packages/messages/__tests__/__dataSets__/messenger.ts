import { MessengerCategory, MessengerTags } from '../../lib';
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
} from '../../lib';

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
      } as MessengerTextRequest,
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
      new MessengerText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
      } as MessengerTextParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerTextRequest,
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
      new MessengerText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        clientRef: 'my-ref',
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
        messenger: {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerTextParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.UPDATE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerTextRequest,
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
      new Text(
        'too many secrets', // text
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerCategory.UPDATE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
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
        channel: 'messenger',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
      } as MessengerImageRequest,
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
      new MessengerImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
      } as MessengerImageParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerImageRequest,
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
      new MessengerImage({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        image: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerImageParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerImageRequest,
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
      new Image(
        {
          url: 'https://example.com',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
      } as MessengerAudioRequest,
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
      new MessengerAudio({
        from: '12126875309',
        to: '14152739164',
        audio: {
          url: 'https://example.com',
        },
      } as MessengerAudioParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerAudioRequest,
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
      new MessengerAudio({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        audio: {
          url: 'https://example.com',
        },
        messenger: {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerAudioParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.MESSAGE_TAG,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerAudioRequest,
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
      new Audio(
        {
          url: 'https://example.com',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerCategory.MESSAGE_TAG,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref'
      ),
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
        channel: 'messenger',
        message_type: 'video',
        video: {
          url: 'https://example.com',
        },
      } as MessengerVideoRequest,
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
      new MessengerVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
      } as MessengerVideoParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerVideoRequest,
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
      new MessengerVideo({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerVideoParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerVideoRequest,
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
      new Video(
        {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
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
        channel: 'messenger',
        message_type: 'file',
        file: {
          url: 'https://example.com',
        },
      } as MessengerFileRequest,
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
      new MessengerFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com',
        },
      } as MessageParams & MessengerFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerFileRequest,
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
      new MessengerFile({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        file: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        messenger: {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessageParams & MessengerFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
      } as MessengerFileRequest,
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
      new File(
        {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: MessengerCategory.RESPONSE,
          tag: MessengerTags.ACCOUNT_UPDATE,
        },
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
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
    } as MessageSuccess,
  }
];
