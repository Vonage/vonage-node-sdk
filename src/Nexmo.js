import Credentials from './Credentials';
import Message from './Message';
import Voice from './Voice';
import Number from './Number';
import Verify from './Verify';
import NumberInsight from './NumberInsight';
import App from './App';
import Account from './Account';

class Nexmo {
  /**
   * @param {Credentials} credentials - Nexmo API credentials
   * @param {string} credentials.apiKey - the Nexmo API key
   * @param {string} credentials.apiSecret - the Nexmo API secret
   * @param {Object} options Additional options
   * @param {boolean} options.debug `true` to turn on debug logging
   * @param {string} options.appendToUserAgent A value to append to the user agent.
   *                    The value will be prefixed with a `/`
   */
  constructor(credentials, options) {
    this._credentials = Credentials.parse(credentials);
    this._options = options;
    
    this.message = new Message(this._credentials, this._options);
    this.voice = new Voice(this._credentials, this._options);
    this.number = new Number(this._credentials, this._options);
    this.verify = new Verify(this._credentials, this._options);
    this.numberInsight = new NumberInsight(this._credentials, this._options);
    this.app = new App(this._credentials, this._options);
    this.account = new Account(this._credentials, this._options);
  }
}

export default Nexmo;
