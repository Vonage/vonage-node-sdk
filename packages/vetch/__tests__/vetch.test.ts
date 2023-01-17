import { Vetch, request } from '../lib';
import { stringify } from 'querystring';
import nock from 'nock';
import { HTTPMethods } from '../lib/enums/HTTPMethods';

nock.disableNetConnect();

afterEach(() => {
  nock.cleanAll();
});

const url = 'https://just-testing.com';

describe('option validation', () => {
  test('should throw error if no url provided', async () => {
    expect.assertions(1);
    await expect(request({})).rejects.toEqual(new Error('URL is required.'));
  });
});

describe('error handling', () => {
  test('should throw on non-2xx responses by default', async () => {
    expect.assertions(1);
    nock(url).get('/').reply(500);
    await expect(request({ url })).rejects.toEqual(
      expect.objectContaining({ code: '500' }),
    );
  });
});

describe('option configuration', () => {
  test('should use options passed in constructor', async () => {
    expect.assertions(1);
    nock(url).head('/').reply(200);
    const inst = new Vetch({ method: HTTPMethods.HEAD });
    const res = await inst.request({ url });
    expect(res.config.method).toEqual('HEAD');
  });

  test('should allow nested options passed in constructor', async () => {
    expect.assertions(2);
    nock(url).get('/').reply(200);
    const inst = new Vetch({ headers: { spiderman: 'Norman Osbourne' } });
    const res = await inst.request({
      url,
      headers: { ironMan: 'Mandarin' },
    });
    expect(res.config.headers?.spiderman).toEqual('Norman Osbourne');
    expect(res.config.headers?.ironMan).toEqual('Mandarin');
  });

  test('should allow setting a base url', async () => {
    expect.assertions(1);
    nock(url).get('/v1/thor').reply(200, {});
    const inst = new Vetch({ baseURL: `${url}/v1` });
    const res = await inst.request({ url: '/thor' });
    expect(res.data).toEqual({});
  });

  test('should allow URL params', async () => {
    expect.assertions(2);
    const qs = '?black=panther&captain=america';
    const opts = { url: `${url}/${qs}` };
    nock(url).get(`/${qs}`).reply(200, {});
    const res = await request(opts);
    expect(res.status).toEqual(200);
    expect(res.config.url).toEqual(`${url}/${qs}`);
  });

  test('should encode params from object', async () => {
    const opts = {
      url,
      params: {
        black: 'panther',
        captain: 'america',
      },
    };
    const qs = '?black=panther&captain=america';
    nock(url).get(`/${qs}`).reply(200, {});
    const res = await request(opts);
    expect(res.status).toEqual(200);
    expect(res.config.url).toEqual(`${url}${qs}`);
  });

  test('should merge URL with params from options', async () => {
    const opts = {
      url: `${url}?black=panther`,
      params: {
        captain: 'america',
      },
    };
    const qs = '?black=panther&captain=america';
    nock(url).get(`/${qs}`).reply(200, {});
    const res = await request(opts);
    expect(res.status).toEqual(200);
    expect(res.config.url).toEqual(`${url}${qs}`);
  });

  test('should return json by default', async () => {
    const body = { avengers: 'assemble' };
    nock(url).get('/').reply(200, body);
    const res = await request({ url });
    expect(res.data).toEqual(body);
  });

  test('should default to application/json', async () => {
    nock(url)
      .matchHeader('accept', 'application/json')
      .get('/')
      .reply(200, {});
    const res = await request({ url });
    expect(res.data).toEqual({});
  });

  test('should include the request data in the response config', async () => {
    const body = { avengers: 'assemble' };
    nock(url).post('/', body).reply(200);
    const res = await request({ url, method: HTTPMethods.POST, data: body });
    expect(res.config.data).toEqual(body);
  });

  test('should allow for our custom user agent', async () => {
    const options = {
      reqheaders: {
        'user-agent': (val) => {
          return /^@vonage\/server-sdk\/[\d].[\d].[\d].* node\/.*$/.test(
            val,
          );
        },
      },
    };

    nock(url, options).get('/').reply(200);
    const inst = new Vetch();
    const res = await inst.request({ url });
    expect(nock.isDone()).toBeTruthy();
  });
});

describe('data handling', () => {
  test('should accept a string in the request data', async () => {
    const body = { avengers: 'assemble' };
    const encoded = stringify(body);
    nock(url)
      .matchHeader('content-type', 'application/x-www-form-urlencoded')
      .post('/', encoded)
      .reply(200, {});
    const res = await request({
      url,
      method: HTTPMethods.POST,
      data: encoded,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
    expect(res.data).toEqual({});
  });

  test('should default to application/json content-type with object request', async () => {
    const body = { avengers: 'assemble' };
    nock(url)
      .matchHeader('Content-Type', 'application/json')
      .post('/', JSON.stringify(body))
      .reply(200, {});
    const res = await request({
      url,
      method: HTTPMethods.POST,
      data: body,
    });

    expect(res.data).toEqual({});
  });
});

describe('defaults and instances', () => {
  test('should allow creating a new instance', () => {
    const vetch = new Vetch();
    expect(typeof vetch.request).toEqual('function');
  });

  it('should allow passing empty options', async () => {
    const body = { avengers: 'assemble' };
    nock(url).get('/').reply(200, body);
    const vetch = new Vetch({ url });
    const res = await vetch.request();

    expect(res.data).toEqual(body);
  });
});
