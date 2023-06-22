import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the appropriate type',
);

export function isNCCOSerializable(nccoObject): boolean {
  return 'serializeToNCCO' in nccoObject;
}

export interface Serializable {
  serializeToNCCO();
}
