import nock from 'nock';
import { Client } from '@vonage/server-client';
import { Meetings } from '../lib/index';
import { getClient, getScope } from './common';

const dialInNumberOne = {
  number: '12128675309',
  locale: 'us-En',
  display_name: 'Jessie Jessie',
};

const dialInNumberTwo = {
  number: '12123624368',
  locale: 'us-En',
  display_name: 'Dirty Deeds',
};

describe('Meetings > Numbers', () => {
  let client: Meetings;
  let scope: nock;

  beforeEach(() => {
    client = getClient();
    scope = getScope();
  });

  afterEach(() => {
    client = null;
    scope = null;
    nock.cleanAll();
  });

  test('Can get recording by id', async () => {
    scope
      .get(`/v1/meetings/dial-in-numbers`)
      .reply(200, [
        Client.transformers.snakeCaseObjectKeys(dialInNumberOne),
        Client.transformers.snakeCaseObjectKeys(dialInNumberTwo),
      ]);

    const numbers = await client.getDialInNumbers();
    const numberOne = await numbers.next();
    const numberTwo = await numbers.next();

    expect(numberOne.value).toEqual(
      Client.transformers.camelCaseObjectKeys(dialInNumberOne, true),
    );

    expect(numberTwo.value).toEqual(
      Client.transformers.camelCaseObjectKeys(dialInNumberTwo, true),
    );
    expect(nock.isDone()).toBeTruthy();
  });
});
