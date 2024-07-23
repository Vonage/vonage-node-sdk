import nock from 'nock';
import { Auth } from '@vonage/auth';
import { Meetings } from '../lib';
import {
  ThemeDomain,
  MeetingType,
  JoinType,
  MicrophoneSate,
  RoomLanguage,
} from '../lib/enums';
import { Theme, MeetingRoom } from '../lib/types';
import { keyAuth, validateBearerAuth } from '../../../testHelpers';

export const BASE_URL = 'https://api-eu.vonage.com';

export const roomLinks = {
  host_url: {
    href: 'https://example.vonage.com/rooms/host',
  },
  guest_url: {
    href: 'https://example.vonage.com/rooms/guest',
  },
};

export const getClient = (): Meetings =>
  new Meetings(
    new Auth(keyAuth),
  );

export const getScope = (): nock.Scope =>
  nock(BASE_URL, {
    reqheaders: {
      authorization: validateBearerAuth,
    },
  }).persist();

export const roomOne: MeetingRoom = {
  id: '3ff993a8-deb0-4bd2-8fed-e190ee6114c4',
  displayName: 'Room 1',
  type: MeetingType.LONG_TERM,
  expiresAt: '2024-01-17T15:53:03.377Z',
  recordingOptions: {
    autoRecord: false,
    recordOnlyOwner: false,
  },
  meetingCode: '1234567890',
  createdAt: '2023-01-17T15:54:07.299Z',
  isAvailable: true,
  expireAfterUse: true,
  initialJoinOptions: {
    microphoneState: MicrophoneSate.OFF,
  },
  joinApprovalLevel: JoinType.EXPLICIT_APPROVAL,
  uiSettings: {
    language: RoomLanguage.DEFAULT,
  },
  availableFeatures: {
    isRecordingAvailable: true,
    isChatAvailable: true,
    isWhiteboardAvailable: true,
    isLocaleSwitcherAvailable: true,
  },
  hostUrl: roomLinks.host_url.href,
  guestUrl: roomLinks.guest_url.href,
};

export const roomTwo: MeetingRoom = {
  id: 'b52c4ded-fc4c-4bed-bada-6ad33fa37b76',
  displayName: 'Room 2',
  type: MeetingType.INSTANT,
  expiresAt: '2024-01-17T15:53:03.377Z',
  recordingOptions: {
    autoRecord: false,
    recordOnlyOwner: false,
  },
  meetingCode: '1234567890',
  createdAt: '2023-01-17T15:54:07.299Z',
  isAvailable: true,
  expireAfterUse: true,
  initialJoinOptions: {
    microphoneState: MicrophoneSate.OFF,
  },
  joinApprovalLevel: JoinType.AFTER_OWNER_ONLY,
  uiSettings: {
    language: RoomLanguage.EN,
  },
  availableFeatures: {
    isRecordingAvailable: true,
    isChatAvailable: true,
    isWhiteboardAvailable: true,
    isLocaleSwitcherAvailable: true,
  },
  hostUrl: roomLinks.host_url.href,
  guestUrl: roomLinks.guest_url.href,
};

export const themeOne: Theme = {
  themeId: '91882dd4-f673-4b5b-a1e2-a94475091896',
  themeName: 'Theme one',
  domain: ThemeDomain.VBC,
  accountId: 'abcd1234',
  applicationId: 'acd8853c-1a20-40d8-9a48-9ff91d3850ab',
  mainColor: '#2a2a2a',
  shortCompanyUrl: 'vonage',
  brandText: 'Node SDK',
};

export const themeTwo: Theme = {
  themeId: '1af8e55f-5ad4-4dd2-901c-492ef0a1561d',
  themeName: 'Theme Two',
  domain: ThemeDomain.VBC,
  accountId: 'abcd1234',
  applicationId: '73c6ddda-28bb-4c28-88d7-df3e54826368',
  mainColor: '#2a2a2a',
  shortCompanyUrl: 'vonage',
  brandText: 'Node SDK',
};
