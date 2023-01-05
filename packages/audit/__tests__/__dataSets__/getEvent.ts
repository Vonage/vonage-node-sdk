const BASE_URL = 'https://api.nexmo.com/';
const CLIENT_METHOD = 'getEvent';

export default [
  {
    label: 'get event',
    clientMethod: CLIENT_METHOD,
    exception: false,
    request: {
      url: BASE_URL,
      intercept: [`/beta/audit/events/asdf`, 'GET'],
      reply: [
        200,
        {
          id: 'asdf',
          created_at: '2022-11-15T17:30:33',
        },
      ],
    },
    parameters: ['asdf'],
    expected: {
      id: 'asdf',
      createdAt: '2022-11-15T17:30:33',
    },
  },
];
