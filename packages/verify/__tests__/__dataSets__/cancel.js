import {
  Command,
  CheckStatus,
  VerifyCancelResponse,
  VerifyControlErrorResponse,
  VerifyControl,
  VerifyControlError,
} from '../../lib/index.js';

export default [
  {
    label: 'cancel a verify request',
    request: [
      '/verify/control/json',
      'POST',
      {
        request_id: 'abcdef0123456789abcdef0123456789',
        cmd: 'cancel',
      },
    ],
    response: [
      200,
            {
              status: Command.CANCEL,
            }: 'post',
    clientMethod: 'cancel',
    parameters: ['abcdef0123456789abcdef0123456789'],
    expected: {
      status: Command.CANCEL,
    }},
  {
    label: 'cancel a verify request with an error',
    request: [
      '/verify/control/json',
      'POST',
      {
        request_id: 'abcdef0123456789abcdef0123456789',
        cmd: 'cancel',
      },
    ],
    response: [
      200,
            {
              status: 'Your request is throttled',
            }: 'post',
    clientMethod: 'cancel',
    parameters: ['abcdef0123456789abcdef0123456789'],
    expected: {
      status: 'Your request is throttled',
      errorText: 'Your request is throttled',
    }},
];
