/**
 * Interface for objects that can be serialized to Nexmo Call Control Objects (NCCO).
 *
 * @typedef {Object} Serializable
 */

/**
 * Checks if an object is serializable to Nexmo Call Control Objects (NCCO).
 *
 * @deprecated not needed anymore
 *
 * @param {Serializable} nccoObject - The object to check for serializability.
 * @return {boolean} `true` if the object is serializable, otherwise `false`.
 */
export function isNCCOSerializable(nccoObject) {
  return 'serializeToNCCO' in nccoObject;
}

/**
 * Interface for objects that can be serialized to Nexmo Call Control Objects (NCCO).
 */
