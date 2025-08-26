import { ViberAction } from './ViberAction.js';
import { ViberActionParams } from './ViberActionParams.js';
import { ViberFileParams } from './ViberFileParams.js';
import { ViberImageParams } from './ViberImageParams.js';
import { ViberService } from './ViberService.js';
import { ViberTextParams } from './ViberTextParams.js';
import { ViberVideoParams } from './ViberVideoParams.js';
import { Channels } from '../../../enums/index.js';

export * from './ViberAction.js';
export * from './ViberActionParams.js';
export * from './ViberFileParams.js';
export * from './ViberImageParams.js';
export * from './ViberService.js';
export * from './ViberTextParams.js';
export * from './ViberVideoParams.js';

/**
 * Represents a union type that can be any of the Viber-specific message
 * parameters or configurations.
 *
 * @group Viber
 * @category Parameters
 */
export type AnyViberParams =
  | ViberAction
  | ViberActionParams
  | ViberFileParams
  | ViberImageParams
  | ViberService
  | ViberTextParams
  | ViberVideoParams;

/**
 * Represents a union type that includes the 'channel' property set to 'viber'
 * along with any of the Viber-specific message parameters or configurations.
 *
 * @group Viber
 */
export type AnyViberChannel = {
  /**
   * The channel through which the message will be sent, which is 'viber' for Viber.
   */
  channel: Channels.VIBER | string;
} & AnyViberParams;
