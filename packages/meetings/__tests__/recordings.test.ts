import nock from 'nock';
import { Client } from '@vonage/server-client';
import { RecordingStatus, Meetings } from '../lib';
import { getClient, getScope } from './common';

const session = {
  id: 'my-recording',
  session_id: 'my-session',
  started_at: '2023-01-23T18:35:06.000Z',
  ended_at: '2023-01-23T18:40:24.000Z',
  status: RecordingStatus.STOPPED,
  _links: {
    url: {
      href: 'https://example.vonage.com/meeting-recording',
    },
  },
};

describe('Meetings > Recordings', () => {
  let client: Meetings;
  let scope: nock.Scope;

  beforeEach(() => {
    client = getClient();
    scope = getScope();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  test('Can get recording by id', async () => {
    scope
      .get('/v1/meetings/recordings/my-awesome-recording')
      .reply(200, session);

    expect(await client.getRecording('my-awesome-recording')).toEqual({
      ...Client.transformers.camelCaseObjectKeys(session, true),
      url: session._links.url.href,
    });

    expect(nock.isDone()).toBeTruthy();
  });

  test('Can get recordings for session', async () => {
    scope.get('/v1/meetings/sessions/my-session').reply(200, {
      _embedded: {
        recordings: [session],
      },
    });

    const recordings = await client.getSessionRecordings('my-session');
    const recording = await recordings.next();

    expect(recording.value).toEqual({
      ...Client.transformers.camelCaseObjectKeys(session, true),
      url: session._links.url.href,
    });
    expect(nock.isDone()).toBeTruthy();
  });

  test('Can delete recording by id', async () => {
    scope.delete('/v1/meetings/recordings/my-awesome-recording').reply(204);

    await client.deleteRecording('my-awesome-recording');

    expect(nock.isDone()).toBeTruthy();
  });
});
