import nock from 'nock';
import { Secrets } from '../lib/index';
import { Auth } from '@vonage/auth';

describe('secrets', () => {
  let client;

  beforeEach(() => {
    client = new Secrets(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
  });

  afterEach(() => {
    client = null;
  });

  test("list secrets", async () => {
    const expectedResponse = {
      "_links": {
        "self": {
          "href": "abc123",
        },
      },
      "_embedded": {
        "secrets": [
          {
            "_links": {
              "self": {
                "href": "abc123",
              },
            },
            "id": "ad6dc56f-07b5-46e1-a527-85530e625800",
            "created_at": "2017-03-02T16:34:49Z",
          },
        ],
      },
    };

    nock("https://api.nexmo.com", { reqheaders: { 'Authorization': 'Basic YWJjZDoxMjM0' } })
      .persist()
      .get('/accounts/abcd/secrets')
      .reply(200, expectedResponse);

    const lookup = await client.listSecrets('abcd');
    expect(lookup._links).toEqual(expectedResponse._links);
    expect(lookup._embedded).toEqual(expectedResponse._embedded);
  });

  test("create a secret", async () => {
    const expectedResponse = {
      "_links": {
        "self": {
          "href": "abc123",
        },
      },
      "id": "ad6dc56f-07b5-46e1-a527-85530e625800",
      "created_at": "2017-03-02T16:34:49Z",
    };

    nock("https://api.nexmo.com", { reqheaders: { 'Authorization': 'Basic YWJjZDoxMjM0' } })
      .persist()
      .post('/accounts/abcd/secrets', { secret: 'te5ts3cret!' })
      .reply(200, expectedResponse);

    const lookup = await client.createSecret('abcd', 'te5ts3cret!');
    expect(lookup._links).toEqual(expectedResponse._links);
    expect(lookup.id).toEqual(expectedResponse.id);
    expect(lookup.created_at).toEqual(expectedResponse.created_at);
  });

  test("get a secret", async () => {
    const expectedResponse = {
      "_links": {
        "self": {
          "href": "abc123",
        },
      },
      "id": "ad6dc56f-07b5-46e1-a527-85530e625800",
      "created_at": "2017-03-02T16:34:49Z",
    };

    nock("https://api.nexmo.com", { reqheaders: { 'Authorization': 'Basic YWJjZDoxMjM0' } })
      .persist()
      .get('/accounts/abcd/secrets/ad6dc56f-07b5-46e1-a527-85530e625800')
      .reply(200, expectedResponse);

    const lookup = await client.getSecret(
      'abcd',
      'ad6dc56f-07b5-46e1-a527-85530e625800',
    );
    expect(lookup._links).toEqual(expectedResponse._links);
    expect(lookup.id).toEqual(expectedResponse.id);
    expect(lookup.created_at).toEqual(expectedResponse.created_at);
  });

  test("delete a secret", async () => {
    nock("https://api.nexmo.com", { reqheaders: { 'Authorization': 'Basic YWJjZDoxMjM0' } })
      .persist()
      .delete('/accounts/abcd/secrets/ad6dc56f-07b5-46e1-a527-85530e625800')
      .reply(204);

    await client.deleteSecret('abcd', 'ad6dc56f-07b5-46e1-a527-85530e625800');
    expect(nock.isDone()).toBeTruthy();
  });
});
