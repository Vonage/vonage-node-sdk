import nock from 'nock';
import { decode } from 'jsonwebtoken';
import { Auth } from '@vonage/auth';
import testDataSets from './__dataSets__/index.js';
import { Jwt } from 'jsonwebtoken';
import { describe, test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';

import {
  Video,
  LayoutType,
  MediaMode,
  ArchiveMode,
  SingleStreamLayoutResponse,
  SingleArchiveResponseWithMaxBitrate,
  SingleArchiveResponseWithTranscription,
  SingleArchiveResponseWithQuantizationParameter,
  MultiStreamLayoutResponse,
} from '../lib/index.js';

import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  keyAuth,
  validateBearerAuth,
  testPrivateKey,
} from '../../../testHelpers/index.js';
const BASE_URL = 'https://video.api.vonage.com/'.replace(/\/+$/, '');

  session_id;
  sub;
  acl: {
    paths;
  };
  exp;
  initial_layout_class_list;
  connection_data;
  role;
  scope;
};

const applicationsTest = testDataSets.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      return {
        label: 'https://video.api.vonage.com',
        reqHeaders: {
          authorization},
        requests: [test.request]: [test.response](keyAuth),
        clientMethod: test.parameters,
        generator: false,
        expected};
    }),
  };
});

VonageTest(applicationsTest);

