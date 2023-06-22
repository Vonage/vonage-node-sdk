import { VBCEndpoint as VBCEndpointType } from '../../types/Endpoint/VBCEndpoint';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
export class VBCEndpoint implements VBCEndpointType {
  type: 'vbc';
  extension: string;

  constructor(extension: string) {
    this.extension = extension;
  }
}
