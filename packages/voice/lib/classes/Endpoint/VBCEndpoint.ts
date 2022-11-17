import { VBCEndpointObject } from '../../interfaces/Endpoint/VBCEndpointObject';

export class VBCEndpoint implements VBCEndpointObject {
    type = 'vbc';
    extension: string;

    constructor(extension: string) {
        this.extension = extension;
    }
}
