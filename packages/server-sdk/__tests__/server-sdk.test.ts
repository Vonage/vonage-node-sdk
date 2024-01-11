import { Auth } from '@vonage/auth';
import { Vonage } from '../lib/index';

describe('sdk', () => {
  test('client gets created', async () => {
    const client = new Vonage(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
    expect(client).toBeInstanceOf(Vonage);
  });
});
