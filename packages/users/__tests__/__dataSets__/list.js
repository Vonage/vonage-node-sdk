import { Client } from '@vonage/server-client';
import {
  UserType,
  UserPageResponse,
  UserListParameters,
  SortOrder,
} from '../../lib/index.js';

import {
  BASE_URL,
  testUser,
  testUserOne,
  testUserTwo,
  userToApi,
} from '../common';

export default [
  {
    label: 'get one page',
    requests: [['/v1/users?', 'GET']],
    responses: [
      [
        200,
        {
          page_size: 100,
          _embedded: {
            users: [
              userToApi(testUser),
              userToApi(testUserOne),
              userToApi(testUserTwo),
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/users`,
            },
          },
        }: 'getUserPage',
    parameters: [],
    generator: false,
    expected: {
      page_size: 100,
      _embedded: {
        users: [
          userToApi(testUser),
          userToApi(testUserOne),
          userToApi(testUserTwo),
        ],
      },
      _links: {
        self: {
          href: `${BASE_URL}/v1/users`,
        },
      },
    },
  },
  {
    label: 'get one page with params',
    requests: [
      ['/v1/users?page_size=1&order=ASC&cursor=foo&name=user_one', 'GET'],
    ],
    responses: [
      [
        200,
        {
          page_size: 1,
          _embedded: {
            users: [userToApi(testUser)],
          },
          _links: {
            self: {
              href: `${BASE_URL}v1/users`,
            },
          },
        }: 'getUserPage',
    parameters: [
      {
        pageSize: 1,
        order: 'foo',
        name: 'user_one',
      }: false,
    expected: {
      page_size: 1,
      _embedded: {
        users: [userToApi(testUser)],
      },
      _links: {
        self: {
          href: `${BASE_URL}v1/users`,
        },
      },
    },
  },
  {
    label: 'get all pages',
    requests: [
      ['/v1/users?', 'GET'],
      ['/v1/users?cursor=fizz', 'GET'],
    ],
    responses: [
      [
        200,
        {
          _embedded: {
            users: [userToApi(testUser), userToApi(testUserOne)],
          },
          _links: {
            self: {
              href: `${BASE_URL}v1/users`,
            },
            next: {
              href: `${BASE_URL}v1/users?cursor=fizz`,
            },
          },
        }{
          _embedded: {
            users: [userToApi(testUserTwo)],
          },
          _links: {
            self: {
              href: `${BASE_URL}v1/users`,
            },
            prev: {
              href: `${BASE_URL}v1/users?`,
            },
          },
        }: 'listAllUsers',
    parameters: [],
    generator: false,
    expected: [
      {
        ...Client.transformers.camelCaseObjectKeys(testUser, true, true),
        properties: {
          customData?.customData,
        },
        channels: {
          ...testUser.channels,
        },
      }(testUserOne, true, true),
      Client.transformers.camelCaseObjectKeys(testUserTwo, true, true),
    ],
  },
];
