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
    const apiResponse = {
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

    nock('https://api.nexmo.com', { reqheaders: { authorization: validateApiKeyAuth } })
      .persist()
      .get('/accounts/abcd/secrets')
      .reply(200, apiResponse);

    const lookup = await client.listSecrets('abcd');
    assert.deepEqual(lookup.links, { self: { href: 'abc123' } });
    assert.ok(Array.isArray(lookup.embedded.secrets));
    assert.deepEqual(lookup.embedded.secrets[0].id, apiResponse._embedded.secrets[0].id);
    assert.deepEqual(lookup.embedded.secrets[0].createdAt, apiResponse._embedded.secrets[0].created_at);
  });

  test('create a secret', async () => {
    const apiResponse = {
      '_links': {
        'self': {
          'href': 'abc123',
        },
      },
      'id': 'ad6dc56f-07b5-46e1-a527-85530e625800',
      'created_at': '2017-03-02T16:34:49Z',
    };

    nock('https://api.nexmo.com', { reqheaders: { authorization: validateApiKeyAuth } })
      .persist()
      .post('/accounts/abcd/secrets', { secret: 'te5ts3cret' })
      .reply(200, apiResponse);

    const lookup = await client.createSecret('abcd', 'te5ts3cret');
    assert.deepEqual(lookup.links, { self: { href: 'abc123' } });
    assert.deepEqual(lookup.id, apiResponse.id);
    assert.deepEqual(lookup.createdAt, apiResponse.created_at);
  });

  test('get a secret', async () => {
    const apiResponse = {
      '_links': {
        'self': {
          'href': 'abc123',
        },
      },
      'id': 'ad6dc56f-07b5-46e1-a527-85530e625800',
      'created_at': '2017-03-02T16:34:49Z',
    };

    nock('https://api.nexmo.com', { reqheaders: { authorization: validateApiKeyAuth } })
      .persist()
      .get('/accounts/abcd/secrets/ad6dc56f-07b5-46e1-a527-85530e625800')
      .reply(200, apiResponse);

    const lookup = await client.getSecret(
      'abcd',
      'ad6dc56f-07b5-46e1-a527-85530e625800',
    );
    assert.deepEqual(lookup.links, { self: { href: 'abc123' } });
    assert.deepEqual(lookup.id, apiResponse.id);
    assert.deepEqual(lookup.createdAt, apiResponse.created_at);
  });

  test('delete a secret', async () => {
    nock('https://api.nexmo.com', { reqheaders: { authorization: validateApiKeyAuth } })
      .persist()
      .delete('/accounts/abcd/secrets/ad6dc56f-07b5-46e1-a527-85530e625800')
      .reply(204);

    await client.deleteSecret('abcd', 'ad6dc56f-07b5-46e1-a527-85530e625800');
  });
});
