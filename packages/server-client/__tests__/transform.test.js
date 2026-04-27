import { transfomTests } from './__dataSets__/index.js';
import { Client } from '../lib/index.js';
import {
import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
  ObjectToTransform,
  TransformedObject,
  PartialTransformFunction
} from '../lib/transformers';

  transformFn: ObjectToTransform;
  parameters: [boolean, boolean];
  expected;
};

for (const _dsItem of transfomTests) {
  const {  tests  } = _dsItem;
  describe(_dsItem.label, () => {

    const testCases= tests.map(
      ({ label, ...rest }) => ({ label, ...rest }));

    for (const _tc of testCases) {
    test(`Can ${_tc.label} [using ${_tc.transformFn}]`, async ({ 
        transformFn,
        original,
        parameters,
        expected
       } = _tc) => {
        const notMutated = Object.freeze(Object.assign({}, original));
        assert.ok(transformFn.name in Client.transformers);
        const results = transformFn(original, ...parameters as [boolean, boolean]
        );

        assert.deepEqual(results, expected);

        // Ensure the original object is not mutated.
        assert.deepEqual(original, notMutated);
      }
    );
  });

describe('Omit Test', () => {
  test('Can omit keys', async () => {
    const original = {
      foo: 'bar',
      fizz: 'buzz',
    };

    expect(Client.transformers.omit(['foo'], original)).toEqual({ fizz: 'buzz' });
    // Ensure the original object is not mutated.
    assert.deepEqual(original, { foo: 'bar', fizz: 'buzz' });
  });
});
