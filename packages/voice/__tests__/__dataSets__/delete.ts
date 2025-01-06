import { callPhone } from '../common';

export default [
  {
    label: 'unsubscribe to DTMF events',
    requests: [
      [
        `/v1/calls/${callPhone.uuid}/input/dtmf`,
        'DELETE',
      ],
    ],
    responses: [[200]],
    clientMethod: 'unsubscribeDTMF',
    parameters: [callPhone.uuid],
    generator: false,
    error: false,
    expected: undefined,
  },
];
