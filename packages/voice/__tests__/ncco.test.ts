import {
  NCCOActions,
  TTSLanguages,
  RecordingFormat,
  ConnectEventType,
  MachineDetection,
} from '../lib';
import { Connect } from '../lib/classes/NCCO/Connect';
import { Conversation } from '../lib/classes/NCCO/Conversation';
import { Input } from '../lib/classes/NCCO/Input';
import { NCCOBuilder } from '../lib/classes/NCCO/NCCOBuilder';
import { Notify } from '../lib/classes/NCCO/Notify';
import { Record } from '../lib/classes/NCCO/Record';
import { Stream } from '../lib/classes/NCCO/Stream';
import { Talk } from '../lib/classes/NCCO/Talk';
import { Wait } from '../lib/classes/NCCO/Wait';

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

  // ── Talk ──────────────────────────────────────────────────────────────────

  test('talk serializes with all optional params (number style)', () => {
    const talk = new Talk(
      'Hello world',
      true,
      3,
      '0.5',
      TTSLanguages.EN_US,
      1,
      true,
    );

    expect(talk.serializeToNCCO()).toEqual({
      action: NCCOActions.TALK,
      text: 'Hello world',
      bargeIn: true,
      loop: 3,
      level: '0.5',
      language: TTSLanguages.EN_US,
      style: 1,
      premium: true,
    });
  });

  test('talk serializes with string style for backwards compatibility', () => {
    const talk = new Talk('Hello', false, 1, undefined, undefined, '0');
    expect(talk.serializeToNCCO()).toMatchObject({
      action: NCCOActions.TALK,
      text: 'Hello',
      style: '0',
    });
  });

  // ── Conversation ──────────────────────────────────────────────────────────

  test('conversation will serialize', async () => {
    const conv = new Conversation('Test Conversation');
    conv.canHear = ['test'];

    expect(conv.serializeToNCCO()).toEqual({
      action: 'conversation',
      name: 'Test Conversation',
      canHear: ['test'],
    });
  });

  test('conversation serializes with all optional constructor params', () => {
    const conv = new Conversation(
      'Full Conversation',
      'https://example.com/hold.mp3',
      true,
      true,
      true,
      ['speaker-1'],
      ['listener-1'],
      true,
    );

    expect(conv.serializeToNCCO()).toEqual({
      action: NCCOActions.CONVERSATION,
      name: 'Full Conversation',
      musicOnHoldUrl: ['https://example.com/hold.mp3'],
      startOnEnter: true,
      endOnExit: true,
      record: true,
      canSpeak: ['speaker-1'],
      canHear: ['listener-1'],
      mute: true,
    });
  });

  // ── Input ─────────────────────────────────────────────────────────────────

  test('input with speech-only settings serializes correctly', () => {
    const input = new Input(undefined, { endOnSilence: true, language: 'en-US' });

    expect(input.serializeToNCCO()).toEqual({
      action: NCCOActions.INPUT,
      type: ['speech'],
      eventUrl: [],
      speech: { endOnSilence: true, language: 'en-US' },
    });
  });

  test('input with eventMethod serializes correctly', () => {
    const input = new Input({ maxDigits: 1 }, undefined, 'https://example.com/ivr', 'POST');

    expect(input.serializeToNCCO()).toMatchObject({
      action: NCCOActions.INPUT,
      type: ['dtmf'],
      eventUrl: ['https://example.com/ivr'],
      eventMethod: 'POST',
    });
  });

  test('input with mode asynchronous sets mode property', () => {
    const input = new Input({ maxDigits: 1 }, undefined, undefined, undefined, 'asynchronous');

    expect(input.mode).toBe('asynchronous');
    expect(input.serializeToNCCO()).toMatchObject({
      action: NCCOActions.INPUT,
      type: ['dtmf'],
    });
  });

  test('input throws when neither dtmf nor speech provided', () => {
    expect(() => new Input()).toThrow(
      'Input action must have at least either DTMF or Speech settings',
    );
  });

  // ── Connect ───────────────────────────────────────────────────────────────

  test('connect serializes with minimal params', () => {
    const connect = new Connect({ type: 'phone', number: '14152739164' });

    expect(connect.serializeToNCCO()).toEqual({
      action: NCCOActions.CONNECT,
      endpoint: [{ type: 'phone', number: '14152739164' }],
    });
  });

  test('connect serializes with all optional params', () => {
    const connect = new Connect(
      { type: 'phone', number: '14152739164' },
      '19162255887',
      true,
      ConnectEventType.SYNCHRONOUS,
      30,
      5,
      MachineDetection.CONTINUE,
      'https://example.com/event',
      'POST',
      'https://example.com/ringback.mp3',
    );

    expect(connect.serializeToNCCO()).toEqual({
      action: NCCOActions.CONNECT,
      endpoint: [{ type: 'phone', number: '14152739164' }],
      from: '19162255887',
      randomFromNumber: true,
      eventType: ConnectEventType.SYNCHRONOUS,
      timeout: 30,
      limit: 5,
      machineDetection: MachineDetection.CONTINUE,
      eventUrl: ['https://example.com/event'],
      eventMethod: 'POST',
      ringbackTone: 'https://example.com/ringback.mp3',
    });
  });

  // ── Notify ────────────────────────────────────────────────────────────────

  test('notify serializes without eventMethod', () => {
    const notify = new Notify(
      { room_name: 'my-room' },
      'https://example.com/event',
    );

    expect(notify.serializeToNCCO()).toEqual({
      action: NCCOActions.NOTIFY,
      payload: { room_name: 'my-room' },
      eventUrl: ['https://example.com/event'],
    });
  });

  test('notify serializes with eventMethod', () => {
    const notify = new Notify(
      { room_name: 'my-room' },
      'https://example.com/event',
      'POST',
    );

    expect(notify.serializeToNCCO()).toEqual({
      action: NCCOActions.NOTIFY,
      payload: { room_name: 'my-room' },
      eventUrl: ['https://example.com/event'],
      eventMethod: 'POST',
    });
  });

  // ── Stream ────────────────────────────────────────────────────────────────

  test('stream serializes with minimal params', () => {
    const stream = new Stream('https://example.com/audio.mp3');

    expect(stream.serializeToNCCO()).toEqual({
      action: NCCOActions.STREAM,
      streamUrl: ['https://example.com/audio.mp3'],
    });
  });

  test('stream serializes with all optional params', () => {
    const stream = new Stream('https://example.com/audio.mp3', 0.5, true, 3);

    expect(stream.serializeToNCCO()).toEqual({
      action: NCCOActions.STREAM,
      streamUrl: ['https://example.com/audio.mp3'],
      level: 0.5,
      bargeIn: true,
      loop: 3,
    });
  });

  // ── Record ────────────────────────────────────────────────────────────────

  test('record serializes with no params', () => {
    const record = new Record();

    expect(record.serializeToNCCO()).toEqual({
      action: NCCOActions.RECORD,
    });
  });

  test('record serializes with all params', () => {
    const record = new Record(
      RecordingFormat.MP3,
      'conversation',
      2,
      5,
      '#',
      60,
      true,
      'https://example.com/event',
      'POST',
    );

    expect(record.serializeToNCCO()).toEqual({
      action: NCCOActions.RECORD,
      format: RecordingFormat.MP3,
      split: 'conversation',
      channels: 2,
      endOnSilence: 5,
      endOnKey: '#',
      timeOut: 60,
      beepStart: true,
      eventUrl: ['https://example.com/event'],
      eventMethod: 'POST',
    });
  });

  test('record split getter always returns "conversation" regardless of state', () => {
    const record = new Record();
    // The getter is hardcoded and returns 'conversation' even before split is set
    expect(record.split).toBe('conversation');
    record.split = 'conversation';
    expect(record.split).toBe('conversation');
  });

  test('record split setter throws for non-conversation value', () => {
    const record = new Record();
    expect(() => { record.split = 'individual'; }).toThrow(
      'Recording can only be split to \'conversation\'',
    );
  });

  test('record channels setter validates range', () => {
    const record = new Record();
    record.split = 'conversation';

    record.channels = 1;
    expect(record.channels).toBe(1);

    record.channels = 32;
    expect(record.channels).toBe(32);

    expect(() => { record.channels = 0; }).toThrow(
      'Channels must be between 1 and 32, inclusive',
    );
    expect(() => { record.channels = 33; }).toThrow(
      'Channels must be between 1 and 32, inclusive',
    );
  });

  test('record channels setter throws when split is not set', () => {
    const record = new Record();
    expect(() => { record.channels = 2; }).toThrow(
      'Channels must have split set to \'conversation\' before changing channel numbers',
    );
  });

  test('record endOnKey setter validates characters', () => {
    const record = new Record();

    for (const char of ['0', '1', '9', '*', '#']) {
      record.endOnKey = char;
      expect(record.endOnKey).toBe(char);
    }

    expect(() => { record.endOnKey = 'A'; }).toThrow(
      'Valid characters are 0-9, *, and # only',
    );
    expect(() => { record.endOnKey = '12'; }).toThrow(
      'Valid characters are 0-9, *, and # only',
    );
  });

  test('record endOnSilence setter validates range', () => {
    const record = new Record();

    record.endOnSilence = 3;
    expect(record.endOnSilence).toBe(3);

    record.endOnSilence = 10;
    expect(record.endOnSilence).toBe(10);

    expect(() => { record.endOnSilence = 2; }).toThrow(
      'End on Silence must be between 3 and 10 seconds, inclusive',
    );
    expect(() => { record.endOnSilence = 11; }).toThrow(
      'End on Silence must be between 3 and 10 seconds, inclusive',
    );
  });

  test('record timeout setter validates range', () => {
    const record = new Record();

    record.timeout = 3;
    expect(record.timeout).toBe(3);

    record.timeout = 7200;
    expect(record.timeout).toBe(7200);

    expect(() => { record.timeout = 2; }).toThrow(
      'Recording timeout must be between 3 and 7200 seconds, inclusive',
    );
    expect(() => { record.timeout = 7201; }).toThrow(
      'Recording timeout must be between 3 and 7200 seconds, inclusive',
    );
  });

  // ── Wait ──────────────────────────────────────────────────────────────────

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
