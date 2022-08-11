// Copyright 2022 Vonage
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

import nock from 'nock';
import fs from  'fs'
import { Messages } from "../lib/messages";
import { SMS } from '../lib/classes/SMS/SMS';
import { Image as MMSImage } from '../lib/classes/MMS/Image';
import { Image as WhatsAppImage } from '../lib/classes/WhatsApp/Image';
import { Image as MessengerImage } from '../lib/classes/Messenger/Image';
import { Image as ViberImage } from '../lib/classes/Viber/Image';
import { Vcard as MMSVcard } from '../lib/classes/MMS/Vcard';
import { Audio as MMSAudio } from '../lib/classes/MMS/Audio';
import { Audio as MessengerAudio } from '../lib/classes/Messenger/Audio';
import { Audio as WhatsAppAudio } from '../lib/classes/WhatsApp/Audio';
import { Video as MMSVideo } from '../lib/classes/MMS/Video';
import { Video as WhatsAppVideo } from '../lib/classes/WhatsApp/Video';
import { Video as MessengerVideo } from '../lib/classes/Messenger/Video';
import { File as WhatsAppFile } from '../lib/classes/WhatsApp/File';
import { File as MessengerFile } from '../lib/classes/Messenger/File';
import { Text as WhatsAppText } from '../lib/classes/WhatsApp/Text';
import { Text as MessengerText } from '../lib/classes/Messenger/Text';
import { Text as ViberText } from '../lib/classes/Viber/Text';
import { TemplateMessage } from '../lib/classes/WhatsApp/TemplateMessage';
import { CustomMessage } from '../lib/classes/WhatsApp/CustomMessage';
import { Auth } from '@vonage/auth';

const BASE_URL = 'https://api.nexmo.com';

describe('Messages', () => {
    let client;
    
    beforeEach(() => {
        client = new Messages(new Auth({ apiKey: '12345', apiSecret: 'ABCDE'}));
    });

    afterEach(() => {
        client = null;
    });

    test("can send using JWT auth", async () => {
        const client = new Messages(new Auth({ applicationId: 'abcd-1234', privateKey: fs.readFileSync(`${__dirname}/private.test.key`).toString() }));
        const expectedBody = {
            text: 'This is a text message',
            to: '12225551234',
            from: '13335551234',
            message_type: 'text',
            channel: 'sms'
        };

        nock(BASE_URL, {reqheaders: {'Authorization': value => value.startsWith('Bearer ') && value.length > 10 }})
            .persist()
            .post("/v1/messages", expectedBody)
            .reply(202, { message_uuid: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab'});

        const results = await client.send(new SMS(expectedBody.text, expectedBody.to, expectedBody.from));
        expect(results.message_uuid).toEqual('aaaaaaaa-bbbb-cccc-dddd-0123456789ab');
    });

    test.each`
    messageObject                                                                                                                       | objectKey
    ${new SMS('Test message', "12225551234", "13335551234")}                                                                            | ${"text"}
    ${new WhatsAppText('Test message', "12225551234", "13335551234")}                                                                   | ${"text"}
    ${new MessengerText('Test message', "12225551234", "13335551234")}                                                                  | ${"text"}
    ${new ViberText('Test message', "12225551234", "13335551234")}                                                                      | ${"text"}
    ${new MMSImage({ url: 'http://example.com/image.png' }, "12225551234", "13335551234")}                                              | ${"image"}
    ${new WhatsAppImage({ url: 'http://example.com/image.png' }, "12225551234", "13335551234")}                                         | ${"image"}
    ${new MessengerImage({ url: 'http://example.com/image.png' }, "12225551234", "13335551234")}                                        | ${"image"}
    ${new ViberImage({ url: 'http://example.com/image.png' }, "12225551234", "13335551234")}                                            | ${"image"}
    ${new MMSVcard('http://example.com/vcard.vcf', "12225551234", "13335551234")}                                                       | ${"vcard"}
    ${new MMSAudio({ url: 'http://example.com/audio.mp3' }, "12225551234", "13335551234")}                                              | ${"audio"}
    ${new MessengerAudio({ url: 'http://example.com/audio.mp3' }, "12225551234", "13335551234")}                                        | ${"audio"}
    ${new WhatsAppAudio({ url: 'http://example.com/audio.mp3' }, "12225551234", "13335551234")}                                         | ${"audio"}
    ${new MMSVideo({ url: 'http://example.com/video.mp4' }, "12225551234", "13335551234")}                                              | ${"video"}
    ${new WhatsAppVideo({ url: 'http://example.com/video.mp4' }, "12225551234", "13335551234")}                                         | ${"video"}
    ${new MessengerVideo({ url: 'http://example.com/video.mp4' }, "12225551234", "13335551234")}                                        | ${"video"}
    ${new WhatsAppFile({ url: 'http://example.com/file.pdf' }, "12225551234", "13335551234")}                                           | ${"file"}
    ${new MessengerFile({ url: 'http://example.com/file.pdf' }, "12225551234", "13335551234")}                                          | ${"file"}
    ${new TemplateMessage({ name: 'MyNamespace:MyTemplate', parameters: [{key: "Bob Smith"}]}, "12225551234", "13335551234", 'en-GB') } | ${["template", "whatsapp"]}
    ${new CustomMessage({type: "template", template: {}}, "12225551234", "13335551234") }                                               | ${"custom"}
    `("can send various multimedia messages", async ({messageObject, objectKey}) => {
        const expectedBody = {
            api_key: '12345',
            api_secret: 'ABCDE',
            to: messageObject.to,
            from: messageObject.from,
            message_type: messageObject.message_type,
            channel: messageObject.channel
        };

        if (typeof objectKey === "string") {
            expectedBody[objectKey] = messageObject[objectKey];
        } else if (Array.isArray(objectKey)) {
            for (const key in objectKey) {
                expectedBody[objectKey[key]] = messageObject[objectKey[key]];
            };
        }

        nock(BASE_URL)
            .persist()
            .post("/v1/messages", expectedBody)
            .reply(202, { message_uuid: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab'});

        const results = await client.send(messageObject);
        expect(results.message_uuid).toEqual('aaaaaaaa-bbbb-cccc-dddd-0123456789ab');
    });
});
