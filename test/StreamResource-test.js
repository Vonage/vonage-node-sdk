import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import ResourceTestHelper from './ResourceTestHelper';

import StreamResource from '../lib/StreamResource';
import HttpClient from '../lib/HttpClient';
import Credentials from '../lib/Credentials';

const creds = Credentials.parse({
  applicationId: 'some-id',
  privateKey: __dirname + '/private-test.key'
});
const emptyCallback = () => {};

describe('StreamResource', () => {

  let httpClientStub = null;
  let stream = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    const options = {
      httpClient: httpClientStub
    };
    stream = new StreamResource(creds, options);
  });

  it('should allow a stream to be started', () => {
    const callId = '2342342-lkjhlkjh-32423';
    const params = {
      stream_url: 'https://example.com/test.mp3' // eslint-disable-line camelcase
    }; // eslint-disable-line camelcase
    stream.start(callId, params, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: StreamResource.PATH.replace('{call_uuid}', callId),
      method: 'PUT'
    });
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should be possible to stop a stream', () => {
    const callId = '2342342-lkjhlkjh-32423';
    stream.stop(callId, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: 'DELETE',
      body: undefined,
      path: StreamResource.PATH.replace('{call_uuid}', callId)
    });

    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

});
