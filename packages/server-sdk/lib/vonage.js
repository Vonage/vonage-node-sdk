import { Accounts, Secrets } from '@vonage/accounts';
import { Applications } from '@vonage/applications';
import { Auth } from '@vonage/auth';

import { Messages } from '@vonage/messages';
import { NumberInsights } from '@vonage/number-insights';
import { Numbers } from '@vonage/numbers';
import { Pricing } from '@vonage/pricing';
import { Redact } from '@vonage/redact';
import { SMS } from '@vonage/sms';
import { Users } from '@vonage/users';
import { Verify } from '@vonage/verify';
import { Verify2 } from '@vonage/verify2';
import { Voice } from '@vonage/voice';
import { Video } from '@vonage/video';
import { Conversations } from '@vonage/conversations';

/**
 * Represents the Vonage SDK for interacting with Vonage APIs.
 */
export class Vonage {
  /**
   * The credentials used for authentication.
   */
  credentials;

  /**
   * Optional configuration parameters.
   */
  options;

  /**
   * Provides access to the Accounts API.
   */
  accounts;

  /**
   * Provides access to the Applications API.
   */
  applications;

  /**
   * Provides access to the Messages API.
   */
  messages;

  /**
   * Provides access to the Number Insights API.
   */
  numberInsights;

  /**
   * Provides access to the Numbers API.
   */
  numbers;

  /**
   * Provides access to the Pricing API.
   */
  pricing;

  /**
   * Provides access to the Redact API.
   */
  redact;

  /**
   * Provides access to the Secrets API.
   */
  secrets;

  /**
   * Provides access to the SMS API.
   */
  sms;

  /**
   * Provides access to the Users API.
   */
  users;

  /**
   * Provides access to the Verify V2 API.
   */
  verify2;

  /**
   * Provides access to the Verify API.
   */
  verify;

  /**
   * Provides access to the Voice API.
   */
  voice;

  /**
   * Provides access to the Video API.
   */
  video;

  /**
   * Provides access to the Conversations API.
   */
  conversations;

  /**
   * The credentials used for authentication.
   * @param {AuthInterface} credentials - The authentication credentials.
   * @param {ConfigParams} [options] - Optional configuration parameters.
   */
  constructor(credentials, options) {
    if (!Object.prototype.hasOwnProperty.call(credentials, 'getQueryParams')) {
      credentials = new Auth(credentials);
    }

    this.credentials = credentials;
    this.options = options || {};

    this.accounts = new Accounts(this.credentials, this.options);
    this.applications = new Applications(this.credentials, this.options);
    this.messages = new Messages(this.credentials, this.options);
    this.numberInsights = new NumberInsights(this.credentials, this.options);
    this.numbers = new Numbers(this.credentials, this.options);
    this.pricing = new Pricing(this.credentials, this.options);
    this.redact = new Redact(this.credentials, this.options);
    this.secrets = new Secrets(this.credentials, this.options);
    this.sms = new SMS(this.credentials, this.options);
    this.users = new Users(this.credentials, this.options);
    this.verify = new Verify(this.credentials, this.options);
    this.verify2 = new Verify2(this.credentials, this.options);
    this.voice = new Voice(this.credentials, this.options);
    this.video = new Video(this.credentials, this.options);
    this.conversations = new Conversations(this.credentials, this.options);
  }
}
