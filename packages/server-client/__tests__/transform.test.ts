import { transfomTests } from './__dataSets__';
import { Client } from '../lib';
import {
  ObjectToTransform,
  TransformedObject,
  PartialTransformFunction
} from '../lib/transformers';


type TransformTestCase = {
  label: string;
  transformFn: PartialTransformFunction,
  original: ObjectToTransform;
  parameters: [boolean, boolean];
  expected: TransformedObject;
};

describe.each(transfomTests)(
  '$label',
  ({ tests }) => {

    const testCases: Array<TransformTestCase> = tests.map(
      ({ label, ...rest }) => ({ label, ...rest }) as unknown as TransformTestCase
    );

    test.each(testCases)(
      'Can $label [using $transformFn]',
      async ({
        transformFn,
        original,
        parameters,
        expected
      }) => {
        const notMutated = Object.freeze(Object.assign({}, original));
        expect(transformFn.name in Client.transformers).toBeTruthy();
        const results = transformFn(original, ...parameters as [boolean, boolean]
        );

        expect(results).toEqual(expected);

        // Ensure the original object is not mutated.
        expect(original).toEqual(notMutated);
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
    expect(original).toEqual({ foo: 'bar', fizz: 'buzz' });
  });
});
