import { NCCOBuilder } from '../lib';
import { Conversation, Input, Talk } from '../lib/ncco';

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
      action: 'talk',
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
});
