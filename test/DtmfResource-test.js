import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import ResourceTestHelper from './ResourceTestHelper';

import DtmfResource from '../lib/DtmfResource';
import HttpClient from '../lib/HttpClient';
import Credentials from '../lib/Credentials';

var creds = Credentials.parse({
  applicationId: 'some-id',
  privateKey: __dirname + '/private-test.key'
});
var emptyCallback = () => {};

describe('DtmfResource', () => {

  var httpClientStub = null;
  var dtmf = null;

  beforeEach(() => {
    httpClientStub = sinon.createStubInstance(HttpClient);
    var options = {
      httpClient: httpClientStub
    };
    dtmf = new DtmfResource(creds, options);
  });

  it('should be able to send DTMF to a call', () => {
    const callId = '2342342-lkjhlkjh-32423';
    var params = {
      digits: [1, 2, 3, 4]
    };
    dtmf.send(callId, params, emptyCallback);

    var expectedRequestArgs = ResourceTestHelper.requestArgsMatch(params, {
      path: DtmfResource.PATH.replace('{call_uuid}', callId),
      method: 'PUT'
    });
    expect(httpClientStub.request)
      .to.have.been.calledWith(
        sinon.match(expectedRequestArgs),
        emptyCallback
      );
  });

});
