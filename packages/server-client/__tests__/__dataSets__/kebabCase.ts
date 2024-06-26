import { kebabCaseObjectKeys } from '../../lib';

export default [
  {
    label: 'Transform to kebab case',
    transformFn: kebabCaseObjectKeys,
    original: {
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
    transformFn: kebabCaseObjectKeys,
    original: {
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
    transformFn: kebabCaseObjectKeys,
    original: {
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
    transformFn: kebabCaseObjectKeys,
    original: {
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
    transformFn: kebabCaseObjectKeys,
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
      'foo-bar': {
        'fizz-buzz': {
          'baz-bat': 'qux',
        },
      },
    },
  },
  {
    label: 'Transform to kebab deep with array (prevents object confusion)',
    transformFn: kebabCaseObjectKeys,
    original: {
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
    transformFn: kebabCaseObjectKeys,
    original: {
      fooBar: null,
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      'foo-bar': null,
    },
  },
];

