import { Auth } from '../lib';
import testDataSets from './__dataSets__/index';

describe.each(testDataSets)('$label', ({ tests }) => {
  beforeEach(() => {
    jest.useFakeTimers({
      now: 10907902800000,
    });
  });

  const successTests = tests.filter(({ error }) => !error);
  const failureTests = tests.filter(({ error }) => !!error);

  test.each(successTests)(
    'Can $label by calling: [$method]',
    async ({ method, authParameters, parameters, expected }) => {
      const auth = new Auth(authParameters);
      const results = await auth[method](...parameters);
      expect(results).toEqual(expected);
    },
  );

  if (failureTests.length < 1) {
    return;
  }

  test.each(failureTests)(
    'Will throw $label for method: $clientMethod',
    async ({ method, authParameters, parameters, error }) => {
      const auth = new Auth(authParameters);
      await expect(() => auth[method](...parameters)).rejects.toThrow(
        error,
      );
    },
  );
});
