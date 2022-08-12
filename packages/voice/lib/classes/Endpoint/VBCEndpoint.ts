import { VBCEndpointObject } from '../../interfaces/Endpoint/VBCEndpointObject'

export class VBCEndpoint implements VBCEndpointObject {
    type: string = 'vbc'
    extension: string

    constructor(extension: string) {
        this.extension = extension
    }
}
