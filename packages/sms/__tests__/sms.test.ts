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

import * as api from "../lib/sms"
import * as types from '../lib/types';
import nock from 'nock';

const config: types.SMSClassParameters = {}
const BASE_URL = "https://rest.nexmo.com".replace(/\/+$/, "");



describe("SMS", () => {
    let client: api.SMS
    beforeEach(function () {
        client = new api.SMS({ apiKey: '12345', apiSecret: 'ABCDE' })
    });

    afterEach(function () {
        client = null
    });
})

