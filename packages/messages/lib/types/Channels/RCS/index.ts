import { RCSCustomParams } from './RCSCustomParams.js';
import { RCSFileParams } from './RCSFileParams.js';
import { RCSImageParams } from './RCSImageParams.js';
import { RCSTextParams } from './RCSTextParams.js';
import { RCSVideoParams } from './RCSVideoParams.js';

export * from './RCSCustomParams.js';
export * from './RCSFileParams.js';
export * from './RCSImageParams.js';
export * from './RCSTextParams.js';
export * from './RCSVideoParams.js';

export type AnyRCSChannel =
  | RCSCustomParams
  | RCSFileParams
  | RCSImageParams
  | RCSTextParams
  | RCSVideoParams;
