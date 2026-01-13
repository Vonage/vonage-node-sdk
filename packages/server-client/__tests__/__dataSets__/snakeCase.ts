import { snakeCaseObjectKeys } from '../../lib';

export default [
  {
    label: 'Transform to snake case',
    transformFn: snakeCaseObjectKeys,
    original: {
      fooBar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      foo_bar: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to snake case with Abbrevation',
    transformFn: snakeCaseObjectKeys,
    original: {
      fooBarUUID: 'fizz_buzz',
      'baz-Bat-UUID': 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      foo_bar_uuid: 'fizz_buzz',
      baz_bat_uuid: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to snake has no effect',
    transformFn: snakeCaseObjectKeys,
    original: {
      foo_bar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      foo_bar: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to snake will preserves key',
    transformFn: snakeCaseObjectKeys,
    original: {
      fooBar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      true, // preserve
    ],
    expected: {
      foo_bar: 'fizz_buzz',
      fooBar: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to snake uses transformed key',
    transformFn: snakeCaseObjectKeys,
    original: {
      foo_bar: 'fizz_buzz',
      fooBar: 'baz_bat',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      foo_bar: 'baz_bat',
    },
  },
  {
    label: 'Transform to snake deep',
    transformFn: snakeCaseObjectKeys,
    original: {
      foo_bar: {
        fizz_buzz: {
          baz_bat: 'qux',
        },
      },
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      foo_bar: {
        fizz_buzz: {
          baz_bat: 'qux',
        },
      },
    },
  },
  {
    label: 'Transform to snake deep with array (prevents object confusion)',
    transformFn: snakeCaseObjectKeys,
    original: {
      fooBar: ['fizz_buzz', 'baz_bat'],
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      foo_bar: ['fizz_buzz', 'baz_bat'],
    },
  },
  {
    label: 'Transform to snake deep with null (prevents object confusion)',
    transformFn: snakeCaseObjectKeys,
    original: {
      fooBar: null,
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      foo_bar: null,
    },
  },
];
