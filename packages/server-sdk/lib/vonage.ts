import { Accounts, Secrets } from '@vonage/accounts';
import { Applications } from '@vonage/applications';
import { Auth, AuthInterface } from '@vonage/auth';
import { ConfigParams } from '@vonage/server-client';
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
  protected credentials: AuthInterface;

  /**
   * Optional configuration parameters.
   */
  protected options: ConfigParams;

  /**
   * Provides access to the Accounts API.
   */
  public accounts: Accounts;

  /**
   * Provides access to the Applications API.
   */
  public applications: Applications;

  /**
   * Provides access to the Messages API.
   */
  public messages: Messages;

  /**
   * Provides access to the Number Insights API.
   */
  public numberInsights: NumberInsights;

  /**
   * Provides access to the Numbers API.
   */
  public numbers: Numbers;

  /**
   * Provides access to the Pricing API.
   */
  public pricing: Pricing;

  /**
   * Provides access to the Redact API.
   */
  public redact: Redact;

  /**
   * Provides access to the Secrets API.
   */
  public secrets: Secrets;

  /**
   * Provides access to the SMS API.
   */
  public sms: SMS;

  /**
   * Provides access to the Users API.
   */
  public users: Users;

  /**
   * Provides access to the Verify V2 API.
   */
  public verify2: Verify2;

  /**
   * Provides access to the Verify API.
   */
  public verify: Verify;

  /**
   * Provides access to the Voice API.
   */
  public voice: Voice;

  /**
   * Provides access to the Video API.
   */
  public video: Video;

  /**
   * Provides access to the Conversations API.
   */
  public conversations: Conversations;

  /**
   * The credentials used for authentication.
   * @param {AuthInterface} credentials - The authentication credentials.
   * @param {ConfigParams} [options] - Optional configuration parameters.
   */
  constructor(credentials: AuthInterface, options?: ConfigParams) {
    if (typeof credentials.getQueryParams === 'undefined') {
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
