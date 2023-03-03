import { SMSStatus } from '../../enums';
import { SMSMessages, ErrorMessage, Message } from '../../interfaces/index';

export class SMSFailure extends Error {
  protected response: SMSMessages;

  constructor(message: string, response: SMSMessages) {
    super(message);
    this.response = response;
  }

  public getMessages(): Array<ErrorMessage & Message> {
    return (this.response.messages as Array<ErrorMessage & Message>) || [];
  }

  public getFailedMessages(): Array<ErrorMessage> {
    return this.getMessages().filter(
      ({ status }: ErrorMessage) => status !== SMSStatus.SUCCESS,
    );
  }

  public getResponse(): SMSMessages {
    return this.response;
  }

  public getSuccessfulMessages(): Array<Message> {
    return this.getMessages().filter(
      ({ status }: Message) => status === SMSStatus.SUCCESS,
    );
  }
}
