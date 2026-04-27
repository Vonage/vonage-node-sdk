import nock from 'nock';
import { Secrets } from '../lib/index.js';
import { validateApiKeyAuth, apiKeyAuth} from '../../../testHelpers/index.js';
import { describe, test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

describe('secrets', () => {
  let client;

  beforeEach(() => {
    client = new Secrets(apiKeyAuth);
  });

  test('list secrets', async () => {
    const expectedResponse = {
      '_links': {
        'self': {
          'href': 'abc123',
        },
      },
      '_embedded': {
        'secrets': [
          {
            '_links': {
              'self': {
                'href': 'abc123',
              },
            },
            'id': 'ad6dc56f-07b5-46e1-a527-85530e625800',
            'created_at': '2017-03-02T16:34:49Z',
          },
        ],
      },
    };

    nock('https://api.nexmo.com', { reqheaders: { authorization} })
      .persist()
      .get('/accounts/abcd/secrets')
      .reply(200, expectedResponse);

    const lookup = await client.listSecrets('abcd');
    assert.deepEqual(lookup._links, expectedResponse._links);
    assert.deepEqual(lookup._embedded, expectedResponse._embedded);
  });

  test('create a secret', async () => {
    const expectedResponse = {
      '_links': {
        'self': {
          'href': 'abc123',
        },
      },
      'id': 'ad6dc56f-07b5-46e1-a527-85530e625800',
      'created_at': '2017-03-02T16:34:49Z',
    };

    nock('https://api.nexmo.com', { reqheaders: { authorization} })
      .persist()
      .post('/accounts/abcd/secrets', { secret: 'te5ts3cret' })
      .reply(200, expectedResponse);

    const lookup = await client.createSecret('abcd', 'te5ts3cret');
    assert.deepEqual(lookup._links, expectedResponse._links);
    assert.deepEqual(lookup.id, expectedResponse.id);
    assert.deepEqual(lookup.created_at, expectedResponse.created_at);
  });

  test('get a secret', async () => {
    const expectedResponse = {
      '_links': {
        'self': {
          'href': 'abc123',
        },
      },
      'id': 'ad6dc56f-07b5-46e1-a527-85530e625800',
      'created_at': '2017-03-02T16:34:49Z',
    };

    nock('https://api.nexmo.com', { reqheaders: { authorization} })
      .persist()
      .get('/accounts/abcd/secrets/ad6dc56f-07b5-46e1-a527-85530e625800')
      .reply(200, expectedResponse);

    const lookup = await client.getSecret(
      'abcd',
      'ad6dc56f-07b5-46e1-a527-85530e625800',
    );
    assert.deepEqual(lookup._links, expectedResponse._links);
    assert.deepEqual(lookup.id, expectedResponse.id);
    assert.deepEqual(lookup.created_at, expectedResponse.created_at);
  });

  test('delete a secret', async () => {
    nock('https://api.nexmo.com', { reqheaders: { authorization} })
      .persist()
      .delete('/accounts/abcd/secrets/ad6dc56f-07b5-46e1-a527-85530e625800')
      .reply(204);

    await client.deleteSecret('abcd', 'ad6dc56f-07b5-46e1-a527-85530e625800');
    expect(nock.isDone()).toBeTruthy();
  });
});
