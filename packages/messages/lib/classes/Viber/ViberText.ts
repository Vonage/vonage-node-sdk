import { AbstractTextMessage } from '../AbstractTextMessage';
import { ViberActionParams } from '../../types';
import { ViberTextParams } from '../../types';

/**
 * Represents a text message for the Viber Service channel.
 *
 * @group Viber
 */
export class ViberText
  extends AbstractTextMessage
  implements ViberTextParams
{
  public channel: 'viber_service';
  public viberService: ViberActionParams;

  /**
   * Constructs a new `ViberText` instance for the Viber Service channel.
   *
   * @param {ViberTextParams} params - The parameters for the ViberText message.
   */
  constructor(params: ViberTextParams) {
    super(params);
    this.viberService = params.viberService;
    this.channel = 'viber_service';
  }
}
