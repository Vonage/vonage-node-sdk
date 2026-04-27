import { kebabCaseObjectKeys } from '../../lib/index.js';

export default [
  {
    label: 'Transform to kebab case',
    transformFn: {
      fooBar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      'foo-bar': 'fizz_buzz',
    },
  },
  {
    label: 'Transform to kebab has no effect',
    transformFn: {
      foo_bar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      'foo-bar': 'fizz_buzz',
    },
  },
  {
    label: 'Transform to kebab will preserves key',
    transformFn: {
      fooBar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      true, // preserve
    ],
    expected: {
      'foo-bar': 'fizz_buzz',
      fooBar: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to kebab uses transformed key',
    transformFn: {
      foo_bar: 'fizz_buzz',
      fooBar: 'baz_bat',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      'foo-bar': 'baz_bat',
    },
  },
  {
    label: 'Transform to kebab deep',
    transformFn: {
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
      'foo-bar': {
        'fizz-buzz': {
          'baz-bat': 'qux',
        },
      },
    },
  },
  {
    label: 'Transform to kebab deep with array (prevents object confusion)',
    transformFn: {
      fooBar: ['fizz_buzz', 'baz_bat'],
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      'foo-bar': ['fizz_buzz', 'baz_bat'],
    },
  },
  {
    label: 'Transform to kebab deep with null (prevents object confusion)',
    transformFn: {
      fooBar},
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      'foo-bar': null,
    },
  },
];

