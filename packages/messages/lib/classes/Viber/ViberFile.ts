import { AbstractFileMessage } from '../AbstractFileMessage';
import { ViberFileParams } from '../../types';

/**
 * Represents a file message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberFile
  extends AbstractFileMessage
  implements ViberFileParams
{
  public channel: 'viber_service';
  public viberService;

  /**
   * Constructs a new `ViberFile` instance for the Viber Service channel.
   *
   * @param {ViberFileParams} params - The parameters for the ViberFile message.
   */
  constructor(params: ViberFileParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
