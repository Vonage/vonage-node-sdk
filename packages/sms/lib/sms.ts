import { Client } from '@vonage/server-client';
import {
  MessageSendAllFailure,
  MessageSendPartialFailure,
} from './classes/index';
import { SMSMessages, SMSResponse, Message } from './interfaces/index';
import { SMSParams } from './types/index';
import { SMSStatus } from './enums/index';
import crypto from 'crypto';
import { AlgorithmTypes } from '@vonage/auth';

export class SMS extends Client {
  public async send(params?: SMSParams): Promise<SMSMessages> {
    const resp = await this.sendPostRequest<SMSResponse>(
      `${this.config.restHost}/sms/json`,
      Client.transformers.kebabCaseObjectKeys(params),
    );

    const messageData: SMSMessages = Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    );

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

  public verifySignature(
    signature: string,
    params: string | { [key: string]: string },
    signatureSecret: string,
    algorithm: AlgorithmTypes,
  ): boolean {
    params = params || {};
    let signedQuery = '';

    params = JSON.parse(JSON.stringify(params)) as { [key: string]: string };

    if (params.sig) {
      delete params.sig;
    }

    Object.keys(params)
      .sort()
      .forEach((key) => {
        // replace & and = with _
        signedQuery += '&' + key + '=' + params[key].replace(/[&=]/g, '_');
      });

    const hashMap = {};
    hashMap[AlgorithmTypes.md5hmac] = 'md5';
    hashMap[AlgorithmTypes.sha1hmac] = 'sha1';
    hashMap[AlgorithmTypes.sha256hmac] = 'sha256';
    hashMap[AlgorithmTypes.sha512hmac] = 'sha512';

    let hash = '';
    switch (algorithm) {
    case AlgorithmTypes.md5hash:
      signedQuery += signatureSecret;
      hash = crypto.createHash('md5').update(signedQuery).digest('hex');
      break;
    case AlgorithmTypes.md5hmac:
    case AlgorithmTypes.sha1hmac:
    case AlgorithmTypes.sha256hmac:
    case AlgorithmTypes.sha512hmac:
      hash = crypto
        .createHmac(hashMap[algorithm], signatureSecret)
        .update(signedQuery)
        .digest('hex');
      break;

    default:
      throw new Error(
        `Unknown signature algorithm: ${algorithm}. Expected: md5hash, md5, sha1, sha256, or sha512`,
      );
    }

    return signature.toUpperCase() === hash.toUpperCase();
  }
}
