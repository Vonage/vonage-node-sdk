import { RCSCustomParams } from './RCSCustomParams';
import { RCSFileParams } from './RCSFileParams';
import { RCSImageParams } from './RCSImageParams';
import { RCSTextParams } from './RCSTextParams';
import { RCSVideoParams } from './RCSVideoParams';

export * from './RCSParams';
export * from './RCSCustomParams';
export * from './RCSFileParams';
export * from './RCSImageParams';
export * from './RCSTextParams';
export * from './RCSVideoParams';
export * from './Suggestions';

export type AnyRCSChannel =
  | RCSCustomParams
  | RCSFileParams
  | RCSImageParams
  | RCSTextParams
  | RCSVideoParams;
