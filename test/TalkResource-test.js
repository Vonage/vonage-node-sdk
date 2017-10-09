import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import ResourceTestHelper from './ResourceTestHelper';

import TalkResource from '../lib/TalkResource';
import HttpClient from '../lib/HttpClient';
import Credentials from '../lib/Credentials';

const creds = Credentials.parse({
  applicationId: 'some-id',
  privateKey: __dirname + '/private-test.key'
});
var emptyCallback = () => {};

describe('TalkResource', () => {

  let httpClientStub = null;
  let talk = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    const options = {
      httpClient: httpClientStub
    };
    talk = new TalkResource(creds, options);
  });

  it('should be able to start a talk', () => {
    const callId = '2342342-lkjhlkjh-32423';
    const params = {
      text: 'Hello!'
    };
    talk.start(callId, params, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: TalkResource.PATH.replace('{call_uuid}', callId),
      method: 'PUT'
    });
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should be possible to stop an ongoing talk', () => {
    const callId = '2342342-lkjhlkjh-32423';
    talk.stop(callId, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: 'DELETE',
      body: undefined,
      path: TalkResource.PATH.replace('{call_uuid}', callId)
    });

    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

});
