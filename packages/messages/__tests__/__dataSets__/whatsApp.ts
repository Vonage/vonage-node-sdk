import {
  MessageSuccess,
  WhatsAppLanguageCode,
  WhatsAppAudio,
  WhatsAppCustom,
  WhatsAppFile,
  WhatsAppSticker,
  WhatsAppTemplate,
  WhatsAppText,
  WhatsAppImage,
  WhatsAppVideo,
  WhatsAppPolicyType,
  WhatsAppAudioParams,
  WhatsAppAudioRequest,
  WhatsAppCustomParams,
  WhatsAppCustomRequest,
  WhatsAppFileParams,
  WhatsAppFileRequest,
  WhatsAppStickerParams,
  WhatsAppStickerUrlRequest,
  WhatsAppStickerIdRequest,
  WhatsAppTemplateParams,
  WhatsAppTemplateRequest,
  WhatsAppTextParams,
  WhatsAppTextRequest,
  WhatsAppImageParams,
  WhatsAppImageRequest,
  WhatsAppVideoParams,
  WhatsAppVideoRequest,
  UpdateMessageStatus,
  UpdateMessageRequest,
} from '../../lib';

import { Audio } from '../../lib/classes/WhatsApp/Audio';
import { CustomMessage } from '../../lib/classes/WhatsApp/CustomMessage';
import { File } from '../../lib/classes/WhatsApp/File';
import { Image } from '../../lib/classes/WhatsApp/Image';
import { TemplateMessage } from '../../lib/classes/WhatsApp/TemplateMessage';
import { Text } from '../../lib/classes/WhatsApp/Text';
import { Video } from '../../lib/classes/WhatsApp/Video';

