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

import { tokenGenerate } from '../lib'
import { verify } from 'jsonwebtoken'
import fs from 'fs'

const applicationId = '12345'
const privateKey = fs.readFileSync(`${__dirname}/private.test.key`)
const ttl = 1800
const subject = 'test'
const acl = {
    paths: {
        '/messages': {
            methods: ['POST', 'GET'],
            filters: {
                from: '447977271009',
            },
        },
        '/messages/*/': {
            methods: ['GET'],
            filters: {
                from: '447977271009',
            },
        },
    },
}

describe('Token Generator Method', () => {
    test('should throw if missing applicationId or privateKey', () => {
        expect(() => (<any>tokenGenerate)()).toThrow(
            'Missing applicationId or privateKey'
        )
    })

    test('should throw if applicationId not a string', () => {
        expect(() => (<any>tokenGenerate)(12345, privateKey)).toThrow(
            'applicationId must be string'
        )
    })

    test('should throw if privateKey not a string or buffer', () => {
        expect(() => (<any>tokenGenerate)(applicationId, 56789)).toThrow(
            'privateKey must be string or buffer'
        )
    })

    test('should return a valid JWT string', () => {
        let token = tokenGenerate(applicationId, privateKey)
        let decoded = verify(token, privateKey, {
            algorithms: ['RS256'],
        })
        expect(typeof token).toEqual('string')
        expect(decoded).toHaveProperty('iat')
        expect(decoded).toHaveProperty('jti')
        expect(decoded).toHaveProperty('exp')
        expect(decoded).toHaveProperty('application_id')
    })
    test('should accept and use options', () => {
        let token = tokenGenerate(applicationId, privateKey, {
            ttl,
            subject,
            acl,
        })
        let decoded = <any>verify(token, privateKey, { algorithms: ['RS256'] })
        expect(decoded.exp).toEqual(decoded.iat + ttl)
        expect(decoded.sub).toEqual(subject)
        expect(decoded.acl).toMatchObject(acl)
    })
})

//test('should create a generator object', () => { });

//Developers MUST be able to specify and override the following information
//jti - Developer MUST supply a valid UUIDv4 string
//nbf - Developer MUST supply an integer representing a Unix Timestamp (UTC+0)
//ttl - Developer MUST supply the number of seconds to add to the iat time (outputs as exp)
//acl->path - Developer MUST supply a string with the path, and the developer MAY supply ACL options.
//sub - Developer MUST supply a string name

//The Generator MUST allow the developer to set these items in bulk as well as individually.

//Fields MUST be able to be accessed via methods on the Token Generator object.

// Developers MUST NOT be able to modify the following fields:
// alg - This MUST be set to RS256
// typ - This MUST be set to JWT
// application_id - This MUST be supplied as a mandatory field to the generator, and MUST NOT be changed after
// iat - This MUST be generated as a Unix Timestamp (UTC+0) at the time the token string is generated

// If the developer does not specify a JTI, then the Generator MUST create a valid UUIDv4 string on behalf of the developer.
// The developer MUST be able to query the generator to access what the generated ID is.
// If the developer supplies a JTI, then the Generator MUST use the supplied JTI.
