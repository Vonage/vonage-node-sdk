import { ViberAction } from './ViberAction';
import { ViberActionParams } from './ViberActionParams';
import { ViberFileParams } from './ViberFileParams';
import { ViberImageParams } from './ViberImageParams';
import { ViberService } from './ViberService';
import { ViberTextParams } from './ViberTextParams';
import { ViberVideoParams } from './ViberVideoParams';
import { Channels } from '../../../enums';

export * from './ViberAction';
export * from './ViberActionParams';
export * from './ViberFileParams';
export * from './ViberImageParams';
export * from './ViberService';
export * from './ViberTextParams';
export * from './ViberVideoParams';
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