export default [
  {
    label: 'send text',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'text',
        text: 'Too many secrets',
      } as WhatsAppTextRequest,
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
      new WhatsAppText({
        from: '12126875309',
        to: '14152739164',
        text: 'Too many secrets',
      } as WhatsAppTextParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send text with client ref and context',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'text',
        client_ref: 'my-ref',
        context: {
          message_uuid: '00000000-0000-0000-0000-000000000000',
        },
        text: 'Too many secrets',
        webhook_url: 'https://example.com',
        webhook_version: 'v1',
      } as WhatsAppTextRequest,
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
      new WhatsAppText({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        text: 'Too many secrets',
        context: {
          messageUUID: '00000000-0000-0000-0000-000000000000',
        },
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
      } as WhatsAppTextParams),
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
        channel: 'whatsapp',
        message_type: 'text',
        client_ref: 'my-ref',
        text: 'Too many secrets',
      } as WhatsAppTextRequest,
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
        'Too many secrets', // text
        '14152739164', // to
        '12126875309', // from
        'my-ref' // Client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send template',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'template',
        whatsapp: {
          policy: 'deterministic',
          locale: WhatsAppLanguageCode.ENGLISH_US,
        } as WhatsAppPolicyType,
        template: {
          name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
          parameters: ['foo', 'bar'],
        },
      } as WhatsAppTemplateRequest,
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
      new WhatsAppTemplate({
        from: '12126875309',
        to: '14152739164',
        whatsapp: {
          policy: 'deterministic',
          locale: WhatsAppLanguageCode.ENGLISH_US,
        },
        template: {
          name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
          parameters: ['foo', 'bar'],
        },
      } as WhatsAppTemplateParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send template with client ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'template',
        client_ref: 'my-ref',
        whatsapp: {
          policy: 'deterministic',
          locale: WhatsAppLanguageCode.ENGLISH_US,
        } as WhatsAppPolicyType,
        template: {
          name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
          parameters: ['foo', 'bar'],
        },
      } as WhatsAppTemplateRequest,
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
      new WhatsAppTemplate({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        whatsapp: {
          policy: 'deterministic',
          locale: WhatsAppLanguageCode.ENGLISH_US,
        },
        template: {
          name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
          parameters: ['foo', 'bar'],
        },
      } as WhatsAppTemplateParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send template with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'template',
        client_ref: 'my-ref',
        whatsapp: {
          policy: 'deterministic',
          locale: WhatsAppLanguageCode.ENGLISH_US,
        } as WhatsAppPolicyType,
        template: {
          name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
          parameters: ['foo', 'bar'],
        },
      } as WhatsAppTemplateRequest,
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
      new TemplateMessage(
        {
          name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
          parameters: ['foo', 'bar'],
        },
        '14152739164', // to
        '12126875309', // from
        WhatsAppLanguageCode.ENGLISH_US, // locale
        'my-ref' // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send url sticker',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'sticker',
        sticker: {
          url: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerUrlRequest,
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
      new WhatsAppSticker({
        from: '12126875309',
        to: '14152739164',
        sticker: {
          url: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send url sticker with clientRef',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'sticker',
        client_ref: 'my-ref',
        sticker: {
          url: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerUrlRequest,
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
      new WhatsAppSticker({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        sticker: {
          url: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send id sticker',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'sticker',
        sticker: {
          id: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerIdRequest,
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
      new WhatsAppSticker({
        from: '12126875309',
        to: '14152739164',
        sticker: {
          id: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send id sticker with client ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'sticker',
        client_ref: 'my-ref',
        sticker: {
          id: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerIdRequest,
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
      new WhatsAppSticker({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        sticker: {
          id: 'https://example.com/my-sticker.png',
        },
      } as WhatsAppStickerParams),
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
        channel: 'whatsapp',
        message_type: 'file',
        file: {
          url: 'https://example.com/my-file.png',
        },
      } as WhatsAppFileRequest,
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
      new WhatsAppFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com/my-file.png',
        },
      } as WhatsAppFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send file with caption and ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'file',
        client_ref: 'my-ref',
        file: {
          url: 'https://example.com/my-file.png',
          caption: 'a snake on a plane',
          name: 'my-file.png',
        },
      } as WhatsAppFileRequest,
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
      new WhatsAppFile({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        file: {
          url: 'https://example.com/my-file.png',
          caption: 'a snake on a plane',
          name: 'my-file.png',
        },
      } as WhatsAppFileParams),
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
        channel: 'whatsapp',
        message_type: 'file',
        client_ref: 'my-ref',
        file: {
          url: 'https://example.com/my-file.png',
          caption: 'a snake on a plane',
        },
      } as WhatsAppFileRequest,
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
          url: 'https://example.com/my-file.png',
          caption: 'a snake on a plane',
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
    label: 'send custom',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'custom',
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      } as WhatsAppCustomRequest,
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
      new WhatsAppCustom({
        from: '12126875309',
        to: '14152739164',
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      } as WhatsAppCustomParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send custom with client ref',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'custom',
        client_ref: 'my-ref',
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      } as WhatsAppCustomRequest,
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
      new WhatsAppCustom({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      } as WhatsAppCustomParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send custom with old class',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'custom',
        client_ref: 'my-ref',
        custom: {
          foo: 'bar',
        } as Record<string, unknown>,
      } as WhatsAppCustomRequest,
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
      new CustomMessage(
        {
          foo: 'bar',
        } as Record<string, unknown>,
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
    label: 'send image',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'image',
        image: {
          url: 'https://example.com',
        },
      } as WhatsAppImageRequest,
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
      new WhatsAppImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
      } as WhatsAppImageParams),
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
        channel: 'whatsapp',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
          caption: 'A cat',
        },
      } as WhatsAppImageRequest,
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
      new WhatsAppImage({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        image: {
          url: 'https://example.com',
          caption: 'A cat',
        },
      } as WhatsAppImageParams),
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
        channel: 'whatsapp',
        client_ref: 'my-ref',
        message_type: 'image',
        image: {
          url: 'https://example.com',
          caption: 'A cat',
        },
      } as WhatsAppImageRequest,
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
        },
        '14152739164', // to
        '12126875309', // from
        'my-ref' // client reg
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
        channel: 'whatsapp',
        message_type: 'audio',
        audio: {
          url: 'https://example.com',
        },
      } as WhatsAppAudioRequest,
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
      new WhatsAppAudio({
        from: '12126875309',
        to: '14152739164',
        audio: {
          url: 'https://example.com',
        },
      } as WhatsAppAudioParams),
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
        channel: 'whatsapp',
        message_type: 'audio',
        client_ref: 'my-ref',
        audio: {
          url: 'https://example.com',
          caption: 'A cool track',
        },
      } as WhatsAppAudioRequest,
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
      new WhatsAppAudio({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        audio: {
          url: 'https://example.com',
          caption: 'A cool track',
        },
      } as WhatsAppAudioParams),
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
        channel: 'whatsapp',
        message_type: 'audio',
        client_ref: 'my-ref',
        audio: {
          url: 'https://example.com',
          caption: 'A cool track',
        },
      } as WhatsAppAudioRequest,
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
    label: 'send video',
    request: [
      '/v1/messages',
      'POST',
      {
        from: '12126875309',
        to: '14152739164',
        channel: 'whatsapp',
        message_type: 'video',
        video: {
          url: 'https://example.com',
        },
      } as WhatsAppVideoRequest,
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
      new WhatsAppVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
      } as WhatsAppVideoParams),
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
        channel: 'whatsapp',
        message_type: 'video',
        client_ref: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Click me',
        },
      } as WhatsAppVideoRequest,
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
      new WhatsAppVideo({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Click me',
        },
      } as WhatsAppVideoParams),
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
        channel: 'whatsapp',
        message_type: 'video',
        client_ref: 'my-ref',
        video: {
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          caption: 'Click me',
        },
      } as WhatsAppVideoRequest,
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
    baseUrl: 'https://api.vonage.com',
    label: 'update a message as read',
    request: [
      '/v1/messages/1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      'PATCH',
      {
        status: 'read',
      } as UpdateMessageRequest,
    ],
    response: [
      202,
    ],
    clientMethod: 'updateMessage',
    parameters: [
      '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      UpdateMessageStatus.READ
    ],
    expected: true
  },
];
