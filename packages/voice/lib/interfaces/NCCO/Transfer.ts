import { Action } from '../../ncco'

export interface NCCOTransfer {
    action: string
    destination: {
        type: string
        ncco: Action[]
    }
}

export interface URLTransfer {
    action: string
    destination: {
        type: string
        url: string[]
    }
}
