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
    label: 'send WhatsApp text',
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
    label: 'send WhatsApp text with client ref',
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
        webhookUrl: 'https://example.com',
        webhookVersion: 'v1',
      } as WhatsAppTextParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send WhatsApp text with old class',
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
    label: 'send WhatsApp template',
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
    label: 'send WhatsApp template with client ref',
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
    label: 'send WhatsApp template with old class',
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
    label: 'send WhatsApp url sticker',
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
    label: 'send WhatsApp url sticker with clientRef',
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
    label: 'send WhatsApp id sticker',
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
    label: 'send WhatsApp id sticker with client ref',
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
    label: 'send WhatsApp file',
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
    label: 'send WhatsApp file with caption and ref',
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
      new WhatsAppFile({
        from: '12126875309',
        to: '14152739164',
        clientRef: 'my-ref',
        file: {
          url: 'https://example.com/my-file.png',

          caption: 'a snake on a plane',
        },
      } as WhatsAppFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send WhatsApp file with old class',
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
    label: 'send WhatsApp custom',
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
    label: 'send WhatsApp custom with client ref',
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
    label: 'send WhatsApp custom with old class',
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
    label: 'send WhatsApp image',
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
    label: 'send WhatsApp image with caption and ref',
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
    label: 'send WhatsApp image with old class',
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
    label: 'send WhatsApp audio',
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
    label: 'send WhatsApp audio with caption and ref',
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
    label: 'send WhatsApp audio with old class',
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
    label: 'send WhatsApp video',
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
    label: 'send WhatsApp video with caption and ref',
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
    label: 'send WhatsApp video with old class',
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
];
