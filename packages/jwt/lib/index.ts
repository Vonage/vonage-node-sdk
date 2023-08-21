import { JWT } from './jwt';
import { GeneratorOptions } from './common';

export * from './errors/index';

export { JWT, GeneratorOptions };
export * from './acl';

const instance = new JWT();

export function tokenGenerate(
  applicationId: string,
  privateKey: string | Buffer,
  opts?: GeneratorOptions,
) {
  return instance.tokenGenerate(applicationId, privateKey, opts);
}

export function verifySignature(token: string, privateKey: string | Buffer) {
  return instance.verifySignature(token, privateKey);
}
