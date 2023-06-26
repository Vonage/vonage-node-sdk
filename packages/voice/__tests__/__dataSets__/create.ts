import {
  AdvancedMachineDetectionMode,
  CallDirection,
  CallStatus,
  HttpMethod,
  MachineDetectionBehavior,
  NCCOActions,
} from '../../lib/enums';
import {
  CallResult,
  CallWithAnswerURL,
  CallWithNCCO,
  CreateCallResponse,
} from '../../lib/types/index';
import { callPhone } from '../common';

export default [
  {
    label: 'create a call with NCCO',
    requests: [
      [
        `/v1/calls?`,
        'POST',
        {
          to: [
            {
              type: 'phone',
              number: '19162255887',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          ncco: [
            {
              action: NCCOActions.TALK,
              text: "I'll always dial the K for you",
            },
          ],
          random_from_number: false,
          event_url: ['example.com'],
          event_method: HttpMethod.GET,
          machine_detection: MachineDetectionBehavior.CONTINUE,
          advanced_machine_detection: {
            behavior: MachineDetectionBehavior.HANGUP,
            mode: AdvancedMachineDetectionMode.DETECT,
            beep_timeout: 42,
          },
          length_timer: 84,
          ringing_timer: 126,
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: callPhone.uuid,
          status: CallStatus.STARTED,
          direction: CallDirection.OUTBOUND,
          conversation_uuid: callPhone.conversationUUID,
        } as CreateCallResponse,
      ],
    ],
    clientMethod: 'createOutboundCall',
    parameters: [
      {
        to: [
          {
            type: 'phone',
            number: '19162255887',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
        ncco: [
          {
            action: NCCOActions.TALK,
            text: "I'll always dial the K for you",
          },
        ],
        randomFromNumber: false,
        eventUrl: ['example.com'],
        eventMethod: HttpMethod.GET,
        machineDetection: MachineDetectionBehavior.CONTINUE,
        advancedMachineDetection: {
          behavior: MachineDetectionBehavior.HANGUP,
          mode: AdvancedMachineDetectionMode.DETECT,
          beepTimeout: 42,
        },
        lengthTimer: 84,
        ringingTimer: 126,
      } as CallWithNCCO,
    ],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      status: CallStatus.STARTED,
      direction: CallDirection.OUTBOUND,
      conversation_uuid: callPhone.conversationUUID,
      conversationUUID: callPhone.conversationUUID,
    } as CallResult,
  },
  {
    label: 'create a call with answer url',
    requests: [
      [
        `/v1/calls?`,
        'POST',
        {
          to: [
            {
              type: 'phone',
              number: '19162255887',
            },
          ],
          from: {
            type: 'phone',
            number: '14152739164',
          },
          answer_url: ['https://example.com/answer'],
          answer_method: HttpMethod.GET,
          random_from_number: false,
          event_url: ['example.com'],
          event_method: HttpMethod.GET,
          machine_detection: MachineDetectionBehavior.CONTINUE,
          advanced_machine_detection: {
            behavior: MachineDetectionBehavior.HANGUP,
            mode: AdvancedMachineDetectionMode.DETECT,
            beep_timeout: 42,
          },
          length_timer: 84,
          ringing_timer: 126,
        },
      ],
    ],
    responses: [
      [
        201,
        {
          uuid: callPhone.uuid,
          status: CallStatus.STARTED,
          direction: CallDirection.OUTBOUND,
          conversation_uuid: callPhone.conversationUUID,
        } as CreateCallResponse,
      ],
    ],
    clientMethod: 'createOutboundCall',
    parameters: [
      {
        answerUrl: ['https://example.com/answer'],
        answerMethod: HttpMethod.GET,
        to: [
          {
            type: 'phone',
            number: '19162255887',
          },
        ],
        from: {
          type: 'phone',
          number: '14152739164',
        },
        randomFromNumber: false,
        eventUrl: ['example.com'],
        eventMethod: HttpMethod.GET,
        machineDetection: MachineDetectionBehavior.CONTINUE,
        advancedMachineDetection: {
          behavior: MachineDetectionBehavior.HANGUP,
          mode: AdvancedMachineDetectionMode.DETECT,
          beepTimeout: 42,
        },
        lengthTimer: 84,
        ringingTimer: 126,
      } as CallWithAnswerURL,
    ],
    generator: false,
    error: false,
    expected: {
      uuid: callPhone.uuid,
      status: CallStatus.STARTED,
      direction: CallDirection.OUTBOUND,
      conversation_uuid: callPhone.conversationUUID,
      conversationUUID: callPhone.conversationUUID,
    } as CallResult,
  },
];
