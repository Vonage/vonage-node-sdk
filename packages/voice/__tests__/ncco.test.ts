import {
  NCCOActions,
} from '../lib';
import { Conversation } from '../lib/classes/NCCO/Conversation';
import { Input } from '../lib/classes/NCCO/Input';
import { Talk } from '../lib/classes/NCCO/Talk';
import { Wait } from '../lib/classes/NCCO/Wait';
import { NCCOBuilder } from '../lib/classes/NCCO/NCCOBuilder';

describe('voice', () => {
  test('can add a single action', async () => {
    const expectedBody = [
      {
        action: 'talk',
        text: 'This call was transferred',
      },
    ];

    const ncco = new NCCOBuilder();
    ncco.addAction(new Talk('This call was transferred'));

    expect(ncco.build()).toEqual(expectedBody);
  });

  test('can combine multiple actions', async () => {
    const expectedBody = [
      {
        action: 'talk',
        text: 'This call was transferred',
      },
      {
        action: 'input',
        eventUrl: ['https://example.com/ivr'],
        type: ['dtmf'],
        dtmf: {
          maxDigits: 1,
        },
      },
    ];

    const ncco = new NCCOBuilder();
    ncco
      .addAction(new Talk('This call was transferred'))
      .addAction(
        new Input({ maxDigits: 1 }, undefined, 'https://example.com/ivr'),
      );

    expect(ncco.build()).toEqual(expectedBody);
  });

  test('can build my own NCCO', async () => {
    const expectedBody = [
      {
        action: 'talk',
        text: 'This call was transferred',
      },
    ];

    const ncco = new NCCOBuilder();
    ncco.addAction({
      action: NCCOActions.TALK,
      text: 'This call was transferred',
    });

    expect(ncco.build()).toEqual(expectedBody);
  });

  test('conversation will serialize', async () => {
    const conv = new Conversation('Test Conversation');
    conv.canHear = ['test'];

    expect(conv.serializeToNCCO()).toEqual({
      action: 'conversation',
      name: 'Test Conversation',
      canHear: ['test'],
    });
  });

  test('wait will serialize with default timeout', async () => {
    const wait = new Wait();

    expect(wait.serializeToNCCO()).toEqual({
      action: NCCOActions.WAIT,
    });
  });

  test('wait will serialize with explicit timeout', async () => {
    const wait = new Wait(0.5);

    expect(wait.serializeToNCCO()).toEqual({
      action: NCCOActions.WAIT,
      timeout: 0.5,
    });
  });

  test('wait can be used in an NCCO', async () => {
    const expectedBody = [
      {
        action: 'talk',
        text: 'Please hold',
      },
      {
        action: 'wait',
        timeout: 5,
      },
      {
        action: 'talk',
        text: 'Connecting you now',
      },
    ];

    const ncco = new NCCOBuilder();
    ncco
      .addAction(new Talk('Please hold'))
      .addAction(new Wait(5))
      .addAction(new Talk('Connecting you now'));

    expect(ncco.build()).toEqual(expectedBody);
  });
});
