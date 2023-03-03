import { Client } from '@vonage/server-client';
import {
  MessageSendAllFailure,
  MessageSendPartialFailure,
} from './classes/index';
import { SMSMessages, SMSResponse, Message } from './interfaces/index';
import { SMSParams } from './types/index';
import { SMSStatus } from './enums/index';

export class SMS extends Client {
  public async send(params?: SMSParams): Promise<SMSMessages> {
    const resp = await this.sendPostRequest<SMSResponse>(
      `${this.config.restHost}/sms/json`,
      Client.transformers.kebabCaseObjectKeys(params),
    );

    const messageData: SMSMessages
            = Client.transformers.camelCaseObjectKeys(resp.data, true, true);

    const totalMessages = messageData.messageCount || 0;
    const messages = (messageData.messages as Array<Message>) || [];
    const failures = messages.reduce<number>(
      (failures: number, { status }: Message) =>
        status !== SMSStatus.SUCCESS ? failures + 1 : failures,
      0,
    );

    if (failures < 1) {
      return messageData;
    }

    if (failures === totalMessages) {
      throw new MessageSendAllFailure(messageData);
    }

    throw new MessageSendPartialFailure(messageData);
  }
}
