import Credentials from './Credentials';
import SMS from './SMS';
import Voice from './Voice';
import Number from './Number';
import Verify from './Verify';
import NumberInsight from './NumberInsight';
import App from './App';
import Account from './Account';

class Nexmo {
  /**
   * @param {Credentials} credentials - Nexmo API credentials
   * @param {string} credentials.key - the Nexmo API key
   * @param {string} credentials.secret - the Nexmo API secret
   * @param {object} options Additional options
   */
  constructor(credentials, options) {
    this._credentials = Credentials.parse(credentials);
    this._options = options;
    
    this.sms = new SMS(this._credentials, this._options);
    this.voice = new Voice(this._credentials, this._options);
    this.number = new Number(this._credentials, this._options);
    this.verify = new Verify(this._credentials, this._options);
    this.numberInsight = new NumberInsight(this._credentials, this._options);
    this.app = new App(this._credentials, this._options);
    this.account = new Account(this._credentials, this._options);
  }
}

export default Nexmo;
