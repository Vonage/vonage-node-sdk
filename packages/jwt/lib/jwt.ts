import { JWTInterface, GeneratorOptions, Claims } from './common';
import { sign, verify } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import {
  MissingApplicationIdError,
  MissingPrivateKeyError,
  InvalidPrivateKeyError,
  InvalidApplicationIdError,
} from './errors/index';
import debug from 'debug';

const log = debug('vonage:jwt');

export class JWT implements JWTInterface {
  tokenGenerate(
    applicationId: string,
    privateKey: string | Buffer,
    opts?: GeneratorOptions,
  ): string {
    log(`Application id: ${applicationId}`);
    log(`Private key: ${privateKey}`);
    if (!applicationId) {
      throw new MissingApplicationIdError();
    }

    if (!privateKey) {
      throw new MissingPrivateKeyError();
    }

    if (typeof applicationId !== 'string') {
      throw new InvalidApplicationIdError();
    }

    if (typeof privateKey !== 'string' && !(privateKey instanceof Buffer)) {
      throw new InvalidPrivateKeyError();
    }

    const claims = this.validateOptions(opts);
    log('Claims', claims);
    claims.application_id = applicationId;

    return sign(claims, privateKey, {
      algorithm: 'RS256',
      header: { typ: 'JWT', alg: 'RS256' },
    });
  }

  verifySignature(jwt: string, privateKey: string | Buffer): boolean {
    try {
      verify(jwt, privateKey, {
        algorithms: ['RS256'],
      });
      return true;
    } catch (error) {
      log('Error when verifying token', error);
    }

    return false;
  }

  private validateOptions(opts?: GeneratorOptions): Claims {
    const now = parseInt((Date.now() / 1000).toString(), 10);

    const ttl = opts?.ttl || 900;
    if (opts?.ttl) {
      delete opts.ttl;
    }

    const claims: Claims = {
      ...opts,
      jti: opts?.jti || uuidv4(),
      iat: opts?.issued_at || now,
      exp: now + ttl,
    };

    if (opts?.subject) {
      claims.sub = opts.subject;
    }

    if (opts?.acl) {
      claims.acl = opts.acl;
    }

    for (const property in opts) {
      // eslint-disable-next-line
      if (opts.hasOwnProperty(property)) {
        claims[property] = opts[property];
      }
    }

    return claims;
  }
}
