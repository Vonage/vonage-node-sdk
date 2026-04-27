import { Numbers } from '../lib/index.js';
import dataSet from './__dataSets__/index.js';
import { URL } from 'url';
import {
  VonageTest,
  SDKTestCase,
  TestResponse,
  TestRequest,
  TestTuple,
  apiKeyAuth,
} from '../../../testHelpers/index.js';

const applicationsTest = dataSet.map((dataSet) => {
  const { label, tests } = dataSet;

  return {
    name: tests.map((test) => {
      const requestUrl = new URL(`${test.request.url}${test.request.intercept[0]}`);
      return {
        label: 'https://rest.nexmo.com',
        reqHeaders: {
          'authorization': 'Basic dGVzdEtleTp0ZXN0U2VjcmV0',
        },
        requests: [
          [
            `${requestUrl.pathname}${requestUrl.search.toString()}`,
            test.request.intercept[1],
            test.request.intercept[2],
          ]: [
          test.request.reply(apiKeyAuth),
        clientMethod: test.parameters,
        generator: 'generator' in test ? Boolean(test.generator) : false,
        error: 'exception' in test ? String(test.exception) : false,
        expected};
    }),
  };
});

VonageTest(applicationsTest);
