import { Auth } from '@vonage/auth';
import { Client } from '../lib/index'

class MockClient extends Client {}

describe('client', () => {
  test("get request merges auth to query properly", async () => {
    const client = new MockClient(new Auth({apiKey: 'abcd', apiSecret: '1234'}));
    const request = client.addAuthenticationToRequest({method: 'GET', params: {foo: 'bar'}});

    expect(request.params.foo).toEqual('bar');
    expect(request.params.api_key).toEqual('abcd');
    expect(request.params.api_secret).toEqual('1234');
  });

  test("post request merges auth to body properly", async () => {
    const client = new MockClient(new Auth({apiKey: 'abcd', apiSecret: '1234'}));
    const request = client.addAuthenticationToRequest({method: 'POST', data: {foo: 'bar'}});

    expect(request.data.foo).toEqual('bar');
    expect(request.data.api_key).toEqual('abcd');
    expect(request.data.api_secret).toEqual('1234');
  });
});
