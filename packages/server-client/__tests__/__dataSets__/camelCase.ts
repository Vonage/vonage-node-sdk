export default [
  {
    label: 'Transform to camel case',
    transformFn: 'camelCaseObjectKeys',
    original: {
      foo_bar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      fooBar: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to camel has no effect',
    transformFn: 'camelCaseObjectKeys',
    original: {
      fooBar: 'fizz_buzz',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      fooBar: 'fizz_buzz',
    },
  },
  {
    label: 'Transform to camel will preserves key',
    transformFn: 'camelCaseObjectKeys',
    original: {
      foo_bar: 'fizz_buzz',
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
    label: 'Transform to camel uses transformed key',
    transformFn: 'camelCaseObjectKeys',
    original: {
      foo_bar: 'fizz_buzz',
      fooBar: 'baz_bat',
    },
    parameters: [
      false, // deep
      false, // preserve
    ],
    expected: {
      fooBar: 'baz_bat',
    },
  },
  {
    label: 'Transform to camel deep',
    transformFn: 'camelCaseObjectKeys',
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
      fooBar: {
        fizzBuzz: {
          bazBat: 'qux',
        },
      },
    },
  },
  {
    label: 'Transform to camel deep with array (prevents object confusion)',
    transformFn: 'camelCaseObjectKeys',
    original: {
      foo_bar: ['fizz_buzz', 'baz_bat'],
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      fooBar: ['fizz_buzz', 'baz_bat'],
    },
  },
  {
    label: 'Transform to camel deep with null (prevents object confusion)',
    transformFn: 'camelCaseObjectKeys',
    original: {
      foo_bar: null,
    },
    parameters: [
      true, // deep
      false, // preserve
    ],
    expected: {
      fooBar: null,
    },
  },
];
