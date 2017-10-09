import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import ResourceTestHelper from './ResourceTestHelper';

import CallsResource from '../lib/CallsResource';
import StreamResource from '../lib/StreamResource';
import TalkResource from '../lib/TalkResource';
import DtmfResource from '../lib/DtmfResource';
import HttpClient from '../lib/HttpClient';
import Credentials from '../lib/Credentials';

const creds = Credentials.parse({
  applicationId: 'some-id',
  privateKey: __dirname + '/private-test.key'
});
const emptyCallback = () => {};

describe('CallsResource', () => {

  let httpClientStub = null;
  let calls = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    const options = {
      httpClient: httpClientStub
    };
    calls = new CallsResource(creds, options);
  });

  it('should allow a call to be created', () => {
    const params = {};
    calls.create(params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params);
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should throw an error if no query is provided', () => {
    const expectThrow = function() {
      calls.get();
    };

    expect(expectThrow).to.throw(Error);
  });

  it('should get a collection of calls', () => {
    calls.get({}, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: 'GET',
      body: undefined,
      path: `${CallsResource.PATH}`
    });

    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should get a single of call using a call ID', () => {
    const callId = '2342342-lkjhlkjh-32423';
    calls.get(callId, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: 'GET',
      body: undefined,
      path: `${CallsResource.PATH}/${callId}`
    });

    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should get a allow calls to be queried by filter', () => {
    calls.get({
      status: 'answered'
    }, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(null, {
      method: 'GET',
      body: undefined,
      path: `${CallsResource.PATH}?status=answered`
    });

    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should allow a call to be updated', () => {
    const callId = '2342342-lkjhlkjh-32423';
    const params = {
      action: 'hangup'
    };
    calls.update(callId, params, emptyCallback);

    const expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      method: 'PUT',
      path: `${CallsResource.PATH}/${callId}`
    });

    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

  it('should expose a stream property', () => {
    expect(calls.stream).to.be.an.instanceOf(StreamResource);
  });

  it('should expose a talk property', () => {
    expect(calls.talk).to.be.an.instanceOf(TalkResource);
  });

  it('should expose a dtmf property', () => {
    expect(calls.dtmf).to.be.an.instanceOf(DtmfResource);
  });

});
