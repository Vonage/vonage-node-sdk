import { apiKey, apiSecret } from '../../../../testHelpers';
import {
  CheckStatus,
  VerifyLanguages,
  VerifyWorkflows,
  VerifyRequestResponse,
  VerifyRequest,
  VerifyRequestErrorResponse,
  VerifyError,
  PSD2Parameters,
  VerificationParameters,
} from '../../lib';
import { PSD2, Verification } from '../../lib/classes';

export default [
  {
    label: 'request a verification',
    request: [
      '/verify/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        number: '12128675309',
        brand: 'My Brand',
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.SUCCESS,
            } as VerifyRequestResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
            {
              number: '12128675309',
              brand: 'My Brand',
            } as VerificationParameters,
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.SUCCESS,
    } as VerifyRequest,
  },
  {
    label: 'request a verification using class',
    request: [
      '/verify/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        number: '12128675309',
        brand: 'My Brand',
        lg: VerifyLanguages.WELSH_UK,
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.SUCCESS,
            } as VerifyRequestResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
      new Verification(
        '12128675309',
        'My Brand',
        undefined,
        undefined,
        undefined,
        VerifyLanguages.WELSH_UK,
      ),
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.SUCCESS,
    } as VerifyRequest,
  },
  {
    label: 'request a verification with all parameters',
    request: [
      '/verify/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        brand: 'My Brand',
        number: '12128675309',
        country: 'us',
        sender_id: 'v8eeWetk884',
        code_length: 6,
        lg: VerifyLanguages.ENGLISH_US,
        pin_expiry: 3600,
        next_event_wait: 120,
        workflow_id: VerifyWorkflows.TTS_TTS,
        pin_code: '305699',
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.SUCCESS,
            } as VerifyRequestResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
            {
              number: '12128675309',
              brand: 'My Brand',
              country: 'us',
              senderId: 'v8eeWetk884',
              codeLength: 6,
              lg: VerifyLanguages.ENGLISH_US,
              pinExpiry: 3600,
              nextEventWait: 120,
              workflowId: VerifyWorkflows.TTS_TTS,
              pinCode: '305699',
            } as VerificationParameters,
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.SUCCESS,
    } as VerifyRequest,
  },
  {
    label: 'request a verification returns error',
    request: [
      '/verify/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        number: '12128675309',
        brand: 'My Brand',
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.MISSING_REQUIRED_PARAM,
              error_text: 'Your request is incomplete and missing the mandatory parameter \'number\'',
              network: '305699',
            } as VerifyRequestErrorResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
            {
              number: '12128675309',
              brand: 'My Brand',
            } as VerificationParameters,
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.MISSING_REQUIRED_PARAM,
      error_text: 'Your request is incomplete and missing the mandatory parameter \'number\'',
      errorText: 'Your request is incomplete and missing the mandatory parameter \'number\'',
      network: '305699',
    } as VerifyError,
  },
  {
    label: 'request a PSD2 verification',
    request: [
      '/verify/psd2/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        number: '12128675309',
        payee: 'My Payee',
        amount: 42.0,
        lg: VerifyLanguages.SWEDISH,
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.SUCCESS,
            } as VerifyRequestResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
      new PSD2(
        '12128675309',
        'My Payee',
        42.0,
        undefined,
        undefined,
        VerifyLanguages.SWEDISH,
      ),
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.SUCCESS,
    } as VerifyRequest,
  },
  {
    label: 'request a PSD2 verification with class',
    request: [
      '/verify/psd2/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        number: '12128675309',
        payee: 'My Payee',
        amount: 42.0,
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.SUCCESS,
            } as VerifyRequestResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
            {
              number: '12128675309',
              payee: 'My Payee',
              amount: 42.0,
            } as PSD2Parameters,
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.SUCCESS,
    } as VerifyRequest,
  },
  {
    label: 'request a PSD2 verification with all parameters',
    request: [
      '/verify/psd2/json',
      'POST',
      {
        api_key: apiKey,
        api_secret: apiSecret,
        number: '12128675309',
        payee: 'My Payee',
        amount: 42.0,
        country: 'US',
        sender_id: 'v8eeWetk884',
        code_length: 6,
        lg: VerifyLanguages.ENGLISH_US,
        pin_expiry: 3600,
        next_event_wait: 120,
        workflow_id: VerifyWorkflows.TTS_TTS,
      },
    ],
    response: [
      200,
            {
              request_id: 'abcdef0123456789abcdef0123456789',
              status: CheckStatus.SUCCESS,
            } as VerifyRequestResponse,
    ],
    method: 'post',
    clientMethod: 'start',
    parameters: [
            {
              number: '12128675309',
              payee: 'My Payee',
              amount: 42.0,
              country: 'US',
              sender_id: 'v8eeWetk884',
              code_length: 6,
              lg: VerifyLanguages.ENGLISH_US,
              pinExpiry: 3600,
              nextEventWait: 120,
              workflowId: VerifyWorkflows.TTS_TTS,
              codeLength: 6,
            } as PSD2Parameters,
    ],
    expected: {
      request_id: 'abcdef0123456789abcdef0123456789',
      requestId: 'abcdef0123456789abcdef0123456789',
      status: CheckStatus.SUCCESS,
    } as VerifyRequest,
  },
];
