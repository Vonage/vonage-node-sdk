import Credentials from './Credentials';
import SMS from './SMS';

class Nexmo {
  /**
   * @param {string} key API key
   * @param {string} secret API secret
   * @param {object} options Additional options
   */
  constructor(credentials, options) {
    this._credentials = Credentials.parse(credentials);
    this._options = options;
    
    this.sms = new SMS(this._credentials);
  }
}

export default Nexmo;
