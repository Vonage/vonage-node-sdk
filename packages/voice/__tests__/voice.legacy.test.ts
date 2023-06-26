import nock from 'nock';
import fs from 'fs';
import {
  NCCOBuilder,
  OutboundCallWithAnswerURL,
  Talk,
  Voice,
  OutboundCallWithNCCO,
} from '../lib/index';
import { Auth } from '@vonage/auth';

const BASE_URL = 'https://api.nexmo.com';

describe('voice', () => {
  let client;

  beforeEach(() => {
    client = new Voice(
      new Auth({
        applicationId: 'abcd-1234',
        privateKey: fs.readFileSync(`${__dirname}/private.test.key`).toString(),
      }),
    );
  });

  afterEach(() => {
    client = null;
    nock.cleanAll();
  });

  test('can get call information', async () => {
    const expectedResponse = {
      _links: {
        self: {
          href: '/calls/63f61863-4a51-4f6b-86e1-46edebcf9356',
        },
      },
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
      conversation_uuid: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
      to: {
        type: 'phone',
        number: '447700900000',
      },
      from: {
        type: 'phone',
        number: '447700900001',
      },
      status: 'completed',
      direction: 'outbound',
      rate: '0.39',
      price: '23.40',
      duration: '60',
      start_time: '2020-01-01 12:00:00',
      end_time: '2020-01-01 12:00:00',
      network: '65512',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356')
      .reply(200, expectedResponse);

    const results = await client.getCall(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
    );
    expect(results.uuid).toEqual('63f61863-4a51-4f6b-86e1-46edebcf9356');
  });

  test('can get all calls', async () => {
    const expectedResponse = {
      count: 100,
      page_size: 10,
      record_index: 0,
      _links: {
        self: {
          href: '/calls?page_size=10&record_index=20&order=asc',
        },
      },
      _embedded: {
        calls: [
          {
            _links: {
              self: {
                href: '/calls/63f61863-4a51-4f6b-86e1-46edebcf9356',
              },
            },
            uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            conversation_uuid: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
            to: {
              type: 'phone',
              number: '447700900000',
            },
            from: {
              type: 'phone',
              number: '447700900001',
            },
            status: 'completed',
            direction: 'outbound',
            rate: '0.39',
            price: '23.40',
            duration: '60',
            start_time: '2020-01-01 12:00:00',
            end_time: '2020-01-01 12:00:00',
            network: '65512',
          },
        ],
      },
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get('/v1/calls?')
      .reply(200, expectedResponse);

    const results = await client.search();
    expect(results.count).toEqual(100);
  });

  test('can get filtered call list', async () => {
    const expectedResponse = {
      count: 100,
      page_size: 10,
      record_index: 0,
      _links: {
        self: {
          href: '/calls?page_size=10&record_index=20&order=asc',
        },
      },
      _embedded: {
        calls: [
          {
            _links: {
              self: {
                href: '/calls/63f61863-4a51-4f6b-86e1-46edebcf9356',
              },
            },
            uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
            conversation_uuid: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
            to: {
              type: 'phone',
              number: '447700900000',
            },
            from: {
              type: 'phone',
              number: '447700900001',
            },
            status: 'completed',
            direction: 'outbound',
            rate: '0.39',
            price: '23.40',
            duration: '60',
            start_time: '2020-01-01 12:00:00',
            end_time: '2020-01-01 12:00:00',
            network: '65512',
          },
        ],
      },
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .get('/v1/calls')
      .query({ date_start: '2019-12-31', date_end: '2020-01-02' })
      .reply(200, expectedResponse);

    const results = await client.search({
      dateStart: '2019-12-31',
      dateEnd: '2020-01-02',
    });
    expect(results.count).toEqual(100);
  });

  test('can hang up call', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', {
        action: 'hangup',
      })
      .reply(204);

    await client.hangupCall('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(nock.isDone()).toBeTruthy();
  });

  test('can mute call', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', {
        action: 'mute',
      })
      .reply(204);

    await client.muteCall('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(nock.isDone()).toBeTruthy();
  });

  test('can unmute call', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', {
        action: 'unmute',
      })
      .reply(204);

    await client.unmuteCall('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(nock.isDone()).toBeTruthy();
  });

  test('can earmuff call', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', {
        action: 'earmuff',
      })
      .reply(204);

    await client.earmuffCall('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(nock.isDone()).toBeTruthy();
  });

  test('can unearmuff call', async () => {
    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', {
        action: 'unearmuff',
      })
      .reply(204);

    await client.unearmuffCall('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(nock.isDone()).toBeTruthy();
  });

  test('can transfer call with URL', async () => {
    const expectedBody = {
      action: 'transfer',
      destination: {
        type: 'ncco',
        url: ['https://example.com/ncco.json'],
      },
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', expectedBody)
      .reply(204);

    await client.transferCallWithURL(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
      'https://example.com/ncco.json',
    );
    expect(nock.isDone()).toBeTruthy();
  });

  test('can transfer call with NCCO', async () => {
    const expectedBody = {
      action: 'transfer',
      destination: {
        type: 'ncco',
        ncco: [
          {
            action: 'talk',
            text: 'This call was transferred',
          },
        ],
      },
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356', expectedBody)
      .reply(204);

    const builder = new NCCOBuilder();
    const action = new Talk('This call was transferred');
    builder.addAction(new Talk('This call was transferred'));
    await client.transferCallWithNCCO(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
      builder.build(),
    );
    expect(nock.isDone()).toBeTruthy();
  });

  test('can make a call with an answer url', async () => {
    const expectedBody = {
      answer_url: ['https://example.com/answer'],
      to: [
        {
          type: 'phone',
          number: '14155550100',
        },
      ],
      from: {
        type: 'phone',
        number: '15555551234',
      },
    };

    const expectedResponse = {
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
      status: 'completed',
      direction: 'outbound',
      conversation_uuid: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v1/calls', expectedBody)
      .reply(201, expectedResponse);

    const resp = await client.createOutboundCall(
      new OutboundCallWithAnswerURL(
        'https://example.com/answer',
        { type: 'phone', number: '14155550100' },
        { type: 'phone', number: '15555551234' },
      ),
    );

    expect(resp.uuid).toEqual(expectedResponse.uuid);
  });

  test('can make a call with an NCCO', async () => {
    const expectedBody = {
      ncco: [{ action: 'talk', text: 'This is a call from Vonage' }],
      to: [
        {
          type: 'phone',
          number: '14155550100',
        },
      ],
      from: {
        type: 'phone',
        number: '15555551234',
      },
    };

    const expectedResponse = {
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
      status: 'completed',
      direction: 'outbound',
      conversation_uuid: 'CON-f972836a-550f-45fa-956c-12a2ab5b7d22',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .post('/v1/calls', expectedBody)
      .reply(201, expectedResponse);

    const builder = new NCCOBuilder();
    const resp = await client.createOutboundCall(
      new OutboundCallWithNCCO(
        builder.addAction(new Talk('This is a call from Vonage')).build(),
        { type: 'phone', number: '14155550100' },
        { type: 'phone', number: '15555551234' },
      ),
    );

    expect(resp.uuid).toEqual(expectedResponse.uuid);
  });

  test('can stream audio into a call', async () => {
    const expectedResponse = {
      message: 'Stream started',
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
    };

    const expectedBody = {
      stream_url: ['https://example.com/audio.mp3'],
      level: '0.4',
      loop: 1,
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put(
        '/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356/stream',
        expectedBody,
      )
      .reply(200, expectedResponse);

    const results = await client.streamAudio(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
      'https://example.com/audio.mp3',
      1,
      0.4,
    );
    expect(results.uuid).toEqual('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(results.message).toEqual('Stream started');
  });

  test('can stop audio stream in a call', async () => {
    const expectedResponse = {
      message: 'Stream stopped',
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .delete('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356/stream')
      .reply(200, expectedResponse);

    const results = await client.stopStreamAudio(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
    );
    expect(results.uuid).toEqual('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(results.message).toEqual('Stream stopped');
  });

  test('can stream TTS into a call', async () => {
    const expectedResponse = {
      message: 'Talk started',
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
    };

    const expectedBody = {
      text: 'Hello. How are you today?',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356/talk', expectedBody)
      .reply(200, expectedResponse);

    const results = await client.playTTS(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
      new Talk('Hello. How are you today?'),
    );
    expect(results.uuid).toEqual('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(results.message).toEqual('Talk started');
  });

  test('can stop TTS stream in a call', async () => {
    const expectedResponse = {
      message: 'Talk stopped',
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .delete('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356/talk')
      .reply(200, expectedResponse);

    const results = await client.stopTTS(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
    );
    expect(results.uuid).toEqual('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(results.message).toEqual('Talk stopped');
  });

  test('can stream DTMF into a call', async () => {
    const expectedResponse = {
      message: 'DTMF sent',
      uuid: '63f61863-4a51-4f6b-86e1-46edebcf9356',
    };

    const expectedBody = {
      digits: '1713',
    };

    nock(BASE_URL, {
      reqheaders: {
        Authorization: (value) =>
          value.startsWith('Bearer ') && value.length > 10,
      },
    })
      .persist()
      .put('/v1/calls/63f61863-4a51-4f6b-86e1-46edebcf9356/dtmf', expectedBody)
      .reply(200, expectedResponse);

    const results = await client.playDTMF(
      '63f61863-4a51-4f6b-86e1-46edebcf9356',
      '1713',
    );
    expect(results.uuid).toEqual('63f61863-4a51-4f6b-86e1-46edebcf9356');
    expect(results.message).toEqual('DTMF sent');
  });
});
