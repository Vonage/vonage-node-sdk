import { AuthParams } from '../types/index';
import { AuthInterface } from './AuthInterface';

/**
 * @deprecated
 */
export type AuthConstructor = new (opts?: AuthParams) => AuthInterface