// Legacy unit tests
describe('video', () => {
  let client;

  beforeEach(() => {
    client = new Video(
      new Auth({
        applicationId: 'abcd-1234',
        privateKey})
    );
  });

  afterEach(() => {
    nock.cleanAll();
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
    assert.strictEqual(session.sessionId, 'the session ID');
    assert.deepEqual(session.archiveMode, ArchiveMode.MANUAL);
    assert.deepEqual(session.mediaMode, MediaMode.ROUTED);
    assert.strictEqual(session.location, null);
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
      mediaMode});
    assert.strictEqual(session.sessionId, 'the session ID');
    assert.deepEqual(session.archiveMode, ArchiveMode.MANUAL);
    assert.deepEqual(session.mediaMode, MediaMode.RELAYED);
    assert.strictEqual(session.location, null);
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

    const session = await client.createSession({ mediaMode});
    assert.strictEqual(session.sessionId, 'the session ID');
    assert.deepEqual(session.archiveMode, ArchiveMode.MANUAL);
    assert.deepEqual(session.mediaMode, MediaMode.ROUTED);
    assert.strictEqual(session.location, null);
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
      archiveMode});
    assert.strictEqual(session.sessionId, 'the session ID');
    assert.deepEqual(session.archiveMode, ArchiveMode.MANUAL);
    assert.deepEqual(session.mediaMode, MediaMode.ROUTED);
    assert.strictEqual(session.location, null);
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
      archiveMode});
    assert.strictEqual(session.sessionId, 'the session ID');
    assert.deepEqual(session.archiveMode, ArchiveMode.ALWAYS);
    assert.deepEqual(session.mediaMode, MediaMode.ROUTED);
    assert.strictEqual(session.location, null);
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
    assert.strictEqual(session.sessionId, 'the session ID');
    assert.deepEqual(session.archiveMode, ArchiveMode.MANUAL);
    assert.deepEqual(session.mediaMode, MediaMode.ROUTED);
    assert.strictEqual(session.location, '10.0.1.2');
  });

  test('can generate a client JWT token', async () => {
    const token = await client.generateClientToken('abcd');
    const decoded= decode(token, { json: true });
    const { payload } = decoded;

    expect((payload as jwtClaims).application_id).toBe('abcd-1234');
    expect((payload as jwtClaims).scope).toBe('session.connect');
    expect((payload as jwtClaims).session_id).toBe('abcd');
    expect((payload as jwtClaims).sub).toBe('video');
    expect((payload as jwtClaims).acl.paths).toEqual({ '/session/**': {} });
  });

  test('can generate a client JWT token with renamed values', async () => {
    const now = Math.round(new Date().getTime() / 1000) + 500;
    const token = await client.generateClientToken('abcd', {
      data: 'test',
      expireTime: ['foo', 'bar'],
    });
    const decoded= decode(token, { json: true });
    const { payload } = decoded;

    expect((payload as jwtClaims).application_id).toBe('abcd-1234');
    expect((payload as jwtClaims).scope).toBe('session.connect');
    expect((payload as jwtClaims).session_id).toBe('abcd');
    expect((payload as jwtClaims).connection_data).toBe('test');
    expect((payload as jwtClaims).exp).toEqual(now);
    expect((payload as jwtClaims).initial_layout_class_list).toBe('foo bar');
  });

  test('can generate a client JWT token with custom options', async () => {
    const token = await client.generateClientToken('abcd', {
      role: 'publisher',
    });
    const decoded= decode(token, { json: true });
    const { payload } = decoded;

    expect((payload as jwtClaims).application_id).toBe('abcd-1234');
    expect((payload as jwtClaims).scope).toBe('session.connect');
    expect((payload as jwtClaims).session_id).toBe('abcd');
    expect((payload as jwtClaims).role).toBe('publisher');
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
    expect(nock.isDone()).toBeTruthy();
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
    expect(nock.isDone()).toBeTruthy();
  });

  test('can start an archive with no options', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
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
      url};

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
    assert.deepEqual(resp.name, expectedResponse.name);
    assert.deepEqual(resp.sessionId, expectedResponse.sessionId);
  });

  test('can start an archive with options', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
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
      maxBitrate: 0,
      url};

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
        hasVideo})
      .reply(200, expectedResponse);

    const resp = await client.startArchive('1234', {
      name: 'test',
      hasVideo});
    assert.deepEqual(resp.name, expectedResponse.name);
    assert.deepEqual(resp.sessionId, expectedResponse.sessionId);
  });

  test('can create an archive with a maxBitrate', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Archive with maxBitrate',
      outputMode: 'composed',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'started',
      streamMode: 'auto',
      maxBitrate: 9000,
      url};

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/archive', {
        sessionId: '1234',
        name: 'Archive with maxBitrate',
        maxBitrate: 9000,
      })
      .reply(200, expectedResponse);

    const resp = await client.startArchive<SingleArchiveResponseWithMaxBitrate>('1234', {
      name: 'Archive with maxBitrate',
      maxBitrate: 9000,
    });
    assert.deepEqual(resp.name, expectedResponse.name);
    assert.deepEqual(resp.maxBitrate, expectedResponse.maxBitrate);
  });

  test('can create an archive with a quantizationParameter', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Archive with quantizationParameter',
      outputMode: 'composed',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'started',
      streamMode: 'auto',
      quantizationParameter: 15,
      url};

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/archive', {
        sessionId: '1234',
        name: 'Archive with quantizationParameter',
        quantizationParameter: 15,
      })
      .reply(200, expectedResponse);

    const resp = await client.startArchive('1234', {
      name: 'Archive with quantizationParameter',
      quantizationParameter: 15,
    });
    assert.deepEqual(resp.name, expectedResponse.name);
    //    assert.deepEqual(resp.quantizationParameter, expectedResponse.quantizationParameter);
  });

  test('cannot create an archive with both maxBitrate and quantizationParameter', async () => {
    await expect(
      client.startArchive('1234', {
        name: 'Invalid Archive',
        maxBitrate: 9000,
        quantizationParameter: 15,
      })
    ).rejects.toThrow(
      'Request failed with status code 401'
    );
  });

  test('can create an archive with hasTranscription set to true', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Archive with transcription',
      outputMode: 'composed',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'started',
      streamMode: 'auto',
      hasTranscription: null,
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
        name: 'Archive with transcription',
        hasTranscription})
      .reply(200, expectedResponse);

    const resp = await client.startArchive('1234', {
      name: 'Archive with transcription',
      hasTranscription});
    assert.deepEqual(resp.name, expectedResponse.name);
    assert.deepEqual(resp.hasTranscription, expectedResponse.hasTranscription);
  });

  test('can create an archive with transcriptionProperties', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 0,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Archive with transcription properties',
      outputMode: 'composed',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'started',
      streamMode: 'auto',
      hasTranscription: {
        primaryLanguageCode: 'es-ES',
        hasSummary},
      url};

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v2/project/abcd-1234/archive', {
        sessionId: '1234',
        name: 'Archive with transcription properties',
        hasTranscription: {
          primaryLanguageCode: 'es-ES',
          hasSummary},
      })
      .reply(200, expectedResponse);

    const resp = await client.startArchive<SingleArchiveResponseWithTranscription>('1234', {
      name: 'Archive with transcription properties',
      hasTranscription: {
        primaryLanguageCode: 'es-ES',
        hasSummary},
    });
    assert.deepEqual(resp.name, expectedResponse.name);
    assert.deepEqual(resp.transcriptionProperties?.primaryLanguageCode, 
      expectedResponse.transcriptionProperties.primaryLanguageCode
    );
    assert.deepEqual(resp.transcriptionProperties?.hasSummary, 
      expectedResponse.transcriptionProperties.hasSummary
    );
  });

  test('can stop an archive', async () => {
    const expectedResponse = {
      createdAt: 1384221730555,
      duration: 60,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'The archive name you supplied',
      projectId: 234567,
      reason: '',
      resolution: '640x480',
      sessionId: 'flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN',
      size: 0,
      status: 'stopped',
      url};

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
    assert.deepEqual(resp.duration, expectedResponse.duration);
    assert.deepEqual(resp.sessionId, expectedResponse.sessionId);
  });

  test('can list all archives', async () => {
    const expectedResponse = {
      count: 2,
      items: [
        {
          createdAt: 1384221730000,
          duration: 5049,
          hasAudio: true,
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
    assert.deepEqual(resp.count, expectedResponse.count);
    assert.deepEqual(resp.items[0].sessionId, 
      expectedResponse.items[0].sessionId
    );
    assert.deepEqual(resp.items[1].sessionId, 
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
    assert.deepEqual(resp.count, expectedResponse.count);
    assert.deepEqual(resp.items[0].sessionId, 
      expectedResponse.items[0].sessionId
    );
  });

  test('can get a single archive', async () => {
    const expectedResponse = {
      createdAt: 1384221730000,
      duration: 5049,
      hasAudio: true,
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
    assert.deepEqual(resp.duration, expectedResponse.duration);
    assert.deepEqual(resp.sessionId, expectedResponse.sessionId);
    assert.deepEqual(resp.streams, []);
  });

  test('can get a single archive that has a max bitrate', async () => {
    const expectedResponse = {
      createdAt: 1384221730000,
      duration: 5049,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Foo',
      outputMode: 'composed',
      projectId: 123456,
      reason: '',
      resolution: '640x480',
      maxBitrate: 9000,
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

    const resp = await client.getArchive<SingleArchiveResponseWithMaxBitrate>(
      'b40ef09b-3811-4726-b508-e41a0f96c68f'
    );
    assert.deepEqual(resp.duration, expectedResponse.duration);
    assert.deepEqual(resp.sessionId, expectedResponse.sessionId);
    assert.deepEqual(resp.maxBitrate, expectedResponse.maxBitrate);
    assert.deepEqual(resp.streams, []);
  });

  test('can get a single archive that has a quantization parameter', async () => {
    const expectedResponse = {
      createdAt: 1384221730000,
      duration: 5049,
      hasAudio: true,
      id: 'b40ef09b-3811-4726-b508-e41a0f96c68f',
      name: 'Foo',
      outputMode: 'composed',
      projectId: 123456,
      reason: '',
      resolution: '640x480',
      quantizationParameter: 15,
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

    const resp = await client.getArchive<SingleArchiveResponseWithQuantizationParameter>(
      'b40ef09b-3811-4726-b508-e41a0f96c68f'
    );
    assert.deepEqual(resp.duration, expectedResponse.duration);
    assert.deepEqual(resp.sessionId, expectedResponse.sessionId);
    assert.deepEqual(resp.quantizationParameter, expectedResponse.quantizationParameter);
    assert.deepEqual(resp.streams, []);
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

    await client.deleteArchive(
      'b40ef09b-3811-4726-b508-e41a0f96c68f'
    );
    expect(nock.isDone()).toBeTruthy();
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
        { type}
      )
      .reply(204);

    await client.updateArchiveLayout('b40ef09b-3811-4726-b508-e41a0f96c68f', {
      type});
    expect(nock.isDone()).toBeTruthy();
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
        { addStream: 'test-1234', hasAudio: true }
      )
      .reply(204);

    await client.addArchiveStream(
      'b40ef09b-3811-4726-b508-e41a0f96c68f',
      'test-1234',
      false
    );
    expect(nock.isDone()).toBeTruthy();
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
    expect(nock.isDone()).toBeTruthy();
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
    expect(nock.isDone()).toBeTruthy();
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
    expect((resp).id).toEqual(expectedResponse.id);
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
    expect((resp).items[0].id).toEqual(expectedResponse.items[0].id);
    expect((resp).count).toEqual(expectedResponse.count);
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
        active: ['stream-pub-1234'],
      })
      .reply(200, expectedResponse);

    const resp = await client.forceMuteAll('sess-1234', ['stream-pub-1234']);
    assert.deepEqual(resp.id, expectedResponse.id);
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
        active: [],
      })
      .reply(200, expectedResponse);

    const resp = await client.disableForceMute('sess-1234');
    assert.deepEqual(resp.id, expectedResponse.id);
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
    assert.deepEqual(resp.id, expectedResponse.id);
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
    expect(nock.isDone()).toBeTruthy();
  });

  test('can initiate a SIP call', async () => {
    const options = {
      token('session-id'),
      sip: {
        uri: 'sip@sip.partner.com;transport=tls',
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

    const resp = await client.initiateSIPCall('2_MX40NTMyODc3Mn5-fg', options);

    assert.deepEqual(resp.id, expectedResponse.id);
    assert.deepEqual(resp.connectionId, expectedResponse.connectionId);
    assert.deepEqual(resp.streamId, expectedResponse.streamId);
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
    expect(nock.isDone()).toBeTruthy();
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
    expect(nock.isDone()).toBeTruthy();
  });

  test('can connect to a websocket', async () => {
    const token = client.generateClientToken('session-id');

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
    assert.strictEqual(resp.id, 'CALLID');
    assert.strictEqual(resp.connectionId, 'CONNECTIONID');
  });

  test('can connect to a websocket with bidirectional flag', async () => {
    const token = client.generateClientToken('session-id');

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
        websocket: {
          uri: 'wss://mydomain.com/websocket/',
          bidirectional},
      })
      .reply(200, { id: 'CALLID', connectionId: 'CONNECTIONID' });

    const resp = await client.connectToWebsocket(
      '2_MX40NTMyODc3Mn5-fg',
      token,
      {
        uri: 'wss://mydomain.com/websocket/',
        bidirectional}
    );
    assert.strictEqual(resp.id, 'CALLID');
    assert.strictEqual(resp.connectionId, 'CONNECTIONID');
  });

  test('can connect to a websocket with bidirectional flag set to false', async () => {
    const token = client.generateClientToken('session-id');

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
        websocket: {
          uri: 'wss://mydomain.com/websocket/',
          bidirectional},
      })
      .reply(200, { id: 'CALLID', connectionId: 'CONNECTIONID' });

    const resp = await client.connectToWebsocket(
      '2_MX40NTMyODc3Mn5-fg',
      token,
      {
        uri: 'wss://mydomain.com/websocket/',
        bidirectional}
    );
    assert.strictEqual(resp.id, 'CALLID');
    assert.strictEqual(resp.connectionId, 'CONNECTIONID');
  });

  test('can connect to a websocket with bidirectional flag and other properties', async () => {
    const token = client.generateClientToken('session-id');

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
        websocket: {
          uri: 'wss://mydomain.com/websocket/',
          streams: ['stream1', 'stream2'],
          headers: { 'Authorization': 'Bearer token123' },
          bidirectional},
      })
      .reply(200, { id: 'CALLID', connectionId: 'CONNECTIONID' });

    const resp = await client.connectToWebsocket(
      '2_MX40NTMyODc3Mn5-fg',
      token,
      {
        uri: 'wss://mydomain.com/websocket/',
        streams: ['stream1', 'stream2'],
        headers: { 'Authorization': 'Bearer token123' },
        bidirectional}
    );
    assert.strictEqual(resp.id, 'CALLID');
    assert.strictEqual(resp.connectionId, 'CONNECTIONID');
  });

  test('can connect to a websocket with all WebSocketConfig properties including bidirectional', async () => {
    const token = client.generateClientToken('session-id');

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
        websocket: {
          uri: 'wss://mydomain.com/websocket/',
          streams: ['stream1', 'stream2'],
          headers: { 'Authorization': 'Bearer token123', 'Custom-Header': 'value' },
          audioRate: 16000,
          bidirectional},
      })
      .reply(200, { id: 'CALLID', connectionId: 'CONNECTIONID' });

    const resp = await client.connectToWebsocket(
      '2_MX40NTMyODc3Mn5-fg',
      token,
      {
        uri: 'wss://mydomain.com/websocket/',
        streams: ['stream1', 'stream2'],
        headers: { 'Authorization': 'Bearer token123', 'Custom-Header': 'value' },
        audioRate: 16000,
        bidirectional}
    );
    assert.strictEqual(resp.id, 'CALLID');
    assert.strictEqual(resp.connectionId, 'CONNECTIONID');
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
    expect(nock.isDone()).toBeTruthy();
  });
});
