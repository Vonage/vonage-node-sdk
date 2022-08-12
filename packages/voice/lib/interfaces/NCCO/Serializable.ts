export function isNCCOSerializable(object: unknown): object is Serializable {
    return Object.prototype.hasOwnProperty.call(object, 'serializeToNCCO')
}

export interface Serializable {
    serializeToNCCO()
}
