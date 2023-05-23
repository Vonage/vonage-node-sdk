import {
  CapabilityBulk,
  CapabilityMeetings,
  CapabilityVerify,
  CapabilityRTC,
  Application,
  CapabilityVoice,
  CapabilityMessages,
} from '../lib';

export const BASE_URL = 'https://api.nexmo.com/';

export const testApplication = Object.freeze({
  id: '00000000-0000-0000-0000-000000000000',
  name: 'test application',
  keys: {
    publicKey: '-----BEGIN PUBLIC KEY-----foo----END PUBLIC KEY-----',
  },
  privacy: {
    improveAi: true,
  },
  capabilities: {
    rtc: {},
    voice: {},
    vbc: {},
    messages: {},
    verify: {},
    meetings: {},
    bulk: {},
  },
}) as Application;

export const testApplicationOne = Object.freeze({
  id: '00000000-0000-0000-0000-000000000001',
  name: 'test application one',
  keys: {
    publicKey: '-----BEGIN PUBLIC KEY-----foo----END PUBLIC KEY-----',
  },
  privacy: {
    improveAi: true,
  },
  capabilities: {
    rtc: {},
    voice: {},
    vbc: {},
    messages: {},
    verify: {},
    meetings: {},
    bulk: {},
  },
}) as Application;

export const testApplicationTwo = Object.freeze({
  id: '00000000-0000-0000-0000-000000000002',
  name: 'test application two',
  keys: {
    publicKey: '-----BEGIN PUBLIC KEY-----foo----END PUBLIC KEY-----',
  },
  privacy: {
    improveAi: true,
  },
  capabilities: {
    rtc: {},
    voice: {},
    vbc: {},
    messages: {},
    verify: {},
    meetings: {},
    bulk: {},
  },
}) as Application;

export const bulkCapability = {
  webhooks: {
    listStatusUrl: {
      httpMethod: 'POST',
      address: 'https://example.com/bulk/list',
    },
    runStatusUrl: {
      httpMethod: 'POST',
      address: 'https://example.com/bulk/run',
    },
  },
} as CapabilityBulk;

export const meetingCapability = {
  webhooks: {
    roomChanged: {
      address: 'https://example.com/meetings/rooms',
      httpMethod: 'POST',
    },
    sessionChanged: {
      address: 'https://example.com/meetings/sessions',
      httpMethod: 'POST',
    },
    recordingChanged: {
      address: 'https://example.com/meetings/recording',
      httpMethod: 'POST',
    },
  },
} as CapabilityMeetings;

export const verifyCapability = {
  webhooks: {
    statusUrl: {
      address: 'https://example.com/verify2/status',
      httpMethod: 'POST',
    },
  },
  version: 'v2',
} as CapabilityVerify;

export const messageCapability = {
  webhooks: {
    inboundUrl: {
      address: 'https://example.com/messages/inbound',
      httpMethod: 'POST',
    },
    statusUrl: {
      address: 'https://example.com/messages/status',
      httpMethod: 'POST',
    },
  },
  version: 'v0.1',
  authenticateInboundMedia: true,
} as CapabilityMessages;

export const voiceCapability = {
  webhooks: {
    eventUrl: {
      address: 'https://example.com/voice/event',
      httpMethod: 'GET',
      socketTimeout: 10000,
      connectTimeout: 1000,
    },
    answerUrl: {
      address: 'https://example.com/voice/answer',
      httpMethod: 'GET',
      socketTimeout: 5000,
      connectTimeout: 1000,
    },
    fallbackAnswerUrl: {
      address: 'https://example.com/voice/fallback',
      httpMethod: 'GET',
      socketTimeout: 5000,
      connectTimeout: 1000,
    },
  },
  paymentEnabled: false,
  signedCallbacks: true,
  conversationsTTL: 42,
  region: 'na-east',
  payments: {
    gateways: [],
  },
} as CapabilityVoice;

export const rtcCapability = {
  webhooks: {
    eventUrl: {
      address: 'https://example.com/rtc/event',
      httpMethod: 'POST',
    },
  },
  signedCallbacks: true,
  legPersistenceTime: 7,
} as CapabilityRTC;

export const capabilitiesToTest = [
  ['bulk', bulkCapability],
  ['meetings', meetingCapability],
  ['messages', messageCapability],
  ['rtc', rtcCapability],
  ['verify', verifyCapability],
  ['voice', voiceCapability],
] as unknown as [[string, unknown]];
