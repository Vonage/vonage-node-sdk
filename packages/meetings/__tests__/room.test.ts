import nock from 'nock';
import { Client } from '@vonage/server-client';
import { MeetingRoom, Meetings } from '../lib';
import pick from 'lodash.pick';
import {
  BASE_URL,
  getClient,
  getScope,
  roomOne,
  roomTwo,
  roomLinks,
} from './common';

describe('Meetings > Rooms', () => {
  let client: Meetings;
  let scope: nock.Scope;

  beforeEach(() => {
    client = getClient();
    scope = getScope();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('Can get one page of data', async () => {
    scope.get('/v1/meetings/rooms?').reply(200, {
      _embedded: [
        {
          ...roomOne,
          _links: roomLinks,
        },
      ],
      _links: {
        self: {
          href: `${BASE_URL}/v1/meetings/rooms`,
        },
      },
      page_size: 20,
      total_items: 1,
    });

    const rooms = client.getRooms();
    const room = await rooms.next();

    expect(room.value).toEqual(
      Client.transformers.camelCaseObjectKeys(roomOne, true),
    );
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can get two pages of data', async () => {
    scope
      .get('/v1/meetings/rooms?page_size=1')
      .reply(200, {
        _embedded: [
          {
            ...roomOne,
            _links: roomLinks,
          },
        ],
        _links: {
          self: {
            href: `${BASE_URL}/v1/meetings/rooms`,
          },
          next: {
            href: `${BASE_URL}/v1/meetings/rooms?start_id=42`,
          },
        },
        page_size: 20,
        total_items: 1,
      })
      .get('/v1/meetings/rooms?page_size=1&start_id=42')
      .reply(200, {
        _embedded: [
          {
            ...roomTwo,
            _links: roomLinks,
          },
        ],
        _links: {
          self: {
            href: `${BASE_URL}/v1/meetings/rooms`,
          },
        },
        page_size: 20,
        total_items: 1,
      });

    const results: Array<MeetingRoom> = [];
    for await (const room of client.getRooms({ pageSize: 1 })) {
      results.push(room);
    }

    expect(nock.isDone()).toBeTruthy();
    expect(results).toEqual([
      Client.transformers.camelCaseObjectKeys(roomOne, true),
      Client.transformers.camelCaseObjectKeys(roomTwo, true),
    ]);
  });

  test('Will throw error when call fails', async () => {
    scope
      .get('/v1/meetings/rooms?')
      .reply(200, {
        _embedded: [
          {
            ...roomOne,
            _links: roomLinks,
          },
        ],
        _links: {
          self: {
            href: `${BASE_URL}/v1/meetings/rooms`,
          },
          next: {
            href: `${BASE_URL}/v1/meetings/rooms?start_id=42`,
          },
        },
        page_size: 20,
        total_items: 1,
      })
      .get('/v1/meetings/rooms?start_id=42')
      .reply(401, {
        status: 401,
        error: 'Unauthorized',
        message: 'Failed',
      });

    const results = client.getRooms();
    const firstRoom = await results.next();
    expect(firstRoom.value.id).toBe(roomOne.id);

    await expect(results.next()).rejects.toThrow(
      'Request failed with status code 401',
    );

    expect(nock.isDone()).toBeTruthy();
  });

  test('Can get room by id', async () => {
    scope.get('/v1/meetings/rooms/my-awesome-room').reply(200, {
      ...roomOne,
      _links: roomLinks,
    });

    expect(await client.getRoom('my-awesome-room')).toEqual(
      Client.transformers.camelCaseObjectKeys(roomOne, true),
    );

    expect(nock.isDone()).toBeTruthy();
  });

  test('Can create room', async () => {
    scope
      .post(
        '/v1/meetings/rooms',
        pick(
          Client.transformers.snakeCaseObjectKeys(roomOne, true),
          client.ROOM_WRITE_KEYS,
        ) as nock.RequestBodyMatcher,
      )
      .reply(200, {
        ...roomOne,
        _links: roomLinks,
      });

    expect(await client.createRoom(roomOne)).toEqual(
      Client.transformers.camelCaseObjectKeys(roomOne, true),
    );

    expect(nock.isDone()).toBeTruthy();
  });

  test('Can Update an existing room', async () => {
    scope
      .patch(
        '/v1/meetings/rooms/my-awesome-room',
        {
          update_options: pick(
            Client.transformers.snakeCaseObjectKeys(roomOne, true),
            client.ROOM_WRITE_KEYS,
          ),
        } as nock.RequestBodyMatcher
      )
      .reply(200, {
        ...roomOne,
        _links: roomLinks,
      });

    expect(await client.updateRoom('my-awesome-room', roomOne)).toEqual(
      Client.transformers.camelCaseObjectKeys(roomOne, true),
    );

    expect(nock.isDone()).toBeTruthy();
  });
});
