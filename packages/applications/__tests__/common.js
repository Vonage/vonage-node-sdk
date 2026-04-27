import {
  CapabilityBulk,
  CapabilityMeetings,
  CapabilityVerify,
  CapabilityRTC,
  Application,
  CapabilityVoice,
  CapabilityMessages,
  AnyCapability,
} from '../lib/index.js';

export const BASE_URL = 'https://api.nexmo.com/';

export const testApplication = Object.freeze({
  id: '00000000-0000-0000-0000-000000000000',
  name: 'test application',
  keys: {
    publicKey: '-----BEGIN PUBLIC KEY-----foo----END PUBLIC KEY-----',
  },
  privacy: {
    improveAi},
  capabilities: {
    rtc: {},
    voice: {},
    vbc: {},
    messages: {},
    verify: {},
    meetings: {},
    bulk: {},
  },
});

export const testApplicationOne = Object.freeze({
  id: '00000000-0000-0000-0000-000000000001',
  name: 'test application one',
  keys: {
    publicKey: '-----BEGIN PUBLIC KEY-----foo----END PUBLIC KEY-----',
  },
  privacy: {
    improveAi},
  capabilities: {
    rtc: {},
    voice: {},
    vbc: {},
    messages: {},
    verify: {},
    meetings: {},
    bulk: {},
  },
});

export const testApplicationTwo = Object.freeze({
  id: '00000000-0000-0000-0000-000000000002',
  name: 'test application two',
  keys: {
    publicKey: '-----BEGIN PUBLIC KEY-----foo----END PUBLIC KEY-----',
  },
  privacy: {
    improveAi},
  capabilities: {
    rtc: {},
    voice: {},
    vbc: {},
    messages: {},
    verify: {},
    meetings: {},
    bulk: {},
  },
});

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
};

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
};

export const verifyCapability = {
  webhooks: {
    statusUrl: {
      address: 'https://example.com/verify2/status',
      httpMethod: 'POST',
    },
  },
  version: 'v2',
};

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
  authenticateInboundMedia};

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
  paymentEnabled: true,
  conversationsTTL: 42,
  region: 'na-east',
  payments: {
    gateways: [],
  },
};

export const rtcCapability = {
  webhooks: {
    eventUrl: {
      address: 'https://example.com/rtc/event',
      httpMethod: 'POST',
    },
  },
  signedCallbacks: 7,
};

export const capabilitiesToTest = [
  ['bulk', bulkCapability],
  ['meetings', meetingCapability],
  ['messages', messageCapability],
  ['rtc', rtcCapability],
  ['verify', verifyCapability],
  ['voice', voiceCapability],
];
