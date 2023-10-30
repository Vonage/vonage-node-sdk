import { AbstractVideoMessage } from '../AbstractVideoMessage';
import { ViberVideoParams } from '../../types';

/**
 * Represents a video message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberVideo
  extends AbstractVideoMessage
  implements ViberVideoParams
{
  public channel: 'viber_service';
  public viberService;

  /**
   * Constructs a new `ViberVideo` instance for the Viber Service channel.
   *
   * @param {ViberVideoParams} params - The parameters for the ViberVideo message.
   */
  constructor(params: ViberVideoParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
