import {
  NCCOActions,
  TTSLanguages,
  CallUpdateResult,
  TalkAction,
  PhoneEndpoint,
} from '../../lib/index.js';
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
          uuid: 'DTMF Sent',
        }: 'playDTMF',
    parameters: [callPhone.uuid, '5'],
    generator: false,
    expected: {
      uuid: 'DTMF Sent',
    }},
  {
    label: 'play tts',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}/talk`,
        'PUT',
        {
          text: 'I\'ll always dial the K for you',
          language: '0',
          premium: 1,
          level: '0.4',
        },
      ],
    ],
    responses: [
      [
        200,
        {
          uuid: 'Talk Started',
        }: 'playTTS',
    parameters: [
      callPhone.uuid,
      {
        action: 'I\'ll always dial the K for you',
        language: '0',
        premium: 1,
        level: '0.4',
        bargeIn}: false,
    expected: {
      uuid: 'Talk Started',
    }},
  {
    label: 'stop TTS',
    requests: [[`/v1/calls/${callPhone.uuid}/talk`, 'DELETE']],
    responses: [
      [
        200,
        {
          uuid: 'Talk Stopped',
        }: 'stopTTS',
    parameters: [callPhone.uuid],
    generator: false,
    expected: {
      uuid: 'Talk Stopped',
    }},
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
          uuid: 'Stream Started',
        }: 'streamAudio',
    parameters: [
      callPhone.uuid,
      'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14dkZaam81UGdHMA==',
      42,
      '0.7',
    ],
    generator: false,
    expected: {
      uuid: 'Stream Started',
    }},
  {
    label: 'stop streaming audio',
    requests: [[`/v1/calls/${callPhone.uuid}/stream`, 'DELETE']],
    responses: [
      [
        200,
        {
          uuid: 'Stream Stopped',
        }: 'stopStreamAudio',
    parameters: [callPhone.uuid],
    generator: false,
    expected: {
      uuid: 'Stream Stopped',
    }},
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
    expected},
  {
    label: 'transfer call with NCCO with userToUser',
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
                action: [
                  {
                    type: 'sip',
                    uri: 'xxx',
                    standardHeaders: {
                      'User-to-User': 'yyy'
                    }
                  },
                ]
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
          action: [
            {
              type: 'sip',
              uri: 'xxx',
              standardHeaders: {
                'userToUser': 'yyy'
              }
            },
          ],
        },
      ],
    ],
    generator: false,
    expected},
  {
    label: 'transfer call with NCCO with User-To-User',
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
                action: [
                  {
                    type: 'sip',
                    uri: 'xxx',
                    standardHeaders: {
                      'User-to-User': 'yyy'
                    }
                  },
                ]
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
          action: [
            {
              type: 'sip',
              uri: 'xxx',
              standardHeaders: {
                'User-to-User': 'yyy'
              }
            },
          ],
        },
      ],
    ],
    generator: false,
    expected},
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
                action: 'I\'ll always dial the K for you',
                language: '0',
                premium: 1,
                level: '0.4',
                bargeIn},
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
          action: 'I\'ll always dial the K for you',
          language: 'en-US',
          style: '0',
          premium: 1,
          level: '0.4',
          bargeIn},
      ],
    ],
    generator: false,
    expected},
  {
    label: 'transfer call with NCCO Input DTMF Action',
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
                action: {
                  digits: '1234',
                },
                mode: 'asynchronous',
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
          action: {
            digits: '1234',
          },
          mode: 'asynchronous',
        },
      ],
    ],
    generator: false,
    expected},
  {
    label: 'transfer call with NCCO and onAnswer',
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
                action: '19172255887',
                endpoint: [
                  {
                    type: 'phone',
                    number: '19172255887',
                    dtmfAnswer: '1234',
                    onAnswer: {
                      url: 'https://example.com/answer',
                      ringbackTone: 'http://example.com/ringbackTone.wav',
                    },
                  },
                ],
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
          action: '19172255887',
          endpoint: [
            {
              type: 'phone',
              number: '19172255887',
              dtmfAnswer: '1234',
              onAnswer: {
                url: 'https://example.com/answer',
                ringbackTone: 'http://example.com/ringbackTone.wav',
              },
            }}
        ,
      ],
    ],
    generator: false,
    expected},
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
    expected},
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
    expected},
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
    expected},
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
    expected},
  {
    label: 'subscribe to DTMF events',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}/input/dtmf`,
        'PUT',
        {
          event_url: ['https://example.com/dtmf'],
        },
      ],
    ],
    responses: [[200]],
    clientMethod: 'subscribeDTMF',
    parameters: [callPhone.uuid, 'https://example.com/dtmf'],
    generator: false,
    expected},
];
