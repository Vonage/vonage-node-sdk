import nock from 'nock';
import fs from 'fs';
import { Video } from '../lib/video';
import { decode } from 'jsonwebtoken';
import { LayoutType } from '../lib/enums/LayoutType';
import { MediaMode } from '../lib/enums/MediaMode';
import { ArchiveMode } from '../lib/types/ArchiveMode';
import { Auth } from '@vonage/auth';
import testDataSets from './__dataSets__/index';

const BASE_URL = 'https://video.api.vonage.com/'.replace(/\/+$/, '');

describe.each(testDataSets)('$label', ({ tests }) => {
  let client;
  let scope;

  beforeEach(() => {
    client = new Video(
      new Auth({
        applicationId: 'abcd-1234',
        privateKey: fs.readFileSync(`${__dirname}/private.test.key`).toString(),
      })
    );
    scope = nock(BASE_URL, {
      reqheaders: {
        authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    }).persist();
  });

  afterEach(() => {
    client = null;
    scope = null;
    nock.cleanAll();
  });

  test.each(tests)(
    'Can $label using: $clientMethod',
    async ({ request, response, clientMethod, expected, parameters }) => {
      scope.intercept(...request).reply(...response);
      const results = await client[clientMethod](...parameters);
      expect(results).toEqual(expected);
      expect(nock.isDone()).toBeTruthy();
    }
  );
});

// Legacy unit tests
describe('video', () => {
  let client;

  beforeEach(() => {
    client = new Video(
      new Auth({
        applicationId: 'abcd-1234',
        privateKey: fs.readFileSync(`${__dirname}/private.test.key`).toString(),
      })
    );
  });

  afterEach(() => {
    client = null;
  });

  test('can create a server session', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
        Accept: 'application/json',
      },
    })
      .persist()
      .post(
        '/session/create',
        /archiveMode=manual&location=null&p2p.preference=disabled/
      )
      .reply(200, [
        {
          session_id: 'the session ID',
          project_id: 'your OpenTok API key',
          create_dt: 'The creation date',
          media_server_url:
            'The URL of the OpenTok media router used by the session -- ignore this',
        },
      ]);

    const session = await client.createSession();
    expect(session.sessionId).toEqual('the session ID');
    expect(session.archiveMode).toEqual(ArchiveMode.MANUAL);
    expect(session.mediaMode).toEqual(MediaMode.ROUTED);
    expect(session.location).toBeNull();
  });

  test('can creating a server session properly sets correct p2p preference for relayed', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/session/create',
        /archiveMode=manual&location=null&p2p.preference=enabled/
      )
      .reply(200, [
        {
          session_id: 'the session ID',
          project_id: 'your OpenTok API key',
          create_dt: 'The creation date',
          media_server_url:
            'The URL of the OpenTok media router used by the session -- ignore this',
        },
      ]);

    const session = await client.createSession({
      mediaMode: MediaMode.RELAYED,
    });
    expect(session.sessionId).toEqual('the session ID');
    expect(session.archiveMode).toEqual(ArchiveMode.MANUAL);
    expect(session.mediaMode).toEqual(MediaMode.RELAYED);
    expect(session.location).toBeNull();
  });

  test('can creating a server session properly sets correct p2p preference for routed', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/session/create',
        /archiveMode=manual&location=null&p2p.preference=disabled/
      )
      .reply(200, [
        {
          session_id: 'the session ID',
          project_id: 'your OpenTok API key',
          create_dt: 'The creation date',
          media_server_url:
            'The URL of the OpenTok media router used by the session -- ignore this',
        },
      ]);

    const session = await client.createSession({ mediaMode: MediaMode.ROUTED });
    expect(session.sessionId).toEqual('the session ID');
    expect(session.archiveMode).toEqual(ArchiveMode.MANUAL);
    expect(session.mediaMode).toEqual(MediaMode.ROUTED);
    expect(session.location).toBeNull();
  });

  test('can creating a server session properly sets correct archive mode for manual', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/session/create',
        /archiveMode=manual&location=null&p2p.preference=disabled/
      )
      .reply(200, [
        {
          session_id: 'the session ID',
          project_id: 'your OpenTok API key',
          create_dt: 'The creation date',
          media_server_url:
            'The URL of the OpenTok media router used by the session -- ignore this',
        },
      ]);

    const session = await client.createSession({
      ArchiveMode: ArchiveMode.MANUAL,
    });
    expect(session.sessionId).toEqual('the session ID');
    expect(session.archiveMode).toEqual(ArchiveMode.MANUAL);
    expect(session.mediaMode).toEqual(MediaMode.ROUTED);
    expect(session.location).toBeNull();
  });

  test('can creating a server session properly sets correct archive mode for always', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/session/create',
        /archiveMode=always&location=null&p2p.preference=disabled/
      )
      .reply(200, [
        {
          session_id: 'the session ID',
          project_id: 'your OpenTok API key',
          create_dt: 'The creation date',
          media_server_url:
            'The URL of the OpenTok media router used by the session -- ignore this',
        },
      ]);

    const session = await client.createSession({
      archiveMode: ArchiveMode.ALWAYS,
    });
    expect(session.sessionId).toEqual('the session ID');
    expect(session.archiveMode).toEqual(ArchiveMode.ALWAYS);
    expect(session.mediaMode).toEqual(MediaMode.ROUTED);
    expect(session.location).toBeNull();
  });

  test('can creating a server session properly sets location', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/session/create',
        /archiveMode=manual&location=10.0.1.2&p2p.preference=disabled/
      )
      .reply(200, [
        {
          session_id: 'the session ID',
          project_id: 'your OpenTok API key',
          create_dt: 'The creation date',
          media_server_url:
            'The URL of the OpenTok media router used by the session -- ignore this',
        },
      ]);

    const session = await client.createSession({ location: '10.0.1.2' });
    expect(session.sessionId).toEqual('the session ID');
    expect(session.archiveMode).toEqual(ArchiveMode.MANUAL);
    expect(session.mediaMode).toEqual(MediaMode.ROUTED);
    expect(session.location).toEqual('10.0.1.2');
  });

  test('can generate a client JWT token', async () => {
    const token = await client.generateClientToken('abcd');
    const decoded: any = decode(token, { json: true, complete: true });

    expect(decoded.payload.application_id).toEqual('abcd-1234');
    expect(decoded.payload.scope).toEqual('session.connect');
    expect(decoded.payload.session_id).toEqual('abcd');
    expect(decoded.payload.sub).toEqual('video');
    expect(decoded.payload.acl.paths).toEqual({ '/session/**': {} });
  });

  test('can generate a client JWT token with renamed values', async () => {
    const now = Math.round(new Date().getTime() / 1000) + 500;
    const token = await client.generateClientToken('abcd', {
      data: 'test',
      expireTime: now,
      initialLayoutClassList: ['foo', 'bar'],
    });
    const decoded: any = decode(token, { json: true, complete: true });

    expect(decoded.payload.application_id).toEqual('abcd-1234');
    expect(decoded.payload.scope).toEqual('session.connect');
    expect(decoded.payload.session_id).toEqual('abcd');
    expect(decoded.payload.connection_data).toEqual('test');
    expect(decoded.payload.exp).toEqual(now);
    expect(decoded.payload.initial_layout_class_list).toEqual('foo bar');
  });

  test('can generate a client JWT token with custom options', async () => {
    const token = await client.generateClientToken('abcd', {
      role: 'publisher',
    });
    const decoded: any = decode(token, { json: true, complete: true });

    expect(decoded.payload.application_id).toEqual('abcd-1234');
    expect(decoded.payload.scope).toEqual('session.connect');
    expect(decoded.payload.session_id).toEqual('abcd');
    expect(decoded.payload.role).toEqual('publisher');
  });

  test('can send a signal to everyone', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/session/1234/signal', {
        type: 'foo',
        data: 'bar',
      })
      .reply(200);

    await client.sendSignal({ type: 'foo', data: 'bar' }, '1234');
  });

  test('can send a signal to one connection', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/session/1234/connection/qwer/signal', {
        type: 'foo',
        data: 'bar',
      })
      .reply(200);

    await client.sendSignal({ type: 'foo', data: 'bar' }, '1234', 'qwer');
  });

  test('can start an archive with no options', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
      hasVideo: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'The archive name you supplied',
      outputMode: 'composed',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'started',
      streamMode: 'auto',
      url: null,
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/archive', { sessionId: '1234' })
      .reply(200, expectedResponse);

    const resp = await client.startArchive('1234');
    expect(resp.name).toEqual(expectedResponse.name);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
  });

  test('can start an archive with options', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
      hasVideo: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'The archive name you supplied',
      outputMode: 'composed',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'started',
      streamMode: 'auto',
      url: null,
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/archive', {
        sessionId: '1234',
        name: 'test',
        hasVideo: false,
      })
      .reply(200, expectedResponse);

    const resp = await client.startArchive('1234', {
      name: 'test',
      hasVideo: false,
    });
    expect(resp.name).toEqual(expectedResponse.name);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
  });

  test('can stop an archive', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 60,
      hasAudio: true,
      hasVideo: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'The archive name you supplied',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'stopped',
      url: null,
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/stop'
      )
      .reply(200, expectedResponse);

    const resp = await client.stopArchive(
      'b40ef09b-3811-4726-b508-e41a0f96c68f'
    );
    expect(resp.duration).toEqual(expectedResponse.duration);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
  });

  test('can list all archives', async () => {
    const expectedResponse = {
      count: 2,
      items: [
        {
          createdAt: 1384221730000,
          duration: 5049,
          hasAudio: true,
          hasVideo: true,
          id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
          name: 'Foo',
          projectId: 123456,
          reason: '',
          resolution: '640x480',
          sessionId:
            '2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4',
          size: 247748791,
          status: 'available',
          streamMode: 'manual',
          streams: [],
          url: 'https://tokbox.com.archive2.s3.amazonaws.com/123456/09141e29-8770-439b-b180-337d7e637545/archive.mp4',
        },
        {
          createdAt: 1384221380000,
          duration: 328,
          hasAudio: true,
          hasVideo: true,
          id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
          name: 'Foo',
          projectId: 123456,
          reason: '',
          resolution: '640x480',
          sessionId:
            '2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4',
          size: 18023312,
          status: 'available',
          streamMode: 'auto',
          streams: [],
          url: 'https://tokbox.com.archive2.s3.amazonaws.com/123456/b40ef09b-3811-4726-b508-e41a0f96c68f/archive.mp4',
        },
      ],
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get('/v2/project/abcd-1234/archive')
      .reply(200, expectedResponse);

    const resp = await client.searchArchives();
    expect(resp.count).toEqual(expectedResponse.count);
    expect(resp.items[0].sessionId).toEqual(
      expectedResponse.items[0].sessionId
    );
    expect(resp.items[1].sessionId).toEqual(
      expectedResponse.items[1].sessionId
    );
  });

  test('can search archives', async () => {
    const expectedResponse = {
      count: 1,
      items: [
        {
          createdAt: 1384221730000,
          duration: 5049,
          hasAudio: true,
          hasVideo: true,
          id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
          name: 'Foo',
          projectId: 123456,
          reason: '',
          resolution: '640x480',
          sessionId:
            '2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4',
          size: 247748791,
          status: 'available',
          streamMode: 'manual',
          streams: [],
          url: 'https://tokbox.com.archive2.s3.amazonaws.com/123456/09141e29-8770-439b-b180-337d7e637545/archive.mp4',
        },
      ],
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get(
        '/v2/project/abcd-1234/archive?sessionId=2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4'
      )
      .reply(200, expectedResponse);

    const resp = await client.searchArchives({
      sessionId:
        '2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4',
    });
    expect(resp.count).toEqual(expectedResponse.count);
    expect(resp.items[0].sessionId).toEqual(
      expectedResponse.items[0].sessionId
    );
  });

  test('can get a single archive', async () => {
    const expectedResponse = {
      createdAt: 1384221730000,
      duration: 5049,
      hasAudio: true,
      hasVideo: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Foo',
      outputMode: 'composed',
      projectId: 123456,
      reason: '',
      resolution: '640x480',
      sessionId:
        '2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4',
      size: 247748791,
      status: 'available',
      streamMode: 'auto',
      streams: [],
      url: 'https://tokbox.com.archive2.s3.amazonaws.com/123456/09141e29-8770-439b-b180-337d7e637545/archive.mp4',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f')
      .reply(200, expectedResponse);

    const resp = await client.getArchive(
      'b40ef09b-3811-4726-b508-e41a0f96c68f'
    );
    expect(resp.duration).toEqual(expectedResponse.duration);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
    expect(resp.streams).toEqual([]);
  });

  test('can delete an archive', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .delete(
        '/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f'
      )
      .reply(204);

    const resp = await client.deleteArchive(
      'b40ef09b-3811-4726-b508-e41a0f96c68f'
    );
  });

  test('can update an archive layout', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put(
        '/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/layout',
        { type: LayoutType.BEST_FIT }
      )
      .reply(204);

    await client.updateArchiveLayout('b40ef09b-3811-4726-b508-e41a0f96c68f', {
      type: LayoutType.BEST_FIT,
    });
  });

  test('can add a stream to an archive', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .patch(
        '/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/streams',
        { addStream: 'test-1234', hasAudio: false, hasVideo: true }
      )
      .reply(204);

    await client.addArchiveStream(
      'b40ef09b-3811-4726-b508-e41a0f96c68f',
      'test-1234',
      false
    );
  });

  test('can remove a stream from an archive', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .patch(
        '/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/streams',
        { removeStream: 'test-1234' }
      )
      .reply(204);

    await client.removeArchiveStream(
      'b40ef09b-3811-4726-b508-e41a0f96c68f',
      'test-1234'
    );
  });

  test('can force disconnect a client', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .delete('/v2/project/abcd-1234/session/sess-1234/connection/conn-1234')
      .reply(204);

    await client.disconnectClient('sess-1234', 'conn-1234');
  });

  test('can get stream info', async () => {
    const expectedResponse = {
      id: '8b732909-0a06-46a2-8ea8-074e64d43422',
      videoType: 'camera',
      name: '',
      layoutClassList: ['full'],
    };
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get(
        '/v2/project/abcd-1234/session/sess-1234/stream/8b732909-0a06-46a2-8ea8-074e64d43422'
      )
      .reply(200, expectedResponse);

    const resp = await client.getStreamInfo(
      'sess-1234',
      '8b732909-0a06-46a2-8ea8-074e64d43422'
    );
    expect(resp.id).toEqual(expectedResponse.id);
  });

  test('can get all stream info', async () => {
    const expectedResponse = {
      count: 1,
      items: [
        {
          id: '8b732909-0a06-46a2-8ea8-074e64d43422',
          videoType: 'camera',
          name: '',
          layoutClassList: ['full'],
        },
      ],
    };
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get('/v2/project/abcd-1234/session/sess-1234/stream')
      .reply(200, expectedResponse);

    const resp = await client.getStreamInfo('sess-1234');
    expect(resp.items[0].id).toEqual(expectedResponse.items[0].id);
    expect(resp.count).toEqual(expectedResponse.count);
  });

  test('can mute streams', async () => {
    const expectedResponse = {
      id: '12312',
      secret: '567890',
      status: 'ACTIVE',
      name: 'Joe Montana',
      environment: 'standard',
      createdAt: 1414642898000, // A UNIX timestamp (in milliseconds)
    };
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/session/sess-1234/mute', {
        active: true,
        excludedStreamIds: ['stream-pub-1234'],
      })
      .reply(200, expectedResponse);

    const resp = await client.forceMuteAll('sess-1234', ['stream-pub-1234']);
    expect(resp.id).toEqual(expectedResponse.id);
  });

  test('can disable mute streams', async () => {
    const expectedResponse = {
      id: '12312',
      secret: '567890',
      status: 'ACTIVE',
      name: 'Joe Montana',
      environment: 'standard',
      createdAt: 1414642898000, // A UNIX timestamp (in milliseconds)
    };
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/session/sess-1234/mute', {
        active: false,
        excludedStreamIds: [],
      })
      .reply(200, expectedResponse);

    const resp = await client.disableForceMute('sess-1234');
    expect(resp.id).toEqual(expectedResponse.id);
  });

  test('can mute a single stream', async () => {
    const expectedResponse = {
      id: '12312',
      secret: '567890',
      status: 'ACTIVE',
      name: 'Joe Montana',
      environment: 'standard',
      createdAt: 1414642898000, // A UNIX timestamp (in milliseconds)
    };
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/v2/project/abcd-1234/session/sess-1234/stream/stream-user-1234/mute'
      )
      .reply(200, expectedResponse);

    const resp = await client.muteStream('sess-1234', 'stream-user-1234');
    expect(resp.id).toEqual(expectedResponse.id);
  });

  test('can set class list for streams', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v2/project/abcd-1234/session/sess-1234/stream', {
        items: [{ id: 'stream-1234', layoutClassList: ['full'] }],
      })
      .reply(200);

    await client.setStreamClassLists('sess-1234', [
      { id: 'stream-1234', layoutClassList: ['full'] },
    ]);
  });

  test('can initiate a SIP call', async () => {
    const options = {
      token: client.generateClientToken(),
      sip: {
        uri: 'sip:user@sip.partner.com;transport=tls',
      },
    };

    const expectedResponse = {
      id: 'b0a5a8c7-dc38-459f-a48d-a7f2008da853',
      connectionId: 'e9f8c166-6c67-440d-994a-04fb6dfed007',
      streamId: '482bce73-f882-40fd-8ca5-cb74ff416036',
    };

    const expectedBody = Object.assign(
      {},
      { sessionId: '2_MX40NTMyODc3Mn5-fg' },
      options
    );

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/dial', expectedBody)
      .reply(200, expectedResponse);

    const resp = await client.intiateSIPCall('2_MX40NTMyODc3Mn5-fg', options);

    expect(resp.id).toEqual(expectedResponse.id);
    expect(resp.connectionId).toEqual(expectedResponse.connectionId);
    expect(resp.streamId).toEqual(expectedResponse.streamId);
  });

  test('can play DTMF digits to everyone', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/session/2_MX40NTMyODc3Mn5-fg/play-dtmf', {
        digits: '1234#',
      })
      .reply(200);

    await client.playDTMF('2_MX40NTMyODc3Mn5-fg', '1234#');
  });

  test('can play DTMF digits into one connection', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post(
        '/v2/project/abcd-1234/session/2_MX40NTMyODc3Mn5-fg/connection/396edda0-fc30-41fd-8e63/play-dtmf',
        { digits: '1234#' }
      )
      .reply(200);

    await client.playDTMF(
      '2_MX40NTMyODc3Mn5-fg',
      '1234#',
      '396edda0-fc30-41fd-8e63'
    );
  });

  test('can connect to a websocket', async () => {
    const token = client.generateClientToken();

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/connect', {
        sessionId: '2_MX40NTMyODc3Mn5-fg',
        token,
        websocket: { uri: 'wss://mydomain.com/websocket/' },
      })
      .reply(200, { id: 'CALLID', connectionId: 'CONNECTIONID' });

    const resp = await client.connectToWebsocket(
      '2_MX40NTMyODc3Mn5-fg',
      token,
      { uri: 'wss://mydomain.com/websocket/' }
    );
    expect(resp.id).toEqual('CALLID');
    expect(resp.connectionId).toEqual('CONNECTIONID');
  });

  test('can disconnect a websocket', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/connect/CALLID/stop')
      .reply(200);

    await client.disconnectWebsocket('CALLID');
  });
});
