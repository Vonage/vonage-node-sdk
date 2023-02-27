import { Command, CheckStatus } from '../../lib/enums/index';
import {
  VerifyCancelResponse,
  VerifyControlErrorResponse,
} from '../../lib/interfaces/Response/index';
import { VerifyControl, VerifyControlError } from '../../lib/interfaces/index';

export default [
  {
    label: 'cancel a verify request',
    request: [
      '/verify/control/json',
      'POST',
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
        cmd: 'cancel',
      },
    ],
    response: [
      200,
            {
              status: CheckStatus.SUCCESS,
              command: Command.CANCEL,
            } as VerifyCancelResponse,
    ],
    method: 'post',
    clientMethod: 'cancel',
    parameters: ['abcdef0123456789abcdef0123456789'],
    expected: {
      status: CheckStatus.SUCCESS,
      command: Command.CANCEL,
    } as VerifyControl,
  },
  {
    label: 'cancel a verify request with an error',
    request: [
      '/verify/control/json',
      'POST',
      {
        api_key: '12345',
        api_secret: 'ABCDE',
        request_id: 'abcdef0123456789abcdef0123456789',
        cmd: 'cancel',
      },
    ],
    response: [
      200,
            {
              status: CheckStatus.THROTTLED,
              error_text: 'Your request is throttled',
            } as VerifyControlErrorResponse,
    ],
    method: 'post',
    clientMethod: 'cancel',
    parameters: ['abcdef0123456789abcdef0123456789'],
    expected: {
      status: CheckStatus.THROTTLED,
      error_text: 'Your request is throttled',
      errorText: 'Your request is throttled',
    } as VerifyControlError,
  },
];
