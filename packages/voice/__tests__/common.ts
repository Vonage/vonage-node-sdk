import { CallStatus } from '../lib/enums';
import { CallDetail } from '../lib/types/index';
export const BASE_URL = 'https://api.nexmo.com/';

export const callPhone = {
  uuid: '00000000-0000-0000-0000-000000000001',
  conversationUUID: 'CON-00000000-0000-0000-0000-000000000001',
  to: {
    type: 'phone',
    number: '14152739164',
  },
  from: {
    type: 'phone',
    number: '19162255887',
  },
  status: CallStatus.COMPLETED,
  duration: '42',
  direction: 'inbound',
  rate: '0.39',
  price: '42.00',
  startTime: '2020-01-01 12:00:00',
  endTime: '2020-01-01 12:05:00',
  network: '65512',
} as CallDetail;

export const callWebsocket = {
  uuid: '00000000-0000-0000-0000-000000000002',
  conversationUUID: 'CON-00000000-0000-0000-0000-000000000002',
  to: {
    type: 'websocket',
    uri: 'wss://example.com',
  },
  from: {
    type: 'phone',
    number: '19162255887',
  },
  status: CallStatus.COMPLETED,
  duration: '42',
  direction: 'inbound',
  rate: '0.39',
  price: '42.00',
  startTime: '2020-01-01 12:00:00',
  endTime: '2020-01-01 12:05:00',
  network: '65512',
} as CallDetail;

export const callSip = {
  uuid: '00000000-0000-0000-0000-000000000002',
  conversationUUID: 'CON-00000000-0000-0000-0000-000000000002',
  to: {
    type: 'sip',
    uri: 'sip:bob@example.com',
  },
  from: {
    type: 'phone',
    number: '19162255887',
  },
  status: CallStatus.COMPLETED,
  duration: '42',
  direction: 'inbound',
  rate: '0.39',
  price: '42.00',
  startTime: '2020-01-01 12:00:00',
  endTime: '2020-01-01 12:05:00',
  network: '65512',
} as CallDetail;

export const callVBC = {
  uuid: '00000000-0000-0000-0000-000000000002',
  conversationUUID: 'CON-00000000-0000-0000-0000-000000000002',
  to: {
    type: 'vbc',
  },
  from: {
    type: 'phone',
    number: '19162255887',
  },
  status: CallStatus.COMPLETED,
  duration: '42',
  direction: 'inbound',
  rate: '0.39',
  price: '42.00',
  startTime: '2020-01-01 12:00:00',
  endTime: '2020-01-01 12:05:00',
  network: '65512',
} as CallDetail;
