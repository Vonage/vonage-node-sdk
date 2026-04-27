import {
  ConversationPageResponse,
  ConversationPage,
  Conversation,
  ListConversationsParameters,
  Member,
  MemberPageResponse,
  SessionPageResponse,
  SessionPage,
  EventPageResponse,
} from '../../lib/index.js';

import {
  BASE_URL,
  conversation,
  conversationResponse,
  member,
  memberResponse,
  session,
  sessionResponse,
  sessionUser,
  event,
  eventResponse,
} from '../common';

export default [
  {
    label: 'retrieve all conversations',
    requests: [
      ['/v1/conversations', 'GET'],
      ['/v1/conversations?cursor=next', 'GET'],
    ],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            conversations: [conversationResponse],
          },
          _links: {
            self: {
              href: '/v1/conversations',
            },
            next: {
              href: 'https://api.nexmo.com/v1/conversations?cursor=next',
            },
          },
          conversationResponse,
        }{
          page_size: 10,
          _embedded: {
            conversations: [
              {
                ...conversationResponse,
                id: 'CON-00000000-0000-0000-0000-000000000002',
              },
            ],
          },
          _links: {
            self: {
              href: '/v1/conversations',
            },
          },
          conversationResponse,
        }: 'listAllConversations',
    parameters: [],
    generator: false,
    expected: [
      conversation,
      {
        ...conversation,
        id: 'CON-00000000-0000-0000-0000-000000000002',
      }},
  {
    label: 'list all conversations by user',
    requests: [
      [`/v1/users/${member.user.id}/conversations`, 'GET'],
      [`/v1/users/${member.user.id}/conversations?cursor=next`, 'GET'],
    ],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            conversations: [conversationResponse],
          },
          _links: {
            self: {
              href: `/v1/users/${member.user.id}/conversations`,
            },
            next: {
              href: `${BASE_URL}/v1/users/${member.user.id}/conversations?cursor=next`,
            },
          },
          conversationResponse,
        }{
          page_size: 10,
          _embedded: {
            conversations: [
              {
                ...conversationResponse,
                id: 'CON-00000000-0000-0000-0000-000000000002',
              },
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${member.user.id}/conversations`,
            },
          },
          conversationResponse,
        }: 'listAllUserConversations',
    parameters: [member.user.id],
    generator: false,
    expected: [
      conversation,
      {
        ...conversation,
        id: 'CON-00000000-0000-0000-0000-000000000002',
      }},
  {
    label: 'retrieve a page of conversations',
    requests: [['/v1/conversations', 'GET']],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            conversations: [conversationResponse],
          },
          _links: {
            self: {
              href: '/v1/conversations',
            },
          },
          conversationResponse,
        }: 'getConversationPage',
    parameters: [],
    generator: false,
    expected: {
      pageSize: 10,
      conversations: [conversation],
      links: {
        self: {
          href: '/v1/conversations',
        },
      },
    }},
  {
    label: 'fetch a page of sessions',
    requests: [[`/v1/users/${sessionUser.id}/sessions`, 'GET']],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            sessions: [sessionResponse],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${sessionUser.id}/sessions`,
            },
          },
        }: 'getUserSessionsPage',
    parameters: [sessionUser.id],
    generator: false,
    expected: {
      pageSize: 10,
      sessions: [session],
      links: {
        self: {
          href: `${BASE_URL}/v1/users/${sessionUser.id}/sessions`,
        },
      },
    }},
  {
    label: 'list all user serssions',
    requests: [
      [`/v1/users/${sessionUser.id}/sessions?page_size=10&order=asc`, 'GET'],
      [
        `/v1/users/${sessionUser.id}/sessions?page_size=10&order=asc&cursor=next`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            sessions: [sessionResponse],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${sessionUser.id}/sessions`,
            },
            next: {
              href: `${BASE_URL}/v1/users/${sessionUser.id}/sessions?cursor=next`,
            },
          },
        }{
          page_size: 10,
          _embedded: {
            sessions: [
              {
                ...sessionResponse,
                id: 'SESSION-00000000-0000-0000-0000-000000000002',
              },
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/users/${sessionUser.id}/sessions`,
            },
          },
        }: 'listAllUserSessions',
    parameters: [
      sessionUser.id,
      {
        pageSize: 10,
        order: 'asc',
      },
    ],
    generator: false,
    expected: [
      session,
      {
        ...session,
        id: 'SESSION-00000000-0000-0000-0000-000000000002',
      },
    ],
  },
  {
    label: 'retrieve a page of conversations with parameters',
    requests: [
      [
        '/v1/conversations?page_size=1&order=asc&date_end=2024-01-17T13:45:56.000Z&date_start=2024-01-17T13:45:56.000Z',
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            conversations: [conversationResponse],
          },
          _links: {
            self: {
              href: '/v1/conversations',
            },
          },
          conversationResponse,
        }: 'getConversationPage',
    parameters: [
      {
        pageSize: 1,
        order: 'asc',
        dateEnd: '2024-01-17T13:45:56.000Z',
        dateStart: '2024-01-17T13:45:56.000Z',
      }: false,
    expected: {
      pageSize: 10,
      conversations: [conversation],
      links: {
        self: {
          href: '/v1/conversations',
        },
      },
    }},
  {
    label: 'retrieve a conversation',
    requests: [[`/v1/conversations/${conversationResponse.id}`, 'GET']],
    responses: [[200, conversationResponse]],
    clientMethod: 'getConversation',
    parameters: [conversationResponse.id],
    generator: false,
    expected},
  {
    label: 'list members',
    requests: [
      [`/v1/conversations/${conversationResponse.id}/members`, 'GET'],
      [
        `/v1/conversations/${conversationResponse.id}/members?cursor=next`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: {
            members: [memberResponse],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/conversations/${conversationResponse.id}/members`,
            },
            next: {
              href: `${BASE_URL}/v1/conversations/${conversationResponse.id}/members?cursor=next`,
            },
          },
        }{
          page_size: 10,
          _embedded: {
            members: [
              {
                ...memberResponse,
                id: 'MEM-00000000-0000-0000-0000-000000000002',
              },
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/conversations/${conversationResponse.id}/members`,
            },
          },
        }: 'listAllMembers',
    parameters: [conversationResponse.id],
    generator: false,
    expected: [
      member,
      {
        ...member,
        id: 'MEM-00000000-0000-0000-0000-000000000002',
      }},
  {
    label: 'retrieve a member',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}/members/${memberResponse.id}`,
        'GET',
      ],
    ],
    responses: [[200, memberResponse]],
    clientMethod: 'getMember',
    parameters: [conversationResponse.id, memberResponse.id],
    generator: false,
    expected},
  {
    label: 'retrieve me',
    requests: [
      [`/v1/conversations/${conversationResponse.id}/members/me`, 'GET'],
    ],
    responses: [[200, memberResponse]],
    clientMethod: 'getMe',
    parameters: [conversationResponse.id],
    generator: false,
    expected},
  {
    label: 'retrieve all events',
    requests: [
      [`/v1/conversations/${conversationResponse.id}/events`, 'GET'],
      [
        `/v1/conversations/${conversationResponse.id}/events?cursor=next`,
        'GET',
      ],
    ],
    responses: [
      [
        200,
        {
          page_size: 10,
          _embedded: [eventResponse],
          _links: {
            self: {
              href: `${BASE_URL}/v1/conversations/${conversationResponse.id}/events`,
            },
            next: {
              href: `${BASE_URL}/v1/conversations/${conversationResponse.id}/events?cursor=next`,
            },
          },
        }{
          page_size: 10,
          _embedded: [
            {
              ...eventResponse,
              id: 8874,
            },
          ],
          _links: {
            self: {
              href: `v1/conversations/${conversationResponse.id}/events`,
            },
          },
        }: 'listAllEvents',
    parameters: [conversationResponse.id],
    generator: false,
    expected: [
      event,
      {
        ...event,
        id: 8874,
      },
    ],
  },
  {
    label: 'get an event',
    requests: [
      [
        `/v1/conversations/${conversationResponse.id}/events/${event.id}`,
        'GET',
      ],
    ],
    responses: [[200, eventResponse]],
    clientMethod: 'getEvent',
    parameters: [conversationResponse.id, event.id],
    generator: false,
    expected},
];
