import testDataSets from './__dataSets__/';
import { Messages } from '../lib';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  testPrivateKey,
  TestTuple,
} from '../../../testHelpers';

// Convert the test data sets into SDK test cases
const messageTests = testDataSets.map((dataSet): TestTuple<Messages> => {
  const { label, tests } = dataSet;

  const newTests = tests
    .map((test): SDKTestCase<Messages>[] => {
      const JWTTest: SDKTestCase<Messages> = {
        label: `${test.label} [JWT]`,
        baseUrl: 'https://api.nexmo.com',
        reqHeaders: {
          authorization: (value: string) => value.startsWith('Bearer '),
        },
        responses: [test.response as TestResponse],
        requests: [test.request as TestRequest],
        client: new Messages({
          applicationId: 'abcd-1234',
          privateKey: testPrivateKey,
        }),
        clientMethod: 'send',
        parameters: test.parameters,
        generator: false,
        error: test.error || false,
        expected: test.expected,
      };

      const QueryTest: SDKTestCase<Messages> = {
        label: `${test.label} [API Key and Secret]`,
        baseUrl: 'https://api.nexmo.com',
        responses: [test.response as TestResponse],
        requests: [
          [
          test.request[0],
          test.request[1],
          {
            ...test.request[2],
            api_key: '12345',
            api_secret: 'ABCDE',
          }
        ] as TestRequest,
        ],
        client: new Messages({
          apiKey: '12345',
          apiSecret: 'ABCDE',
        }),
        clientMethod: 'send',
        parameters: test.parameters,
        generator: false,
        error: test.error || false,
        expected: test.expected,
      };

      return [QueryTest, JWTTest];
    })
    .flat();

  return {
    name: label,
    tests: newTests,
  };
});

VonageTest(messageTests);

// describe.each(testDataSets)('$label', ({ tests }) => {
//   afterEach(function () {
//     nock.cleanAll();
//   });
//
//   const successTests = tests
//     .filter(({ error }) => !error)
//     .map((test) => [
//       {
//         ...test,
//         authType: AuthType.QUERY,
//         request: [
//           test.request[0],
//           test.request[1],
//           {
//             ...(test.request[2] as object),
//             api_key: '12345',
//             api_secret: 'ABCDE',
//           },
//         ],
//       },
//       {
//         ...test,
//         authType: AuthType.JWT,
//       },
//     ])
//     .flat();
//
//   const failureTests = tests.filter(({ error }) => !!error);
//
//   test.each(successTests)(
//     'Can $label using method: [$clientMethod] with auth: [$authType]',
//     async ({
//       request,
//       response,
//       clientMethod,
//       parameters,
//       expected,
//       authType,
//     }) => {
//       const scope = getScope(authType);
//       const client = getClient(authType);
//       scope.intercept(...request).reply(...response);
//
//       const results = await client[clientMethod](...parameters);
//       expect(results).toEqual(expected);
//       expect(nock.isDone()).toBeTruthy();
//     },
//   );
//
//   if (failureTests.length < 1) {
//     return;
//   }
//
//   test.each(failureTests)(
//     'Will throw $label for method: $clientMethod',
//     async ({
//       request,
//       response,
//       clientMethod,
//       parameters,
//       error,
//       authType,
//     }) => {
//       const scope = getScope(authType);
//       const client = getClient(authType);
//       request[2] = await request[2]?.sig;
//       scope.intercept(...request).reply(...response);
//
//       await expect(() =>
//         client[clientMethod](...parameters),
//       ).rejects.toThrow(error);
//       expect(nock.isDone()).toBeTruthy();
//     },
//   );
// });
