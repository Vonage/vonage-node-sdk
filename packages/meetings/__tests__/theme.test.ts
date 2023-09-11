import nock from 'nock';
import { Client } from '@vonage/server-client';
import { Meetings } from '../lib/index';
import {
  BASE_URL,
  getClient,
  getScope,
  roomOne,
  roomTwo,
  themeOne,
  themeTwo,
  roomLinks,
} from './common';
import pick from 'lodash.pick';

describe('Meetings > Themes', () => {
  let client: Meetings;
  let scope: nock;

  beforeEach(() => {
    client = getClient();
    scope = getScope();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('Can get empty themes', async () => {
    scope.get(`/v1/meetings/themes`).reply(200, []);

    const results = [];
    for await (const room of client.getThemes()) {
      results.push(room);
    }

    expect(nock.isDone()).toBeTruthy();
    expect(results).toEqual([]);
  });

  test('Can get themes', async () => {
    scope
      .get(`/v1/meetings/themes`)
      .reply(200, [
        Client.transformers.snakeCaseObjectKeys(themeOne),
        Client.transformers.snakeCaseObjectKeys(themeTwo),
      ]);

    const results = [];
    for await (const room of client.getThemes()) {
      results.push(room);
    }

    expect(nock.isDone()).toBeTruthy();
    expect(results).toEqual([themeOne, themeTwo]);
  });

  test('Can get theme', async () => {
    scope
      .get(`/v1/meetings/themes/my-theme`)
      .reply(200, Client.transformers.snakeCaseObjectKeys(themeOne));

    expect(await client.getTheme('my-theme')).toEqual(themeOne);
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can delete theme', async () => {
    scope
      .delete(`/v1/meetings/themes/my-theme`)
      .reply(200, Client.transformers.snakeCaseObjectKeys(themeOne));

    await client.deleteTheme('my-theme');
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can force delete theme', async () => {
    scope
      .delete(`/v1/meetings/themes/my-theme?force=true`)
      .reply(200, Client.transformers.snakeCaseObjectKeys(themeOne));

    await client.deleteTheme('my-theme', true);
    expect(nock.isDone()).toBeTruthy();
  });

  test('Will throw when theme in use', async () => {
    scope.delete(`/v1/meetings/themes/my-theme`).reply(400, {
      message: 'could not delete theme',
      name: 'BadRequestError',
      errors: [
        `Theme ${themeOne.accountId} is used as application ${themeOne.applicationId} default theme`,
      ],
      status: 400,
    });

    await expect(() => client.deleteTheme('my-theme')).rejects.toThrow(
      'Request failed with status code 400',
    );
    expect(nock.isDone()).toBeTruthy();
  });

  test('Will create a theme', async () => {
    scope
      .post(
        `/v1/meetings/themes`,
        pick(
          Client.transformers.snakeCaseObjectKeys(themeOne, true),
          client.THEME_WRITE_KEYS,
        ),
      )
      .reply(201, themeOne);

    expect(await client.createTheme(themeOne)).toEqual(themeOne);
    expect(nock.isDone()).toBeTruthy();
  });

  test('Will update a theme', async () => {
    scope
      .patch(`/v1/meetings/themes/my-theme`, {
        update_details: pick(
          Client.transformers.snakeCaseObjectKeys(themeOne, true),
          client.THEME_WRITE_KEYS,
        ),
      })
      .reply(201, themeOne);

    expect(await client.updateTheme('my-theme', themeOne)).toEqual(themeOne);
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can get one page of theme rooms', async () => {
    scope.get(`/v1/meetings/themes/my-theme/rooms?`).reply(200, {
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

    const rooms = await client.getRoomsForTheme('my-theme');
    const room = await rooms.next();

    expect(room.value).toEqual(
      Client.transformers.camelCaseObjectKeys(roomOne, true),
    );
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can get two pages of theme rooms', async () => {
    scope
      .get(`/v1/meetings/themes/my-theme/rooms?page_size=1`)
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
      .get(`/v1/meetings/themes/my-theme/rooms?page_size=1&start_id=42`)
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

    const results = [];
    for await (const room of client.getRoomsForTheme('my-theme', {
      pageSize: 1,
    })) {
      results.push(room);
    }

    expect(nock.isDone()).toBeTruthy();
    expect(results).toEqual([
      Client.transformers.camelCaseObjectKeys(roomOne, true),
      Client.transformers.camelCaseObjectKeys(roomTwo, true),
    ]);
  });

  test('Will throw error when call to theme rooms fails', async () => {
    scope
      .get(`/v1/meetings/themes/my-theme/rooms?`)
      .reply(200, {
        _embedded: [roomOne],
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
      .get(`/v1/meetings/themes/my-theme/rooms?start_id=42`)
      .reply(401, {
        status: 401,
        error: 'Unauthorized',
        message: 'Failed',
      });

    const results = client.getRoomsForTheme('my-theme');
    const firstRoom = await results.next();
    expect(firstRoom.value.id).toBe(roomOne.id);

    await expect(results.next()).rejects.toThrow(
      'Request failed with status code 401',
    );

    expect(nock.isDone()).toBeTruthy();
  });

  test('Will set default theme', async () => {
    scope
      .patch(`/v1/meetings/applications`, {
        update_details: {
          default_theme_id: 'my-theme',
        },
      })
      .reply(201, themeOne);

    expect(await client.setDefaultTheme('my-theme')).toBeTruthy();
    expect(nock.isDone()).toBeTruthy();
  });
});
