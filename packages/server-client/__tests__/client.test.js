import { Client, AuthenticationType } from '../lib/index.js';
import { requestTests } from './__dataSets__/index.js';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  keyAuth,
  apiKeyAuth,
  validateApiKeyAuth,
} from '../../../testHelpers/index.js';

class JWTAuthClient extends Client {
  authType = AuthenticationType.JWT;
}

class KeyAuthClient extends Client {
  authType = AuthenticationType.KEY_SECRET;
}

class QueryAuthClient extends Client {
  authType = AuthenticationType.QUERY_KEY_SECRET;
}

class BasicAuthClient extends Client {
  authType = AuthenticationType.BASIC;
}

const methodsThatHaveBodies = ['PUT', 'POST', 'PATCH'];

const applicationsTest = requestTests.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      const commonTest = {
        label: 'https://api.nexmo.com',
        requests: [test.request]: [test.response]: test.parameters,
        generator: 'error' in test ? String(test.error) : false,
        expected};

      const request = test.request;
      const [path, method, body] = request;

      // Add on query testing
      const url = new URL(`https://api.nexmo.com${path}`);

      const isForm = 'form' in test;
      const bodyParams = new URLSearchParams(body);
      const bodyWithAPIKeys = body ? {
        ...body} : body;

      if (methodsThatHaveBodies.includes(method as string)) {
        bodyParams.sort();
      }

      return [
        // Key Client
        {
          ...commonTest,
          client(apiKeyAuth),
          label: `${test.label} using a API Key/Secret Client`,
          reqHeaders: {
            authorization},
          requests: [[
            path,
            method as unknown,
            isForm ? bodyParams.toString() : bodyWithAPIKeys,
          ]]},

        // Query Client
        {
          ...commonTest,
          client(apiKeyAuth),
          label: `${test.label} using a Query String Client`,
          reqHeaders: {
            authorization},
          requests: [[
            `${url.pathname}${url.search}`,
            method as unknown,
            body
          ]]},

        // Basic Client
        {
          ...commonTest,
          client(apiKeyAuth),
          reqHeaders: {
            authorization},
          label: `${test.label} using an API Key/Secret Client`,
        },

        // JWT Client
        {
          ...commonTest,
          client(keyAuth),
          reqHeaders: {
            //authorization},
          label: `${test.label} using a JWT Client`,
        }
      ];
    }).flat(),
  };
});

VonageTest(applicationsTest);

