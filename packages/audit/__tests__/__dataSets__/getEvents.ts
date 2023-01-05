import { AuditEvent } from '../../lib/types.ts';
import { AuditEventTypes } from '../../lib/enums';
import { Client } from '@vonage/server-client';

const BASE_URL = 'https://api.nexmo.com/';
const CLIENT_METHOD = 'getEvents';

const createEvent = (event: AuditEvent): AuditEvent => ({
  id: event.id,
  eventType: event.eventType,
  createdAt: '2022-11-15T17:30:33',
  userEmail: event.userEmail,
  userId: event.userId,
  accountId: event.accountId,
  source: event.source,
  sourceDescription: event.sourceDescription,
  sourceCountry: event.sourceCountry,
  context: event.context,
});

const onePageEvent = [createEvent({ id: '1' })];

const twoPageEvent = [createEvent({ id: '2' }), createEvent({ id: '3' })];

const eventParameters = new URLSearchParams([
  ['event_type', AuditEventTypes.ACCOUNT_SECRET_CREATE],
  ['date_from', createEvent({}).createdAt],
  ['date_to', createEvent({}).createdAt],
  ['search_text', 'fizz-buzz'],
  ['page', 42],
  ['size', 21],
]);

export default [
  {
    label: 'get events on one page',
    clientMethod: CLIENT_METHOD,
    exception: false,
    request: {
      url: BASE_URL,
      requests: [
        {
          request: [`/beta/audit/events?`, 'GET'],
          reply: [
            200,
            {
              _embedded: {
                events: onePageEvent.map(
                  Client.transformers.snakeCaseObjectKeys,
                ),
              },
              page: {
                size: 20,
                totalElements: 1,
                totalPages: 1,
                page: 1,
              },
            },
          ],
        },
      ],
    },
    parameters: [],
    expected: onePageEvent,
  },
  {
    label: 'get events on multiple pages',
    clientMethod: CLIENT_METHOD,
    exception: false,
    request: {
      url: BASE_URL,
      requests: [
        {
          request: [`/beta/audit/events?`, 'GET'],
          reply: [
            200,
            {
              _embedded: {
                events: twoPageEvent.map(
                  Client.transformers.snakeCaseObjectKeys,
                ),
              },
              page: {
                size: 20,
                totalElements: 3,
                totalPages: 2,
                page: 1,
              },
            },
          ],
        },
        {
          request: [`/beta/audit/events?`, 'GET'],
          reply: [
            200,
            {
              _embedded: {
                events: onePageEvent.map(
                  Client.transformers.snakeCaseObjectKeys,
                ),
              },
              page: {
                size: 20,
                totalElements: 3,
                totalPages: 2,
                page: 2,
              },
            },
          ],
        },
      ],
    },
    parameters: [],
    expected: [...twoPageEvent, ...onePageEvent],
  },
  {
    label: 'get events and handle non 200 on subsequent pages',
    clientMethod: CLIENT_METHOD,
    exception: false,
    request: {
      url: BASE_URL,
      requests: [
        {
          request: [`/beta/audit/events?`, 'GET'],
          reply: [
            200,
            {
              _embedded: {
                events: twoPageEvent.map(
                  Client.transformers.snakeCaseObjectKeys,
                ),
              },
              page: {
                size: 20,
                totalElements: 3,
                totalPages: 2,
                page: 1,
              },
            },
          ],
        },
        {
          request: [`/beta/audit/events?`, 'GET'],
          reply: [
            401,
            {
              status: 401,
              error: 'Unauthorized',
              message: 'Failed',
            },
          ],
        },
      ],
    },
    parameters: [],
    expected: [...twoPageEvent],
  },
  {
    label: 'get events with parameters',
    clientMethod: CLIENT_METHOD,
    exception: false,
    request: {
      url: BASE_URL,
      requests: [
        {
          request: [
            `/beta/audit/events?${eventParameters.toString()}`,
            'GET',
          ],
          reply: [
            200,
            {
              _embedded: {
                events: onePageEvent.map(
                  Client.transformers.snakeCaseObjectKeys,
                ),
              },
              page: {
                size: 20,
                totalElements: 1,
                totalPages: 1,
                page: 1,
              },
            },
          ],
        },
      ],
    },
    parameters: [
      Client.transformers.camelCaseObjectKeys(
        Object.fromEntries(eventParameters),
      ),
    ],
    expected: onePageEvent,
  },
];
