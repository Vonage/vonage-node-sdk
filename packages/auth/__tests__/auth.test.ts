// Copyright 2020 Vonage
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Auth } from '../lib';
import fs from 'fs';

const apiKey = '12345';
const apiSecret = 'ABCDE';
const applicationId = '1234';
const privateKeyString = fs
  .readFileSync(`${__dirname}/private.test.key`)
  .toString();

describe('Auth Object', () => {
  test('should store API Key and Secret from object', () => {
    const auth = new Auth({ apiKey, apiSecret });
    expect(auth.apiKey).toEqual(apiKey);
    expect(auth.apiSecret).toEqual(apiSecret);
  });

  test('should convert privateKey buffer to a string', () => {
    const auth = new Auth({
      applicationId: '1234',
      privateKey: fs.readFileSync(`${__dirname}/private.test.key`),
    });
    expect(auth.applicationId).toEqual(applicationId);
    expect(auth.privateKey).toEqual(privateKeyString);
  });

  test('should use a private key string directly', () => {
    const auth = new Auth({
      applicationId: '1234',
      privateKey: fs
        .readFileSync(`${__dirname}/private.test.key`)
        .toString(),
    });
    expect(auth.applicationId).toEqual(applicationId);
    expect(auth.privateKey).toEqual(privateKeyString);
  });

  test('should convert file path into private key string', () => {
    const privateKeyString = fs
      .readFileSync(`${__dirname}/private.test.key`)
      .toString();
    const auth = new Auth({
      applicationId: '1234',
      privateKey: `${__dirname}/private.test.key`,
    });
    expect(auth.applicationId).toEqual(applicationId);
    expect(auth.privateKey).toEqual(privateKeyString);
  });
});

describe('Auth Methods', () => {
  test('should return query params with getQueryParams', async () => {
    const params = {
      api_key: apiKey,
      api_secret: apiSecret,
    };
    const auth = new Auth({ apiKey, apiSecret });
    expect(await auth.getQueryParams()).toEqual(params);
  });
});
