import nock from 'nock';
import fs from  'fs';
import { BASE_URL, Video } from '../lib/video';
import { decode } from 'jsonwebtoken'

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
});
