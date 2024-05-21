import { NCCOActions, TTSLanguages } from '../../lib/enums';
import { CallUpdateResult, TalkAction } from '../../lib/types/index';
import { callPhone } from '../common';

export default [
  {
    label: 'play dtmf',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}/dtmf`,
        'PUT',
        {
          digits: '5',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          uuid: callPhone.uuid,
          message: 'DTMF Sent',
        } as CallUpdateResult,
      ],
    ],
    clientMethod: 'playDTMF',
    parameters: [callPhone.uuid, '5'],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      message: 'DTMF Sent',
    } as CallUpdateResult,
  },
  {
    label: 'play tts',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}/talk`,
        'PUT',
        {
          text: "I'll always dial the K for you",
          language: TTSLanguages.EN_US,
          style: '0',
          premium: true,
          loop: 1,
          level: '0.4',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          uuid: callPhone.uuid,
          message: 'Talk Started',
        } as CallUpdateResult,
      ],
    ],
    clientMethod: 'playTTS',
    parameters: [
      callPhone.uuid,
      {
        action: NCCOActions.TALK,
        text: "I'll always dial the K for you",
        language: TTSLanguages.EN_US,
        style: '0',
        premium: true,
        loop: 1,
        level: '0.4',
        bargeIn: true,
      } as TalkAction,
    ],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      message: 'Talk Started',
    } as CallUpdateResult,
  },
  {
    label: 'stop TTS',
    requests: [[`/v1/calls/${callPhone.uuid}/talk`, 'DELETE']],
    responses: [
      [
        200,
        {
          uuid: callPhone.uuid,
          message: 'Talk Stopped',
        } as CallUpdateResult,
      ],
    ],
    clientMethod: 'stopTTS',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      message: 'Talk Stopped',
    } as CallUpdateResult,
  },
  {
    label: 'stream audio',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}/stream`,
        'PUT',
        {
          stream_url: [
            'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14dkZaam81UGdHMA==',
          ],
          loop: 42,
          level: '0.7',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          uuid: callPhone.uuid,
          message: 'Stream Started',
        } as CallUpdateResult,
      ],
    ],
    clientMethod: 'streamAudio',
    parameters: [
      callPhone.uuid,
      'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14dkZaam81UGdHMA==',
      42,
      '0.7',
    ],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      message: 'Stream Started',
    } as CallUpdateResult,
  },
  {
    label: 'stop streaming audio',
    requests: [[`/v1/calls/${callPhone.uuid}/stream`, 'DELETE']],
    responses: [
      [
        200,
        {
          uuid: callPhone.uuid,
          message: 'Stream Stopped',
        } as CallUpdateResult,
      ],
    ],
    clientMethod: 'stopStreamAudio',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      message: 'Stream Stopped',
    } as CallUpdateResult,
  },
  {
    label: 'transfer call with answer URL',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}`,
        'PUT',
        {
          action: 'transfer',
          destination: {
            type: 'ncco',
            url: ['https://example.com'],
          },
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'transferCallWithURL',
    parameters: [callPhone.uuid, 'https://example.com'],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'transfer call with NCCO',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}`,
        'PUT',
        {
          action: 'transfer',
          destination: {
            type: 'ncco',
            ncco: [
              {
                action: NCCOActions.TALK,
                text: "I'll always dial the K for you",
                language: TTSLanguages.EN_US,
                style: '0',
                premium: true,
                loop: 1,
                level: '0.4',
                bargeIn: true,
              },
            ],
          },
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'transferCallWithNCCO',
    parameters: [
      callPhone.uuid,
      [
        {
          action: NCCOActions.TALK,
          text: "I'll always dial the K for you",
          language: 'en-US',
          style: '0',
          premium: true,
          loop: 1,
          level: '0.4',
          bargeIn: true,
        },
      ],
    ],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'hangup call',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}`,
        'PUT',
        {
          action: 'hangup',
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'hangupCall',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'mute call',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}`,
        'PUT',
        {
          action: 'mute',
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'muteCall',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'earmuff call',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}`,
        'PUT',
        {
          action: 'earmuff',
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'earmuffCall',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: undefined,
  },
  {
    label: 'unearmuff call',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}`,
        'PUT',
        {
          action: 'unearmuff',
        },
      ],
    ],
    responses: [[204]],
    clientMethod: 'unearmuffCall',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: undefined,
  },
];
