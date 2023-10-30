import { AbstractImageMessage } from '../AbstractImageMessage';
import { ViberImageParams } from '../../types';
import { ViberActionParams } from '../../types';

/**
 * Represents an image message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberImage
  extends AbstractImageMessage
  implements ViberImageParams
{
  public channel: 'viber_service';
  public viberService: ViberActionParams;

  /**
   * Constructs a new `ViberImage` instance for the Viber Service channel.
   *
   * @param {ViberImageParams} params - The parameters for the ViberImage message.
   */
  constructor(params: ViberImageParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
