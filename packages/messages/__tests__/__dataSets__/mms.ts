import {
  MMSAudio,
  MMSImage,
  MMSVcard,
  MMSVideo,
  MessageSuccess,
  MMSAudioRequest,
  MMSImageRequest,
  MMSVcardRequest,
  MMSVideoRequest,
  MessageParamsAudio,
  MessageParamsImage,
  MessageParamsVcard,
  MessageParamsVideo,
} from '../../lib';

import { Audio } from '../../lib/classes/MMS/Audio';
import { Image } from '../../lib/classes/MMS/Image';
import { Video } from '../../lib/classes/MMS/Video';
import { Vcard } from '../../lib/classes/MMS/Vcard';

export default [
  {
    label: 'send image',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
      } as MMSImageRequest,
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
      new MMSImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
      } as MessageParamsImage),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send image with caption and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
          caption: 'A cat',
        },
        webhook_url: 'https://example.com',
        webhook_version: 'v1',
      } as MMSImageRequest,
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
      new MMSImage({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        image: {
          url: 'https://example.com',
          caption: 'A cat',
        },
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send image with old class ',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
          caption: 'A cat',
        },
      } as MMSImageRequest,
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
          caption: 'A cat',
        }, // Image
        '14152739164', // to
        '12126875309', // from
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
        channel: 'mms',
        message_type: 'audio',
        audio: {
          url: 'https://example.com',
        },
      } as MMSAudioRequest,
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
      new MMSAudio({
        from: '12126875309',
        to: '14152739164',
        audio: {
          url: 'https://example.com',
        },
      } as MessageParamsAudio),
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
        channel: 'mms',
        message_type: 'audio',
        client_ref: 'my-ref',
        audio: {
          url: 'https://example.com',
          caption: 'A cool track',
        },
      } as MMSAudioRequest,
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
      new MMSAudio({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        audio: {
          url: 'https://example.com',
          caption: 'A cool track',
        },
      }),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send audio using old class ',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'audio',
        client_ref: 'my-ref',
        audio: {
          url: 'https://example.com',
          caption: 'A cool track',
        },
      } as MMSAudioRequest,
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
          caption: 'A cool track',
        }, // Audio
        '14152739164', // To
        '12126875309', // From
        'my-ref' // Client Ref
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
        channel: 'mms',
        message_type: 'video',
        video: {
          url: 'https://example.com',
        },
      } as MMSVideoRequest,
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
      new MMSVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
      } as MessageParamsVideo),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send video with caption and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'video',
        client_ref: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Click me',
        },
      } as MMSVideoRequest,
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
      new MMSVideo({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Click me',
        },
      } as MessageParamsVideo),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send video with old class ',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'video',
        client_ref: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Click me',
        },
      } as MMSVideoRequest,
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
          caption: 'Click me',
        },
        '14152739164', // to
        '12126875309', // from
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send vcard',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'vcard',
        vcard: {
          url: 'https://example.com',
        },
      } as MMSVcardRequest,
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
      new MMSVcard({
        from: '12126875309',
        to: '14152739164',
        vcard: {
          url: 'https://example.com',
        },
      } as MessageParamsVcard),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send vcard with client ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'vcard',
        vcard: {
          url: 'https://example.com',
          caption: 'My vcard',
        },
        client_ref: 'my-ref',
      } as MMSVcardRequest,
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
      new MMSVcard({
        from: '12126875309',
        to: '14152739164',
        vcard: {
          url: 'https://example.com',
          caption: 'My vcard',
        },
        clientRef: 'my-ref',
      } as MessageParamsVcard),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send vcard with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'vcard',
        vcard: {
          url: 'https://example.com',
        },
        client_ref: 'my-ref',
      } as MMSVcardRequest,
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
      new Vcard(
        'https://example.com',
        '14152739164', // to
        '12126875309', // from
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send image with failover',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'mms',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
        failover: [
          {
            from: '12126875309',
            to: '14152739164',
            channel: 'mms',
            message_type: 'image',
            image: {
              url: 'https://example.com',
            },
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
        image: {
          url: 'https://example.com',
        },
        channel: 'mms',
        messageType: 'image',
        failover: [
          {
            from: '12126875309',
            to: '14152739164',
            channel: 'mms',
            messageType: 'image',
            image: {
              url: 'https://example.com',
            },
          }
        ]
      },
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  }
];
