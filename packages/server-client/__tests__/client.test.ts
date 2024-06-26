import { Client, AuthenticationType } from '../lib';
import { requestTests } from './__dataSets__';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKey,
  apiSecret,
  keyAuth,
  apiKeyAuth,
  validateApiKeyAuth,
} from '../../../testHelpers';

class JWTAuthClient extends Client {
  protected authType = AuthenticationType.JWT;
}

class KeyAuthClient extends Client {
  protected authType = AuthenticationType.KEY_SECRET;
}

class QueryAuthClient extends Client {
  protected authType = AuthenticationType.QUERY_KEY_SECRET;
}

class BasicAuthClient extends Client {
  protected authType = AuthenticationType.BASIC;
}

type AnyClient = JWTAuthClient | KeyAuthClient | QueryAuthClient | BasicAuthClient;

const methodsThatHaveBodies = ['PUT', 'POST', 'PATCH'];

const applicationsTest = requestTests.map((dataSet): TestTuple<AnyClient> => {
  const { label, tests } = dataSet;

  return {
    name: label,
    tests: tests.map((test): Array<SDKTestCase<AnyClient>> => {
      const commonTest = {
        label: test.label,
        baseUrl: 'https://api.nexmo.com',
        requests: [test.request] as TestRequest[],
        responses: [test.response] as TestResponse[],
        clientMethod: test.clientMethod as keyof Client,
        parameters: test.parameters,
        generator: false,
        error: 'error' in test ? String(test.error) : false,
        expected: test.expected,
      };

      const request = test.request;
      const [path, method, body] = request;

      // Add on query testing
      const url = new URL(`https://api.nexmo.com${path}`);
      url.searchParams.set('api_key', apiKey);
      url.searchParams.set('api_secret', apiSecret);

      const isForm = 'form' in test;
      const bodyParams = new URLSearchParams(body);
      const bodyWithAPIKeys = body ? {
        ...body as Record<string, string>,
        api_key: apiKey,
        api_secret: apiSecret,
      } : body;

      if (methodsThatHaveBodies.includes(method as string)) {
        bodyParams.set('api_key', apiKey);
        bodyParams.set('api_secret', apiSecret);
        bodyParams.sort();
      }

      return [
        // Key Client
        {
          ...commonTest,
          client: new KeyAuthClient(apiKeyAuth),
          label: `${test.label} using a API Key/Secret Client`,
          requests: [[
            path,
            method as unknown,
            isForm ? bodyParams.toString() : bodyWithAPIKeys,
          ]] as TestRequest[],
        },

        // Query Client
        {
          ...commonTest,
          client: new QueryAuthClient(apiKeyAuth),
          label: `${test.label} using a Query String Client`,
          requests: [[
            `${url.pathname}${url.search}`,
            method as unknown,
            body
          ]] as TestRequest[],
        },

        // Basic Client
        {
          ...commonTest,
          client: new BasicAuthClient(apiKeyAuth),
          reqHeaders: {
            authorization: validateApiKeyAuth,
          },
          label: `${test.label} using an API Key/Secret Client`,
        },

        // JWT Client
        {
          ...commonTest,
          client: new JWTAuthClient(keyAuth),
          reqHeaders: {
            //authorization: validateApiKeyAuth,
          },
          label: `${test.label} using a JWT Client`,
        }
      ];
    }).flat(),
  };
});

VonageTest(applicationsTest);

