import { Client } from '@vonage/server-client';
import { CallDetailResponse, CallPageResponse } from '../../lib';
import { callSip, callPhone, callWebsocket } from '../common';
import { BASE_URL } from '../common';

export default [
  {
    label: 'get details of calls',
    requests: [
      ['/v1/calls?page_size=1&record_index=0', 'GET'],
      ['/v1/calls?page_size=1&record_index=1', 'GET'],
      ['/v1/calls?page_size=1&record_index=2', 'GET'],
    ],
    responses: [
      [
        200,
        {
          count: 3,
          page_size: 1,
          record_index: 0,
          _embedded: {
            calls: [
              {
                ...Client.transformers.snakeCaseObjectKeys(callPhone),
                _links: {
                  self: {
                    href: `${BASE_URL}/v1/calls/${callPhone.uuid}`,
                  },
                },
              },
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/calls/`,
            },
            first: {
              href: `${BASE_URL}/v1/calls?page_size=0`,
            },
            last: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=2`,
            },
            next: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=1`,
            },
          },
        } as CallPageResponse,
      ],
      [
        200,
        {
          count: 3,
          page_size: 1,
          record_index: 1,
          _embedded: {
            calls: [
              {
                ...Client.transformers.snakeCaseObjectKeys(callWebsocket),
                _links: {
                  self: {
                    href: `${BASE_URL}/v1/calls/${callWebsocket.uuid}`,
                  },
                },
              } as CallDetailResponse,
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/calls/`,
            },
            first: {
              href: `${BASE_URL}/v1/calls?page_size=0`,
            },
            last: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=2`,
            },
            next: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=2`,
            },
            prev: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=0`,
            },
          },
        } as CallPageResponse,
      ],
      [
        200,
        {
          count: 3,
          page_size: 1,
          record_index: 2,
          _embedded: {
            calls: [
              {
                ...Client.transformers.snakeCaseObjectKeys(callSip),
                _links: {
                  self: {
                    href: `${BASE_URL}/v1/calls/${callWebsocket.uuid}`,
                  },
                },
              } as CallDetailResponse,
            ],
          },
          _links: {
            self: {
              href: `${BASE_URL}/v1/calls/`,
            },
            first: {
              href: `${BASE_URL}/v1/calls?page_size=0`,
            },
            last: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=2`,
            },
            prev: {
              href: `${BASE_URL}/v1/calls?page_size=1&record_index=2`,
            },
          },
        } as CallPageResponse,
      ],
    ],
    clientMethod: 'getAllCalls',
    parameters: [{ pageSize: 1 }],
    generator: true,
    error: false,
    expected: [
      {
        ...callPhone,
        end_time: callPhone.endTime,
        start_time: callPhone.startTime,
        conversation_uuid: callPhone.conversationUUID,
      },
      {
        ...callWebsocket,
        end_time: callWebsocket.endTime,
        start_time: callWebsocket.startTime,
        conversation_uuid: callWebsocket.conversationUUID,
      },
      {
        ...callSip,
        end_time: callSip.endTime,
        start_time: callSip.startTime,
        conversation_uuid: callSip.conversationUUID,
      },
    ],
  },
//  {
//    label: 'get a page of calls',
//    requests: [['/v1/calls?', 'GET']],
//    responses: [
//      [
//        200,
//        {
//          count: 3,
//          page_size: 1,
//          record_index: 0,
//          _embedded: {
//            calls: [
//              {
//                ...Client.transformers.snakeCaseObjectKeys(callPhone),
//                _links: {
//                  self: {
//                    href: `${BASE_URL}/v1/calls/${callPhone.uuid}`,
//                  },
//                },
//              },
//            ],
//          },
//          _links: {
//            self: {
//              href: `${BASE_URL}/v1/calls/`,
//            },
//          },
//        } as CallPageResponse,
//      ],
//    ],
//    clientMethod: 'getCallsPage',
//    parameters: [],
//    generator: false,
//    error: false,
//    expected: {
//      count: 3,
//      page_size: 1,
//      record_index: 0,
//      _embedded: {
//        calls: [
//          {
//            ...Client.transformers.snakeCaseObjectKeys(callPhone),
//            _links: {
//              self: {
//                href: `${BASE_URL}/v1/calls/${callPhone.uuid}`,
//              },
//            },
//          },
//        ],
//      },
//      _links: {
//        self: {
//          href: `${BASE_URL}/v1/calls/`,
//        },
//      },
//    },
//  },
//  {
//    label: 'search',
//    requests: [
//      [
//        `/v1/calls?status=${CallStatus.ANSWERED}&date_start=453168000&date_end=1302552660&page_size=1&record_index=0&order=asc&conversation_uuid=${callPhone.conversationUUID}`,
//        'GET',
//      ],
//    ],
//    responses: [
//      [
//        200,
//        {
//          count: 3,
//          page_size: 1,
//          record_index: 0,
//          _embedded: {
//            calls: [
//              {
//                ...Client.transformers.snakeCaseObjectKeys(callPhone),
//                _links: {
//                  self: {
//                    href: `${BASE_URL}/v1/calls/${callPhone.uuid}`,
//                  },
//                },
//              },
//            ],
//          },
//          _links: {
//            self: {
//              href: `${BASE_URL}/v1/calls/`,
//            },
//          },
//        } as CallPageResponse,
//      ],
//    ],
//    clientMethod: 'search',
//    parameters: [
//      {
//        status: CallStatus.ANSWERED,
//        date_start: '453168000',
//        date_end: '1302552660',
//        page_size: '1',
//        record_index: '0',
//        order: 'asc',
//        conversation_uuid: callPhone.conversationUUID,
//      } as CallListFilter,
//    ],
//    generator: false,
//    error: false,
//    expected: {
//      count: 3,
//      page_size: 1,
//      record_index: 0,
//      _embedded: {
//        calls: [
//          {
//            ...Client.transformers.snakeCaseObjectKeys(callPhone),
//            _links: {
//              self: {
//                href: `${BASE_URL}/v1/calls/${callPhone.uuid}`,
//              },
//            },
//          },
//        ],
//      },
//      _links: {
//        self: {
//          href: `${BASE_URL}/v1/calls/`,
//        },
//      },
//    },
//  },
//  {
//    label: 'get call',
//    requests: [[`/v1/calls/${callPhone.uuid}`, 'GET']],
//    responses: [
//      [
//        200,
//        {
//          ...Client.transformers.snakeCaseObjectKeys(callPhone),
//          _links: {
//            self: {
//              href: `${BASE_URL}/v1/calls/${callPhone.uuid}`,
//            },
//          },
//        } as CallDetailResponse,
//      ],
//    ],
//    clientMethod: 'getCall',
//    parameters: [callPhone.uuid],
//    generator: false,
//    error: false,
//    expected: {
//      ...callPhone,
//      ...Client.transformers.snakeCaseObjectKeys(callPhone),
//    },
//  },
];
