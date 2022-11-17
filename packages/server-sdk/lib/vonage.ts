import { Accounts, Secrets } from '@vonage/accounts';
import { Applications } from '@vonage/applications';
import { Auth, AuthInterface } from '@vonage/auth';
import { Messages } from '@vonage/messages';
import { NumberInsights } from '@vonage/number-insights';
import { Numbers } from '@vonage/numbers';
import { Pricing } from '@vonage/pricing';
import { SMS } from '@vonage/sms';
import { Verify } from '@vonage/verify';
import { ResponseTypes } from '@vonage/vetch';
import { Voice } from '@vonage/voice';

export class Vonage {
    public accounts: Accounts;
    public applications: Applications;
    public messages: Messages;
    public numberInsights: NumberInsights;
    public numbers: Numbers;
    public pricing: Pricing;
    public secrets: Secrets;
    public sms: SMS;
    public verify: Verify;
    public voice: Voice;
    protected credentials: AuthInterface;
    protected options: any;

    constructor(
        credentials: AuthInterface,
        options?: {
            timeout: number
            restHost: string
            apiHost: string
            videoHost: string
            responseType: ResponseTypes
        },
    ) {
        if (typeof credentials.getQueryParams === 'undefined') {
            credentials = new Auth(credentials);
        }

        this.credentials = credentials;
        this.options = options;

        this.accounts = new Accounts(this.credentials, this.options);
        this.applications = new Applications(this.credentials, this.options);
        this.messages = new Messages(this.credentials, this.options);
        this.numberInsights = new NumberInsights(
            this.credentials,
            this.options,
        );
        this.numbers = new Numbers(this.credentials, this.options);
        this.pricing = new Pricing(this.credentials, this.options);
        this.secrets = new Secrets(this.credentials, this.options);
        this.sms = new SMS(this.credentials, this.options);
        this.verify = new Verify(this.credentials, this.options);
        this.voice = new Voice(this.credentials, this.options);
    }
}
