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

import {
    MessageSendPartialFailure,
} from '../../../lib/classes/Error/MessageSendPartialFailure';

describe('SMS Partial Failure Error', () => {
    test('can get messages', async () => {
        const resp = {
            'message-count': '2',
            'messages': [
                {
                    'to': '447700900000',
                    'message-id': '0A0000000123ABCD1',
                    'status': '0',
                    'remaining-balance': '3.14159265',
                    'message-price': '0.03330000',
                    'network': '12345',
                    'client-ref': 'my-personal-reference',
                    'account-ref': 'customer1234',
                },
                {
                    'to': '447700900002',
                    'message-id': '0A0000000123ABCD2',
                    'status': '2',
                    'remaining-balance': '3.14159265',
                    'message-price': '0.03330000',
                    'network': '12345',
                    'client-ref': 'my-personal-reference',
                    'account-ref': 'customer1234',
                },
            ],
        };

        const err = new MessageSendPartialFailure(
            'One or more messages failed to send',
            resp,
        );
        expect(resp.messages[1]).toEqual(err.getFailedMessages()[0]);
        expect(resp.messages[0]).toEqual(err.getSuccessfulMessages()[0]);
    });
});
