import { Auth } from '@vonage/auth';
import { Vonage } from '../lib/index.js';
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';

describe('sdk', () => {
  test('client gets created', async () => {
    const client = new Vonage(new Auth({ apiKey: 'abcd', apiSecret: '1234' }));
    assert.ok(client instanceof Vonage, `Expected instanceof Vonage`);
  });
});
