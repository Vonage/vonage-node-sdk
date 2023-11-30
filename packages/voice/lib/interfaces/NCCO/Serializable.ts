/**
 * Checks if an object is serializable to Nexmo Call Control Objects (NCCO).
 *
 * @param {Serializable} nccoObject - The object to check for serializability.
 * @return {boolean} `true` if the object is serializable, otherwise `false`.
 */
export function isNCCOSerializable(nccoObject: Serializable): boolean {
  return 'serializeToNCCO' in nccoObject;
}

/**
 * Interface for objects that can be serialized to Nexmo Call Control Objects (NCCO).
 */
export interface Serializable {
  /**
   * Serialize the object to Nexmo Call Control Objects (NCCO) format.
   *
   * @returns The NCCO representation of the object.
   */
  serializeToNCCO();
}
