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

import { Numbers } from '../lib'

// openapi spec location
// docker run --init -p 4010:4010 stoplight/prism:4 mock -h 0.0.0.0
// https://raw.githubusercontent.com/Nexmo/api-specification/master/definitions/numbers.yml

test('main exports', () => {
    expect(Numbers)
})
