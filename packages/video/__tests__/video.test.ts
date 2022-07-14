import nock from 'nock';
import fs from  'fs';
import { BASE_URL, Video } from '../lib/video';
import { decode } from 'jsonwebtoken'
import { ArchiveLayoutType } from '../lib/enums/ArchiveLayoutType';
import { MediaMode } from '../lib/interfaces/MediaMode';

describe('video', () => {
  let client;

  beforeEach(() => {
      client = new Video({ applicationId: 'abcd-1234', privateKey: fs.readFileSync(`${__dirname}/private.test.key`).toString() });
  });

  afterEach(() => {
      client = null;
  });

  test("can create a server session", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/session/create')
      .reply(200, [
        {
          "session_id": "the session ID",
          "project_id": "your OpenTok API key",
          "create_dt": "The creation date",
          "media_server_url": "The URL of the OpenTok media router used by the session -- ignore this"
        }
      ]);

    const results = await client.createSession();
    expect(results[0].session_id).toEqual('the session ID');
  });

  test("can creating a server session properly sets correct p2p preference for relayed", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/session/create', {'p2p.preferences': 'enabled'})
      .reply(200, [
        {
          "session_id": "the session ID",
          "project_id": "your OpenTok API key",
          "create_dt": "The creation date",
          "media_server_url": "The URL of the OpenTok media router used by the session -- ignore this"
        }
      ]);

    const results = await client.createSession({mediaMode: MediaMode.RELAYED});
    expect(results[0].session_id).toEqual('the session ID');
  });

  test("can creating a server session properly sets correct p2p preference for routed", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/session/create', {'p2p.preferences': 'disabled'})
      .reply(200, [
        {
          "session_id": "the session ID",
          "project_id": "your OpenTok API key",
          "create_dt": "The creation date",
          "media_server_url": "The URL of the OpenTok media router used by the session -- ignore this"
        }
      ]);

    const results = await client.createSession({mediaMode: MediaMode.ROUTED});
    expect(results[0].session_id).toEqual('the session ID');
  });

  test("can generate a client JWT token", async () => {
    const token = await client.generateClientToken('abcd');
    const decoded: any = decode(token, {json: true, complete: true});

    expect(decoded.payload.application_id).toEqual('abcd-1234');
    expect(decoded.payload.scope).toEqual('session.connect');
    expect(decoded.payload.session_id).toEqual('abcd');
  });

  test("can send a signal to everyone", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/session/1234/signal', {type: "foo", data: "bar"})
      .reply(200);

    await client.sendSignal({type: "foo", data: "bar"}, "1234");
  });

  test("can send a signal to one connection", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/session/1234/connection/qwer/signal', {type: "foo", data: "bar"})
      .reply(200);

    await client.sendSignal({type: "foo", data: "bar"}, "1234", "qwer");
  });

  test("can start an archive with no options", async () => {
    const expectedResponse = {
      "createdAt" : 1384221730555,
      "duration" : 0,
      "hasAudio" : true,
      "hasVideo" : true,
      "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
      "name" : "The archive name you supplied",
      "outputMode" : "composed",
      "projectId" : 234567,
      "reason" : "",
      "resolution" : "640x480",
      "sessionId" : "flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN",
      "size" : 0,
      "status" : "started",
      "streamMode" : "auto",
      "url" : null
    };

    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/archive', {sessionId: '1234'})
      .reply(200, expectedResponse);

    const resp = await client.startArchive("1234");
    expect(resp.name).toEqual(expectedResponse.name);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
  });

  test("can start an archive with options", async () => {
    const expectedResponse = {
      "createdAt" : 1384221730555,
      "duration" : 0,
      "hasAudio" : true,
      "hasVideo" : true,
      "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
      "name" : "The archive name you supplied",
      "outputMode" : "composed",
      "projectId" : 234567,
      "reason" : "",
      "resolution" : "640x480",
      "sessionId" : "flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN",
      "size" : 0,
      "status" : "started",
      "streamMode" : "auto",
      "url" : null
    };

    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/archive', {sessionId: '1234', name: 'test', hasVideo: false})
      .reply(200, expectedResponse);

    const resp = await client.startArchive("1234", {name: 'test', hasVideo: false});
    expect(resp.name).toEqual(expectedResponse.name);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
  });

  test("can stop an archive", async () => {
    const expectedResponse = {
      "createdAt" : 1384221730555,
      "duration" : 60,
      "hasAudio" : true,
      "hasVideo" : true,
      "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
      "name" : "The archive name you supplied",
      "projectId" : 234567,
      "reason" : "",
      "resolution" : "640x480",
      "sessionId" : "flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN",
      "size" : 0,
      "status" : "stopped",
      "url" : null
    };

    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/stop')
      .reply(200, expectedResponse);

    const resp = await client.stopArchive("b40ef09b-3811-4726-b508-e41a0f96c68f");
    expect(resp.duration).toEqual(expectedResponse.duration);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
  });

  test("can list all archives", async () => {
    const expectedResponse = {
      "count" : 2,
      "items" : [ {
        "createdAt" : 1384221730000,
        "duration" : 5049,
        "hasAudio" : true,
        "hasVideo" : true,
        "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
        "name" : "Foo",
        "projectId" : 123456,
        "reason" : "",
        "resolution" : "640x480",
        "sessionId" : "2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4",
        "size" : 247748791,
        "status" : "available",
        "streamMode" : "manual",
        "streams" : [],
        "url" : "https://tokbox.com.archive2.s3.amazonaws.com/123456/09141e29-8770-439b-b180-337d7e637545/archive.mp4"
      }, {
        "createdAt" : 1384221380000,
        "duration" : 328,
        "hasAudio" : true,
        "hasVideo" : true,
        "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
        "name" : "Foo",
        "projectId" : 123456,
        "reason" : "",
        "resolution" : "640x480",
        "sessionId" : "2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4",
        "size" : 18023312,
        "status" : "available",
        "streamMode" : "auto",
        "streams" : [],
        "url" : "https://tokbox.com.archive2.s3.amazonaws.com/123456/b40ef09b-3811-4726-b508-e41a0f96c68f/archive.mp4"
      } ]};

    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .get('/v2/project/abcd-1234/archive')
      .reply(200, expectedResponse);

    const resp = await client.searchArchives();
    expect(resp.count).toEqual(expectedResponse.count);
    expect(resp.items[0].sessionId).toEqual(expectedResponse.items[0].sessionId);
    expect(resp.items[1].sessionId).toEqual(expectedResponse.items[1].sessionId);
  });

  test("can search archives", async () => {
    const expectedResponse = {
      "count" : 1,
      "items" : [ {
        "createdAt" : 1384221730000,
        "duration" : 5049,
        "hasAudio" : true,
        "hasVideo" : true,
        "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
        "name" : "Foo",
        "projectId" : 123456,
        "reason" : "",
        "resolution" : "640x480",
        "sessionId" : "2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4",
        "size" : 247748791,
        "status" : "available",
        "streamMode" : "manual",
        "streams" : [],
        "url" : "https://tokbox.com.archive2.s3.amazonaws.com/123456/09141e29-8770-439b-b180-337d7e637545/archive.mp4"
      }, ]};

    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .get('/v2/project/abcd-1234/archive?sessionId=2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4')
      .reply(200, expectedResponse);

    const resp = await client.searchArchives({sessionId: '2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4'});
    expect(resp.count).toEqual(expectedResponse.count);
    expect(resp.items[0].sessionId).toEqual(expectedResponse.items[0].sessionId);
  });

  test("can get a single archive", async () => {
    const expectedResponse = {
      "createdAt" : 1384221730000,
      "duration" : 5049,
      "hasAudio" : true,
      "hasVideo" : true,
      "id" : "b40ef09b-3811-4726-b508-e41a0f96c68f",
      "name" : "Foo",
      "outputMode" : "composed",
      "projectId" : 123456,
      "reason" : "",
      "resolution" : "640x480",
      "sessionId" : "2_MX40NzIwMzJ-flR1ZSBPY3QgMjkgMTI6MTM6MjMgUERUIDIwMTN-MC45NDQ2MzE2NH4",
      "size" : 247748791,
      "status" : "available",
      "streamMode" : "auto",
      "streams" : [],
      "url" : "https://tokbox.com.archive2.s3.amazonaws.com/123456/09141e29-8770-439b-b180-337d7e637545/archive.mp4"
    };

    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .get('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f')
      .reply(200, expectedResponse);

    const resp = await client.getArchive("b40ef09b-3811-4726-b508-e41a0f96c68f");
    expect(resp.duration).toEqual(expectedResponse.duration);
    expect(resp.sessionId).toEqual(expectedResponse.sessionId);
    expect(resp.streams).toEqual([]);
  });

  test("can delete an archive", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .delete('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f')
      .reply(204);

    const resp = await client.deleteArchive("b40ef09b-3811-4726-b508-e41a0f96c68f");
  });

  test("can update an archive layout", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .put('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/layout', {type: ArchiveLayoutType.BEST_FIT})
      .reply(204);

    await client.updateArchiveLayout('b40ef09b-3811-4726-b508-e41a0f96c68f', {type: ArchiveLayoutType.BEST_FIT});
  });

  test("can add a stream to an archive", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .patch('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/stream', {addStream: 'test-1234', hasAudio: false, hasVideo: true})
      .reply(204);

    await client.addArchiveStream('b40ef09b-3811-4726-b508-e41a0f96c68f', 'test-1234', false);
  });

  test("can remove a stream from an archive", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .patch('/v2/project/abcd-1234/archive/b40ef09b-3811-4726-b508-e41a0f96c68f/stream', {removeStream: 'test-1234'})
      .reply(204);

    await client.removeArchiveStream('b40ef09b-3811-4726-b508-e41a0f96c68f', 'test-1234');
  });

  test("can force disconnect a client", async () => {
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .delete('/v2/project/abcd-1234/session/sess-1234/connection/conn-1234')
      .reply(204);

    await client.disconnectClient('sess-1234', 'conn-1234');
  });

  test("can get stream info", async () => {
    const expectedResponse = {
      "id": "8b732909-0a06-46a2-8ea8-074e64d43422",
      "videoType": "camera",
      "name": "",
      "layoutClassList": ["full"]
    };
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .get('/v2/project/abcd-1234/session/sess-1234/stream/8b732909-0a06-46a2-8ea8-074e64d43422')
      .reply(200, expectedResponse);

    const resp = await client.getStreamInfo('sess-1234', "8b732909-0a06-46a2-8ea8-074e64d43422");
    expect(resp.id).toEqual(expectedResponse.id);
  });

  test("can get all stream info", async () => {
    const expectedResponse = {
      "count": 1,
      "items": [
        {
          "id": "8b732909-0a06-46a2-8ea8-074e64d43422",
          "videoType": "camera",
          "name": "",
          "layoutClassList": ["full"]
        }
      ]
    };
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .get('/v2/project/abcd-1234/session/sess-1234/stream')
      .reply(200, expectedResponse);

    const resp = await client.getStreamInfo('sess-1234');
    expect(resp.items[0].id).toEqual(expectedResponse.items[0].id);
    expect(resp.count).toEqual(expectedResponse.count);
  });

  test("can mute all streams", async () => {
    const expectedResponse = {
      "id":  "12312",
      "secret":  "567890",
      "status": "ACTIVE",
      "name": "Joe Montana",
      "environment": "standard",
      "createdAt": 1414642898000 // A UNIX timestamp (in milliseconds)
    };
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/session/sess-1234/mute', { active: true, excludedStreamIds: ['stream-pub-1234']})
      .reply(200, expectedResponse);

    const resp = await client.muteAllStreams('sess-1234', true, ['stream-pub-1234']);
    expect(resp.id).toEqual(expectedResponse.id);
  });

  test("can mute a single stream", async () => {
    const expectedResponse = {
      "id":  "12312",
      "secret":  "567890",
      "status": "ACTIVE",
      "name": "Joe Montana",
      "environment": "standard",
      "createdAt": 1414642898000 // A UNIX timestamp (in milliseconds)
    };
    nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
      .persist()
      .post('/v2/project/abcd-1234/session/sess-1234/stream/stream-user-1234/mute')
      .reply(200, expectedResponse);

    const resp = await client.muteStream('sess-1234', 'stream-user-1234');
    expect(resp.id).toEqual(expectedResponse.id);
  });
});
