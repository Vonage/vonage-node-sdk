import nock from 'nock';
import { Auth } from '@vonage/auth';
import { Audit } from '../lib/index';
import getEvents from './__dataSets__/getEvents';
import getEvent from './__dataSets__/getEvent';

describe('Audit Events', () => {
  let client: Audit;

  beforeEach(function () {
    client = new Audit(new Auth({ apiKey: '12345', apiSecret: 'ABCDE' }));
  });

  afterEach(function () {
    client = null;
    nock.cleanAll();
  });

  test.each(getEvents)(
    'Can $label',
    async ({ request, parameters, expected }) => {
      const { url, requests } = request;

      const scope = nock(url, {
        reqheaders: {
          authorization: 'Basic MTIzNDU6QUJDREU=',
        },
      });
      requests.forEach(({ request, reply }) => {
        scope.intercept(...request).reply(...reply);
      });

      const results = [];
      for await (const event of client.getEvents(...parameters)) {
        results.push(event);
      }

      expect(results).toEqual(expected);
      expect(scope.isDone()).toBeTruthy();
    },
  );

  test('Can get event', async () => {
    const scope = nock('https://api.nexmo.com/', {
      reqheaders: {
        authorization: 'Basic MTIzNDU6QUJDREU=',
      },
    })
      .intercept(`/beta/audit/events/asdf`, 'GET')
      .reply(200, {
        id: 'asdf',
        created_at: '2022-11-15T17:30:33',
      });

    const result = await client.getEvent('asdf');

    expect(result).toEqual({
      id: 'asdf',
      createdAt: '2022-11-15T17:30:33',
    });
    expect(scope.isDone()).toBeTruthy();
  });
});
