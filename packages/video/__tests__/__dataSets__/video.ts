import { ExperienceComposerResolution } from '../../lib/enums/ExperienceComposerResolution';
import { ExperienceComposerOptions } from '../../lib/types/ExperienceComposerOptions';
import { CaptionOptions } from '../../lib/types/CaptionOptions';
import { SIPCallOptions } from '../../lib/types/SIPCallOptions';

const renderInformation = {
  id: '1248e7070b81464c9789f46ad10e7764',
  sessionId: '2_MX4xMDBfjE0Mzc2NzY1NDgwMTJ-TjMzfn4',
  projectId: 'e2343f23456g34709d2443a234',
  createdAt: 1437676551000,
  updatedAt: 1437676551000,
  url: 'https://webapp.customer.com',
  resolution: '1280x720',
  status: 'starting',
  streamId: 'e32445b743678c98230f238',
};
const renderInformation2 = {
  id: 'o89hergjkhaldfg',
  sessionId: 'lioaherfgiolae',
  projectId: 'e2343f23456g34709d2443a234',
  createdAt: 1437676551000,
  updatedAt: 1437676551000,
  url: 'https://webapp.customer.com',
  resolution: '1280x720',
  status: 'starting',
  streamId: 'e32445b743678c98230f238',
};

const mutliRenderResponse = {
  count: 2,
  items: [renderInformation, renderInformation2],
};

const enableCaptionsResponse = {
  captionsId: '7c0680fc-6274-4de5-a66f-d0648e8d3ac2',
};

const captionInfoResponse = {
  captionId: '7c0680fc-6274-4de5-a66f-d0648e8d3ac2',
  projectId: '100',
  sessionId:
        '2_MX4xMDB-flR1ZSBOb3YgMTkgMTE6MDk6NTggUFNUIDIwMTN-MC4zNzQxNzIxNX4',
  status: 'failed',
  createdAt: 1628115911,
  updatedAt: 1628115911,
  duration: 300,
  languageCode: 'en-US',
  reason: 'Quota exceeded for Amazon Transcribe',
  provider: 'aws-transcribe',
};

const initiateSIPCallOptions: SIPCallOptions = {
  token: 'abcd',
  sip: {
    uri: 'sip:1-999-123-4567@voip-provider.example.net',
    from: '',
  },
};

const initiateSIPCallResponse = {
  id: 'abcd',
  connectionId: '1234',
  streamId: 'xyz',
};

export default [
  {
    label: 'Start an experience render',
    request: [
      '/v2/project/abcd-1234/render',
      'POST',
      {
        sessionId: '1234',
        token: 'q34h9uit',
        url: 'https://example.com',
        maxDuration: 1800,
        resolution: ExperienceComposerResolution.HD_LANDSCAPE,
        properties: {
          name: 'Sample Render',
        },
      },
    ],
    response: [200, renderInformation],
    method: 'post',
    clientMethod: 'startExperienceComposerRender',
    parameters: [
      '1234',
      'q34h9uit',
            {
              url: 'https://example.com',
              maxDuration: 1800,
              resolution: ExperienceComposerResolution.HD_LANDSCAPE,
              properties: {
                name: 'Sample Render',
              },
            } as ExperienceComposerOptions,
    ],
    expected: renderInformation,
  },
  {
    label: 'Stop an experience render',
    request: [
      '/v2/project/abcd-1234/render/1248e7070b81464c9789f46ad10e7764',
      'DELETE',
    ],
    response: [204],
    method: 'delete',
    clientMethod: 'stopExperienceComposerRender',
    parameters: ['1248e7070b81464c9789f46ad10e7764'],
    expected: undefined,
  },
  {
    label: 'Get information about a render',
    request: [
      '/v2/project/abcd-1234/render/1248e7070b81464c9789f46ad10e7764',
      'GET',
    ],
    response: [200, renderInformation],
    method: 'delete',
    clientMethod: 'getExperienceComposerRender',
    parameters: ['1248e7070b81464c9789f46ad10e7764'],
    expected: renderInformation,
  },
  {
    label: 'List available renders',
    request: ['/v2/project/abcd-1234/render', 'GET'],
    response: [200, mutliRenderResponse],
    method: 'get',
    clientMethod: 'listExperienceComposerRenders',
    parameters: [],
    expected: mutliRenderResponse,
  },
  {
    label: 'Enable captions for a session',
    request: [
      '/v2/project/abcd-1234/captions',
      'POST',
      {
        sessionId: '1234',
        token: 'q34h9uit',
        statusCallbackUrl: 'https://example.com',
        maxDuration: 1800,
        partialCaptions: 'true',
        languageCode: 'en-us',
      },
    ],
    response: [200, enableCaptionsResponse],
    method: 'post',
    clientMethod: 'enableCaptions',
    parameters: [
      '1234',
      'q34h9uit',
            {
              statusCallbackUrl: 'https://example.com',
              maxDuration: 1800,
              partialCaptions: 'true',
              languageCode: 'en-us',
            } as CaptionOptions,
    ],
    expected: enableCaptionsResponse,
  },
  {
    label: 'Disable captions for a session',
    request: [
      `/v2/project/abcd-1234/captions/7c0680fc-6274-4de5-a66f-d0648e8d3ac2/stop`,
      'POST',
    ],
    response: [200],
    method: 'post',
    clientMethod: 'disableCaptions',
    parameters: ['7c0680fc-6274-4de5-a66f-d0648e8d3ac2'],
    expected: undefined,
  },
  {
    label: 'Get information about a session caption',
    request: [
      '/v2/project/abcd-1234/captions/7c0680fc-6274-4de5-a66f-d0648e8d3ac2',
      'GET',
    ],
    response: [200, captionInfoResponse],
    method: 'get',
    clientMethod: 'getCaptionStatus',
    parameters: ['7c0680fc-6274-4de5-a66f-d0648e8d3ac2'],
    expected: captionInfoResponse,
  },
  {
    label: 'Make sure blank values are properly stripped for Dial API',
    request: [
      '/v2/project/abcd-1234/dial',
      'POST',
      {
        sessionId: '7c0680fc-6274-4de5-a66f-d0648e8d3ac2',
        token: 'abcd',
        sip: {
          uri: 'sip:1-999-123-4567@voip-provider.example.net',
        },
      },
    ],
    response: [200, initiateSIPCallResponse],
    method: 'post',
    clientMethod: 'intiateSIPCall',
    parameters: [
      '7c0680fc-6274-4de5-a66f-d0648e8d3ac2',
      initiateSIPCallOptions,
    ],
    expected: initiateSIPCallResponse,
  },
];
