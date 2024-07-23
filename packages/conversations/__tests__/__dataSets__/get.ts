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
} from '../../lib';

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
        } as ConversationPageResponse,
      ],
      [
        200,
        {
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
        } as ConversationPageResponse,
      ],
    ],
    clientMethod: 'listAllConversations',
    parameters: [],
    generator: true,
    error: false,
    expected: [
      conversation,
      {
        ...conversation,
        id: 'CON-00000000-0000-0000-0000-000000000002',
      } as Conversation,
    ],
  },
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
        } as ConversationPageResponse,
      ],
      [
        200,
        {
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
        } as ConversationPageResponse,
      ],
    ],
    clientMethod: 'listAllUserConversations',
    parameters: [member.user.id],
    generator: true,
    error: false,
    expected: [
      conversation,
      {
        ...conversation,
        id: 'CON-00000000-0000-0000-0000-000000000002',
      } as Conversation,
    ],
  },
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
        } as ConversationPageResponse,
      ],
    ],
    clientMethod: 'getConversationPage',
    parameters: [],
    generator: false,
    error: false,
    expected: {
      pageSize: 10,
      conversations: [conversation],
      links: {
        self: {
          href: '/v1/conversations',
        },
      },
    } as ConversationPage,
  },
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
        } as SessionPageResponse,
      ],
    ],
    clientMethod: 'getUserSessionsPage',
    parameters: [sessionUser.id],
    generator: false,
    error: false,
    expected: {
      pageSize: 10,
      sessions: [session],
      links: {
        self: {
          href: `${BASE_URL}/v1/users/${sessionUser.id}/sessions`,
        },
      },
    } as SessionPage,
  },
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
        } as SessionPageResponse,
      ],
      [
        200,
        {
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
        } as SessionPageResponse,
      ],
    ],
    clientMethod: 'listAllUserSessions',
    parameters: [
      sessionUser.id,
      {
        pageSize: 10,
        order: 'asc',
      },
    ],
    generator: true,
    error: false,
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
        } as ConversationPageResponse,
      ],
    ],
    clientMethod: 'getConversationPage',
    parameters: [
      {
        pageSize: 1,
        order: 'asc',
        dateEnd: '2024-01-17T13:45:56.000Z',
        dateStart: '2024-01-17T13:45:56.000Z',
      } as ListConversationsParameters,
    ],
    generator: false,
    error: false,
    expected: {
      pageSize: 10,
      conversations: [conversation],
      links: {
        self: {
          href: '/v1/conversations',
        },
      },
    } as ConversationPage,
  },
  {
    label: 'retrieve a conversation',
    requests: [[`/v1/conversations/${conversationResponse.id}`, 'GET']],
    responses: [[200, conversationResponse]],
    clientMethod: 'getConversation',
    parameters: [conversationResponse.id],
    generator: false,
    error: false,
    expected: conversation,
  },
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
        } as MemberPageResponse,
      ],
      [
        200,
        {
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
        } as MemberPageResponse,
      ],
    ],
    clientMethod: 'listAllMembers',
    parameters: [conversationResponse.id],
    generator: true,
    error: false,
    expected: [
      member,
      {
        ...member,
        id: 'MEM-00000000-0000-0000-0000-000000000002',
      } as Member,
    ],
  },
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
    error: false,
    expected: member,
  },
  {
    label: 'retrieve me',
    requests: [
      [`/v1/conversations/${conversationResponse.id}/members/me`, 'GET'],
    ],
    responses: [[200, memberResponse]],
    clientMethod: 'getMe',
    parameters: [conversationResponse.id],
    generator: false,
    error: false,
    expected: member,
  },
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
        } as EventPageResponse,
      ],
      [
        200,
        {
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
        } as EventPageResponse,
      ],
    ],
    clientMethod: 'listAllEvents',
    parameters: [conversationResponse.id],
    generator: true,
    error: false,
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
    error: false,
    expected: event,
  },
];
