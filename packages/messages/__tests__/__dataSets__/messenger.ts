import { MessengerCategory, MessengerTags } from '../../lib';
import {
  MessengerAudio,
  MessengerImage,
  MessengerVideo,
  MessengerText,
  MessengerFile,
} from '../../lib';
import { MessageSuccess } from '../../lib';
import {
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

export default [
  {
    label: 'send Messenger text',
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
    label: 'send Messenger text with ref and messenger properties',
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
    label: 'send Messenger image',
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
    label: 'send Messenger image with messenger properties and ref',
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
    label: 'send Messenger audio',
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
    label: 'send Messenger audio with caption and ref',
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
    label: 'send Messenger video',
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
    label: 'send Messenger video with messenger and ref',
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
    label: 'send Messenger file',
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
      } as MessengerFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Messenger file with messenger and ref',
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
      } as MessengerFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
];
