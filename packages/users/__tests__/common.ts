import { Client } from '@vonage/server-client';
import { UserResponse, UserType, WebSocketChannelResponse } from '../lib';

export const BASE_URL = 'https://api.nexmo.com/';

export const userToApi = (user: UserType): UserResponse => {
  const apiUser = Client.transformers.snakeCaseObjectKeys(
    user,
    true
  ) as UserResponse;
  if (user.properties) {
    apiUser.properties = {
      custom_data: user.properties.customData,
    };
  }

  if (user?.channels?.websocket) {
    apiUser.channels.websocket = [
      {
        uri: user.channels.websocket[0].uri,
        headers: user.channels.websocket[0].headers,
        'content-type': user.channels.websocket[0].contentType,
      } as WebSocketChannelResponse,
    ];
  }

  return apiUser;
};

export const testUser = Object.freeze({
  id: 'USR-00000000-0000-0000-0000-000000000000',
  name: 'jimmy',
  displayName: 'Jimmy',
  imageUrl: 'https://example.com/image.png',
  properties: {
    customData: {
      custom_key: 'custom_value',
      fizzBuzz: 'fooBar',
    },
  },
  channels: {
    pstn: [
      {
        number: 123457,
      },
    ],
    sip: [
      {
        uri: 'sip:4442138907@sip.example.com;transport=tls',
        username: 'New SIP',
        password: 'Password',
      },
    ],
    vbc: [
      {
        extension: '403',
      },
    ],
    websocket: [
      {
        uri: 'wss://example.com/socket',
        contentType: 'audio/l16;rate=16000',
        headers: {
          customerId: 'ABC123',
          'x-fizz-buzz': 'foo-bar',
        },
      },
    ],
    sms: [
      {
        number: '15055034455',
      },
    ],
    mms: [
      {
        number: '15058425662',
      },
    ],
    whatsapp: [
      {
        number: '15052427700',
      },
    ],
    viber: [
      {
        number: '14023429288',
      },
    ],
    messenger: [
      {
        id: '12345abcd',
      },
    ],
  },
}) as UserType;

export const testUserOne = Object.freeze({
  id: 'USR-00000000-0000-0000-0000-000000000001',
  name: 'user_one',
}) as UserType;

export const testUserTwo = Object.freeze({
  id: 'USR-00000000-0000-0000-0000-000000000002',
  name: 'user_two',
}) as UserType;
